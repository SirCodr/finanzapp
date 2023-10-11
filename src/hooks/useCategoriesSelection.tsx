import { useState } from 'react'

const useCategoriesSelection = () => {
  const [subcategorySelected, setSubcategorySelected] = useState(null)

  const handleSubcategorySelection = (subcategory) => {
    setSubcategorySelected(subcategory)
  }

  return (
    {
      subcategorySelected,
      handleSubcategorySelection
    }
  )
}

export default useCategoriesSelection
