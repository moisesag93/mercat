import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../model/types";
import { addToCart, removeFromCart } from "../../store/reducers/cartSlice";
import { RootState } from "../../store/store";
import { Product } from "../Product/Product";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

type Props = {
    isCheckout: boolean,
}

export const CartFC: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    let total = 0;
    let noProducts = false;
    const products = useSelector((state: RootState) => {
        total = 0;
        if (!state.cart.Products.length) {
            noProducts = true;
        }
        state.cart.Products.forEach((item) => {
            total += item.total!;
            total = parseFloat(total.toFixed(2));
        });

        return state.cart.Products;
    });

    const deleteProduct = React.useCallback(
        (Product: IProduct) => {
            dispatch(removeFromCart(Product));
        }, [dispatch]
    );

    const addProduct = React.useCallback(
        (Product: IProduct) => {
            dispatch(addToCart(Product));
        }, [dispatch]
    );

    console.log(props.isCheckout);

    if (noProducts) {
        return (
            <div>
                <Typography className="px-4 py-3" variant="h5" color="#1976d2">Shopping Cart</Typography>
                <div className="product-container px-4">
                    <Typography sx={{ mb: .5, mt: 3 }} color="text.secondary">
                        No products added yet...
                    </Typography>
                    {
                        props.isCheckout &&
                        <Link to="/">Let's continue shopping!</Link>
                    }
                    {
                        !props.isCheckout &&
                        <Typography sx={{ mb: 2, mt: .5 }} color="text.secondary">
                            <Link to="/checkout">Checkout</Link>
                        </Typography>
                    }
                </div>
            </div>
        );
    }

    return (
        <div>
            <Typography className="px-4 py-3" variant="h5" color="#1976d2">Shopping Cart</Typography>
            <div className="product-container">
                {products.map((product: IProduct) => (
                    <Product
                        key={product.id}
                        product={product}
                        isCart={true}
                        removeProduct={deleteProduct}
                        addProduct={addProduct}
                    />
                ))}
            </div>

            <div className="row justify-content-around align-items-center">
                <div className="col-7">
                    <h3 className="p-3">Total: {total}$</h3>
                </div>
                {
                    !props.isCheckout &&
                    <div className="col">
                        <Link to="/checkout">Checkout</Link>
                    </div>
                }


            </div>
        </div>
    )
}
