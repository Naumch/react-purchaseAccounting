import styled from 'styled-components';
import TableFilter from './TableFilter';
import Rows from './Rows';
import Total from './Total';
import FakeTable from './FakeTable';

const Container = styled.div`
	width: 40%;
	display: flex;
  flex-direction: column;
	margin-left: 16px;
	@media (max-width: 655px) {
		width: 100%;
		margin: 16px 0;
	}
`;

const Display = styled.div`
	display: ${props => props.filteredProducts.length === 0 ? 'none' : 'block'};
`;

function Table({ products, setProducts, categories, filter, setFilter, unix, setUnix, filteredProducts }) {
	
  return <Container>
		<TableFilter 
			filter={filter}
			setFilter={setFilter}
			categories={categories}
			unix={unix}
			setUnix={setUnix}
			products={products}
		/>
		<FakeTable filteredProducts={filteredProducts}/>
		<Display filteredProducts={filteredProducts}>
			<table>
				<Rows 
					products={products}
					setProducts={setProducts}
					filteredProducts={filteredProducts}
				/>
			</table>
			<Total filteredProducts={filteredProducts}/>
		</Display>
	</Container>;
}

export default Table;