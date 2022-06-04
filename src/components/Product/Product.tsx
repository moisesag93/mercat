import * as React from "react"
import { useDispatch } from "react-redux"
import { IProduct } from "../../model/types"
import { addOne, removeOne } from "../../store/reducers/cartSlice"
import Button from '@mui/material/Button';
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type Props = {
  product: IProduct,
  isCart: boolean,
  removeProduct: (product: IProduct) => void
  addProduct: (product: IProduct) => void
}

export const Product: React.FC<Props> = ({ product, isCart, removeProduct, addProduct }) => {
  const dispatch = useDispatch();

  const deleteProduct = React.useCallback(
    (Product: IProduct) => removeProduct(Product),
    [removeProduct]
  )

  const addToCart = React.useCallback(
    (Product: IProduct) => {
      addProduct(Product)
    },
    [addProduct]
  )

  const addOneToCart = (Product: IProduct) => {
    dispatch(addOne(Product));
  }

  const removeOneFromCart = (Product: IProduct) => {
    dispatch(removeOne(Product));
  }
  if (isCart) {
    return (
      <div>
        <div className="row justify-content-between cart-item px-4 align-items-center">
          <div className="col">
            <div className="d-flex">
              <span className="mr-2">
                <strong>{product.name}</strong>
              </span>
            </div>
            <div className="d-flex">
              <small>{product.amiiboSeries}</small>
            </div>
            <div className="d-flex">
              <span className="mr-2">
                <strong>Single: {product.price} $</strong>
              </span>
            </div>
            <div className="d-flex">
              <span className="mr-2">
                <strong>SubTotal: {product.total} $</strong>
              </span>
            </div>
          </div>

          <div className="col">
            <Button onClick={() => removeOneFromCart(product)}><RemoveIcon fontSize="small" /></Button>
            <span className="p-2">{product.qty}</span>

            <Button onClick={() => addOneToCart(product)}><AddIcon fontSize="small" /></Button>
            <Button onClick={() => deleteProduct(product)}><DeleteIcon fontSize="small" /></Button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="col-sm-12 col-md-4 col-lg-3 Product mb-4">
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.seceondary" gutterBottom>
              {product.type}
            </Typography>
            <Typography variant="h5" component="div" color="#1976d2">
              {product.id}. {product.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {product.amiiboSeries}
            </Typography>
            <CardMedia
              component="img"
              alt="green iguana"
              image={product.image}
            />
            <Typography sx={{ mb: .5, mt:1.5 }} color="text.secondary">
              <strong>Price: {product.price}$</strong>
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="w-100" size="small" variant="contained" onClick={() => addToCart(product)}>
              <span className="mr-4">Add to cart</span>
              <AddShoppingCartIcon fontSize="small" />
            </Button>
          </CardActions>
        </Card>

      </div>
    )
  }

}
