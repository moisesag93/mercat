import * as React from "react"

type Props = {
  search: () => void
}

export const AddProduct: React.FC<Props> = ({ search }) => {

  const searchProducts = (e: React.FormEvent) => {
    e.preventDefault()
    search()
  }

  return (
    <form onSubmit={searchProducts} className="search-Product" action="">
      <button>
        Search Products
      </button>
    </form>
  )
}