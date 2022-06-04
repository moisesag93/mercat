import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../model/types";
import { addToCart, removeFromCart } from "../../store/reducers/cartSlice";
import { RootState } from "../../store/store";
import { Product } from "../Product/Product";
import { Link } from "react-router-dom";

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
            <h4 className="px-4 py-2">Shopping Cart</h4>
            <div className="product-container px-4">
                <p>No products added yet.</p>
                {
                    props.isCheckout &&
                    <Link to="/">Let's continue shopping!</Link>
                }
                {
                    !props.isCheckout &&
                    <Link to="/checkout">Checkout</Link>
                }
            </div>
        </div>
        );
    }

    return (
        <div>
            <h4 className="px-4 py-2">Shopping Cart</h4>
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
                <div className="col">
                    <Link to="/checkout">Checkout</Link>
                </div>

            </div>
        </div>
    )
}
