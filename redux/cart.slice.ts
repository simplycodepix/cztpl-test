import { createSlice, createAsyncThunk, bindActionCreators } from '@reduxjs/toolkit';
import { interpolateAs } from 'next/dist/shared/lib/router/router';
import { RootState } from "./store";


const baseUrl = process.env.ERATI_API || "https://erati.acc.frtn.nl/api/v1/";
const headers = { Accept: 'application/json', 'Content-Type': 'application/json' }

interface CartState {
    Timestamp: number
    Contents: object,
    SessionId?: string,
    Status: string,
    Token?: string
}

interface ProductInput {
    Id: number,
    Quantity: number
}

interface CartUpdateInput {
    Address?: Address
    Relation?: Relation
}

interface Relation {
    Vat?: string
}

interface Address {
    CountryId: number
}

// Define the initial state using that type
const initialState: CartState = {
    Timestamp: 0,
    Contents: {},
    SessionId: "",
    Status: "started"
}
const buildProductRequest = (state: any, input: object) => {
    let request = {
        OrderProducts: [input]
    }
    return buildJson(state, request);
}

const buildJson = (state: any, request: object) => {
    const { cart } = state;
    let wrappedRequest = { Data: request, SessionId: "" }
    if (wrappedRequest.SessionId == "") {
        wrappedRequest.SessionId = cart.SessionId
    }
    return JSON.stringify(wrappedRequest);
}

const buildHeaders = (state: any) => {
    const { cart } = state;

    let defaultHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' }

    let headers: any = {
        ...defaultHeaders
    }
    if (cart.Token) {
        headers.Authorization = `Bearer ${cart.Token}`
    }
    return headers
}

export const updateCart = createAsyncThunk('cart/updateCart', async (input: CartUpdateInput, { getState }) => {
    console.log(input);
    return fetch(baseUrl + 'cart', {
        method: 'PUT', headers: buildHeaders(getState()), body: buildJson(getState(), input)
    }).then((res) => res.json());
})



export const createAccount = createAsyncThunk('account/create', async (input: any, { getState }) => {
    const tempInput = {
        "Email": input.Username,
        "Contact": {
            "Title": "Mr",
            "FirstName": "Daniel",
            "LastName": "Fortuyn",
            "Email": input.Username,
            "Mobile": "06509111111",
            "ContactTypeId": 1
        },
        "Password": input.Password,
        "Relation": {
            "Phone": "0612345678",
            "Currency": "EUR",
            "HostCountryId": 150,
            "Kvk": "not validated",
            "Vat": "also not validated",
            "PrimaryCompanyId": 1,
            "Name": "Acme inc.",
            "Shipping": {
                "Street": "wasstraat",
                "Number": 1,
                "Zip": "2000AP",
                "City": "HoornZ"
            }
        }
    }
    console.log("Sending stuff");
    return fetch(`${baseUrl}account`, {
        method: 'POST', headers, body: JSON.stringify(tempInput)
    }).then((res) => res.json());
})

export const login = createAsyncThunk('login', async (input: any, { getState }) => {
    return fetch(`${baseUrl}login`, {
        method: 'POST', headers, body: JSON.stringify(input)
    }).then((res) => res.json());
})

export const addProduct = createAsyncThunk('cart/addProduct', async (input: ProductInput, { getState }) => {
    return fetch(`${baseUrl}cart/addproducts`, {
        method: 'POST', headers: buildHeaders(getState()), body: buildProductRequest(getState(), input)
    }).then((res) => res.json());
});

export const removeProduct = createAsyncThunk('cart/removeProduct', async (input: ProductInput, { getState }) => {
    console.log(input);
    return fetch(`${baseUrl}cart/addproducts`, { method: 'POST', headers, body: buildProductRequest(getState(), { Id: input.Id, Quantity: 0 }) }).then((res) => res.json());
})

export const quickCheckout = createAsyncThunk('cart/quickCheckout', async (input: object, { getState }) => {
    console.log(input);
    return fetch(`${baseUrl}cart/quickcheckout`, { method: 'POST', headers, body: buildJson(getState(), input) }).then((res) => res.json());
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        signOut(state) {
            delete state.Token
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending || removeProduct.pending, (state, action) => {
                state.Status = 'loading';
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.Contents = action.payload.Data;
                state.SessionId = action.payload.SessionId;
                state.Status = 'done';
                state.Timestamp = Math.floor(Date.now() / 1000)
            })
            .addCase(login.fulfilled, (state, action) => {
                state.Contents = action.payload.Data;
                state.SessionId = action.payload.SessionId;
                state.Token = action.payload.access_token
                state.Timestamp = Math.floor(Date.now() / 1000)
            })
            .addCase(createAccount.fulfilled, (state, action) => {
                console.log(action.payload)
                state.Contents = action.payload.Data;
                state.SessionId = action.payload.SessionId;
                state.Status = 'done';
                state.Timestamp = Math.floor(Date.now() / 1000)
            })
            .addCase(removeProduct.fulfilled, (state, action) => {
                state.Contents = action.payload.Data;
                state.SessionId = action.payload.SessionId;
                state.Status = 'done';
                state.Timestamp = Math.floor(Date.now() / 1000)
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.Contents = action.payload.Data;
                state.SessionId = action.payload.SessionId;
                state.Status = 'done';
                state.Timestamp = Math.floor(Date.now() / 1000)
            })
            .addCase(quickCheckout.fulfilled, (state, action) => {
                state.Contents = {};
                state.SessionId = "";
                state.Status = 'done';
                state.Timestamp = Math.floor(Date.now() / 1000)
                if (action.payload.RedirectUrl) {
                    window.location = action.payload.RedirectUrl;
                } else {
                    console.log(action.payload);
                }
            })
            .addDefaultCase((state, action) => {
                console.log('DEFAULT');
                state.Status = 'unknown';
                console.log(action);
            })
    }
});
export const { signOut } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;