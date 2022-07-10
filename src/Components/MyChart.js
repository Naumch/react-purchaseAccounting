import { Chart } from 'react-google-charts';
 
function MyChart({ filteredProducts, filter, categories }) {

  function getSum(category) {
    let sum = 0;
    for (let prod of filteredProducts) {
      if(prod.fields[1].value === category) {
        sum += +prod.fields[2].value;
      }
    }

    return sum;
  }

  let result;
  if (isNaN(Number(filter))) {
    result = filteredProducts.map(prod => {
      return [prod.fields[0].value, +prod.fields[2].value]
    })
  } else {
    result = categories.map(category => {
      return [category, getSum(category)];
    })
  }
  
  const data = [
    ["Category", "Money"],
    ...result
  ];
  
  const options = {};

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      height={"300px"}
      width={"100%"}
    />
  );
}

export default MyChart;