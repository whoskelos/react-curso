import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products.jsx"
import { useContext, useState } from "react"
import { Header } from "./components/header"
import { Footer } from "./components/Footer"
import { FiltersContext } from "./context/filters"


function useFilters () {
  const {filters, setFilters} = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
