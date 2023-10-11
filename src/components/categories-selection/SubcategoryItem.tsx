const SubcategoryItem = ({ subcategory, onSelect = () => {} }) => {
  return (
    <li>
      <button onClick={() => onSelect(subcategory)}>
        { subcategory.name }
      </button>
    </li>
  )
}

export default SubcategoryItem
