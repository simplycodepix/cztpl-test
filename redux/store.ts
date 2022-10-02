import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { cartReducer } from "./cart.slice"
import { productReducer } from "./product.slice"

// convert object to string and store in localStorage
function saveToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("persistantState", serializedState)
  } catch (e) {
    console.warn(e)
  }
}

const getLocalStorageState = () => {
  try {
    if (typeof localStorage != "undefined") {
      if (localStorage.getItem("persistantState") !== null) {
        let lsString: string = localStorage.getItem("persistantState")!
        return JSON.parse(lsString) // re-hydrate the store
      }
    }
  } catch (e) {
    console.warn(e)
    // return undefined;
  }
}

const reducer = {
  cart: cartReducer,
  product: productReducer,
}

const store = configureStore({
  reducer: reducer,
  preloadedState: getLocalStorageState(),
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()
export const useStoreSelector = () => useDispatch<typeof store.dispatch>()

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
