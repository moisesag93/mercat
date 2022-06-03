import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductAction, ProductState, IProduct } from "../../model/types"

const initialState: ProductState = {
    Products: [],
}

export const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const product = state.Products.find(
                Product => Product.id === action.payload.id
            );
            if (product) {
                product!.qty++;
                product!.total = product!.qty * product!.price;
                return;
            };
            const newProduct: IProduct = {
                id: action.payload.id, // not really unique
                amiiboSeries: action.payload.amiiboSeries,
                character: action.payload.character,
                gameSeries: action.payload.gameSeries,
                head: action.payload.head,
                image: action.payload.image,
                name: action.payload.name,
                // release: {au: "2015-03-21", eu: "2015-03-20", jp: "2015-03-12", na: "2015-03-20"},
                tail: action.payload.tail,
                type: action.payload.type,
                price: action.payload.price,
                qty: 1,
                total: action.payload.price
            }
            state.Products.push(newProduct);

        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            const updatedProducts: IProduct[] = state.Products.filter(
                Product => Product.id !== action.payload.id
            );
            state.Products = updatedProducts;

        },
        addOne: (state, action: PayloadAction<IProduct>) => {
            const product = state.Products.find(
                Product => Product.id === action.payload.id
            );
            product!.qty++;
            product!.total = product!.qty * product!.price;
        },
        removeOne: (state, action: PayloadAction<IProduct>) => {
            const product = state.Products.find(
                Product => Product.id === action.payload.id
            );
            if (product!.qty > 1) {
                product!.qty--;
                product!.total = product!.qty * product!.price;
            }
        }
    },
});

export const { addToCart, removeFromCart, addOne, removeOne } = cartSlice.actions

export default cartSlice.reducer