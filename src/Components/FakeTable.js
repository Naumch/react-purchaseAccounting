import styled from "styled-components";

const Display = styled.div`
	display: ${props => props.filteredProducts.length === 0 ? 'block' : 'none'};
  padding-left: 11px;
  padding-top: 4px;
  opacity: 0.7;
`;

function FakeTable({ filteredProducts }) {

  return <Display filteredProducts={filteredProducts}>
    <p>Покупок пока не было...</p>
  </Display>;
}

export default FakeTable;