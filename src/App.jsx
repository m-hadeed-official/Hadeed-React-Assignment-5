import Counter from "./components/Counter";
import ProductLike from "./components/ProductLike";
import "./App.css";
function App() {
  return (
    <>
      <Counter />

      <section className="products-container">
        <ProductLike title="Computer" />
        <ProductLike title="Laptop" />
        <ProductLike title="Smart Watch" />
      </section>
    </>
  );
}

export default App;
