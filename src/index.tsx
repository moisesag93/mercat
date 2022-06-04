import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { render } from "react-dom"
import { Provider } from "react-redux"

import App from "./App"
import { store } from "./store/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './routes/checkout';

/* const store: Store<ProductState, ProductAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk)) */

const rootElement = document.getElementById("root")
render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
)
