import { Typography } from "@mui/material"
import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { IProduct } from "../../model/types"
import { addToCart } from "../../store/reducers/cartSlice"
import { removeProduct } from "../../store/reducers/productSlice"
import { RootState } from "../../store/store"
import { Product } from "./Product"

export const Products: React.FC = () => {
    const dispatch = useDispatch();

    const products = useSelector((state: RootState) => state.product.Products);
    const cartProducts = useSelector((state: RootState) => state.cart.Products);

    const deleteProduct = React.useCallback(
        (Product: IProduct) => {
            dispatch(removeProduct(Product));
        }, [dispatch]
    );

    const addProduct = React.useCallback(
        (Product: IProduct) => {
            dispatch(addToCart(Product));
        }, [dispatch]
    );
    return (
        <div>
            <Typography variant="h4" component="div">
                Amiibo
            </Typography>
            <div className="row">
                {products.map((product: IProduct) => (
                    <Product
                        key={product.id}
                        isCart={false}
                        product={product}
                        removeProduct={deleteProduct}
                        addProduct={addProduct}
                    />
                ))}
            </div>
        </div>
    )
}
