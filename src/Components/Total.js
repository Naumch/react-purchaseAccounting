import React from "react";

function Total({ filteredProducts }) {

  const result = filteredProducts.reduce((sum, prod) => {
    return sum + Number(prod.fields[2].value);
  }, 0);

  return (
    <div className='table__total-wrap'>
      Общий итог: &nbsp; {result} руб.
    </div>
  )
}

export default Total;