function Datalist({ categories }) {

  const options = categories.map((res, i) => {
    return (
      <option key={i}>        
        {res}
      </option>
    )
  });

  return (
    <datalist id="category">
      {options}
    </datalist>
  )
}

export default Datalist;