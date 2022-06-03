import * as React from "react"
import { useDispatch } from "react-redux"
import "./index.css"

import { addProducts } from "./store/reducers/productSlice"
import { listProducts } from "./services/Products/Products.service"
import { Products } from "./components/Product/Products"
import Header from "./components/header/Header"

const App: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const dispatch = useDispatch();

  React.useEffect(() => {
    listProducts().then(products => {
      dispatch(addProducts(products));
    })
  }, [dispatch]);

  return (
    <main>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
        </div>
        <div className="row">
          <Products />
        </div>
      </div>

    </main>
  )
}

export default App