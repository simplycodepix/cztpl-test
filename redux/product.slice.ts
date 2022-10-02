import {
  createSlice,
  createAsyncThunk,
  bindActionCreators,
} from "@reduxjs/toolkit"
import { interpolateAs } from "next/dist/shared/lib/router/router"
import { RootState } from "./store"
import { api } from "../services/api"

const baseUrl = process.env.ERATI_API || "https://erati.acc.frtn.nl/api/v1/"
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
}

interface ProductInput {
  productId: string
}

interface Attribute {
  Name: string
  Prefix: string
  Scale: number
  Suffix: string
  Text?: string
  Unit: string
  Value: number
}

export interface ProductImage {
  FileExtension: string
  Filename: string
  Filepath: string
  ImageId: number
  Origin: string
}

export interface ProductPrice {
  Amount: number
  Price: number
  UpdatedAt: string
}

export interface Review {
  AccountId?: string
  Content?: string
  CreatedAt?: string
  Id?: string
  Name?: string
  ProductId?: string
  Stars: string
  Title?: string
}

export interface ProductResponse {
  Id: string
  LegacyId?: string
  Description: string
  Information: string
  Stock: number
  Attributes: {
    [key: string]: Attribute
  }
  Prices: ProductPrice[]
  Images: ProductImage[]
  Reviews: Review[]
  Relations: string[]
  ForeignProductId: string
}

interface productState {
  Timestamp: number
  Contents: ProductResponse | null
  RelatedProducts?: ProductResponse[]
  RecommendedProducts?: ProductResponse[]
  SessionId?: string
  Status: string
  Token?: string
}

// Define the initial state using that type
const initialState: productState = {
  Timestamp: 0,
  Contents: null,
  SessionId: "",
  Status: "started",
  RelatedProducts: [],
  RecommendedProducts: [],
}

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (productId: string) => {
    return api.get(`${baseUrl}product/${productId}`).then(async (response) => {
      const product = response.data.payload

      if (!product?.Relations?.length) return product

      const relatedProducts = await api
        .get(`${baseUrl}products/${product.Relations.join(",")}`)
        .then((response) => {
          return response.data.payload.hits
        })

      return { ...product, RelatedProducts: relatedProducts }
    })
  },
)

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.Status = "loading"
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        const { RelatedProducts, ...product } = action.payload
        state.Contents = product
        state.RelatedProducts = RelatedProducts
        // state.SessionId = action.payload.SessionId;
        state.Status = "done"
        state.Timestamp = Math.floor(Date.now() / 1000)
      })
      .addDefaultCase((state, action) => {
        console.log("DEFAULT")
        state.Status = "unknown"
        console.log(action)
      })
  },
})
export const { reset } = productSlice.actions

export const productReducer = productSlice.reducer
