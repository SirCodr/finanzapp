import { useEffect } from 'react'
import useCategoriesSelection from "@src/hooks/useCategoriesSelection"
import CategoryItem from "./CategoryItem"
import SubcategoryItem from "./SubcategoryItem"

const CategoriesSelection = ({ onChange = () => {} }) => {
  const { subcategorySelected, handleSubcategorySelection } = useCategoriesSelection()
  const categories = [
    { id: 1, name: 'Categoria 1' },
    { id: 2, name: 'Categoria 2' },
    { id: 3, name: 'Categoria 3' },
    { id: 4, name: 'Categoria 4' },
    { id: 5, name: 'Categoria 5' }
  ]

  const subcategories = [
    { id: 1, name: 'Item 1', category_id: 1 },
    { id: 2, name: 'Item 2', category_id: 1 },
    { id: 3, name: 'Item 3', category_id: 2 },
    { id: 4, name: 'Item 4', category_id: 2 },
    { id: 5, name: 'Item 5', category_id: 3 },
    { id: 6, name: 'Item 6', category_id: 3 },
    { id: 7, name: 'Item 7', category_id: 4 },
    { id: 8, name: 'Item 8', category_id: 4 },
    { id: 9, name: 'Item 9', category_id: 5 },
    { id: 10, name: 'Item 10', category_id: 5 }
  ]

  useEffect(() => {
    if (subcategorySelected) {
      onChange(subcategorySelected)
    }
  }, [subcategorySelected])

  return (
    <article>
      {categories.map((category, index) => (
        <section key={index} className='flex flex-col gap-y-3'>
          <CategoryItem category={category} />
          <ul className='flex gap-x-3 gap-y-1'>
            {subcategories.map((subcategory) => {
              if (subcategory.category_id === category.id) {
                return <SubcategoryItem subcategory={subcategory} onSelect={handleSubcategorySelection} key={subcategory.id} />
              }

              return null
            })}
          </ul>
        </section>
      ))}
    </article>
  )
}

export default CategoriesSelection
