import styled from 'styled-components';

const TotalWrap = styled.div`
  margin: 10px;
`;

function Total({ filteredProducts }) {

  const result = filteredProducts.reduce((sum, prod) => {
    return sum + Number(prod.fields[2].value);
  }, 0);

  return <TotalWrap>Общий итог: &nbsp; {result} руб.</TotalWrap>;
}

export default Total;