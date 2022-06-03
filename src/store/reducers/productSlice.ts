import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductState, IProduct } from "../../model/types"

const initialState: ProductState = {
  Products: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Array<IProduct>>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.Products = [];
      action.payload.forEach((product, index) => {
        if (index > 150) return;
        const newProduct: IProduct = {
          id: index + 1, // not really unique
          amiiboSeries: product.amiiboSeries,
          character: product.character,
          gameSeries: product.gameSeries,
          head: product.head,
          image: product.image,
          name: product.name,
          // release: {au: "2015-03-21", eu: "2015-03-20", jp: "2015-03-12", na: "2015-03-20"},
          tail: product.tail,
          type: product.type,
          price: product.price,
          qty: 0
        }
        state.Products.push(newProduct);
      });
      console.log(state.Products);
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      const updatedProducts: IProduct[] = state.Products.filter(
        Product => Product.id !== action.payload.id
      );
      state.Products = updatedProducts;
    }
  },
});

export const { addProducts, removeProduct } = productSlice.actions

export default productSlice.reducer