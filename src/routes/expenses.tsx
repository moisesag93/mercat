import { CartFC } from "../components/Cart/Cart";
import Header from "../components/header/Header";

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Header />
      <h2 className="ms-4">Checkout</h2>
      <CartFC isCheckout={true} />
    </main>
  );
}