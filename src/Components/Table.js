import TableFilter from './TableFilter';
import Rows from './Rows';
import Total from './Total';

function Table({ products, setProducts, categories, filter, setFilter, unix, setUnix, filteredProducts }) {
	
  return (
		<div className='table-wrapper'>
			<TableFilter 
				filter={filter}
				setFilter={setFilter}
				categories={categories}
				unix={unix}
				setUnix={setUnix}
				products={products}
			/>
			{filteredProducts.length === 0 
				? <div>
						<p>Покупок пока не было...</p>
					</div>
				: <div>
						<table>
							<Rows 
								products={products}
								setProducts={setProducts}
								filteredProducts={filteredProducts}
							/>
						</table>
						<Total filteredProducts={filteredProducts}/>
					</div>
			}
		</div>
	)
}

export default Table;