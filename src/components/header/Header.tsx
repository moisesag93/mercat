import * as React from "react"
import { useDispatch } from "react-redux"

import { Button, Popover, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { listProducts } from "../../services/Products/Products.service"
import { addProducts } from "../../store/reducers/productSlice"
import { CartFC } from "../Cart/Cart"
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const dispatch = useDispatch();

    React.useEffect(() => {
        listProducts().then(products => {
            dispatch(addProducts(products));
        })
    }, [dispatch]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light main-menu-nav px-4 justify-content-between">
            <Link className="navbar-brand" to="/">
            <Typography variant="h5" component="div" color="#1976d2" fontWeight="bold">
                MERCAT
            </Typography>  
            </Link>
            <Button aria-describedby={id} onClick={handleClick}>
                <ShoppingCartIcon htmlColor="#000"/>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}>
                <CartFC isCheckout={false} />
            </Popover>

        </nav>

    )
}

export default Header