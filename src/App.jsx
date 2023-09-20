import Header from "./components/Header"
import Products from "./components/Products"
import { useFilters } from "./hooks/useFilters"
import {products as initialProducts} from "./mocks/products.json"
import {useState } from "react"




function App() {
  const [products] = useState(initialProducts)
  const {filters, filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App