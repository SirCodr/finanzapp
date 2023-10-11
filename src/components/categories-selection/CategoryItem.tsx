const CategoryItem = ({ category }) => {
  return (
    <div className='py-2 border border-b-gray-400'>
      <span className='font-semibold'>
      {category.name}
    </span>
    </div>
  )
}

export default CategoryItem
