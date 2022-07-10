import styled from 'styled-components';
import '../index.css';

const Button = styled.button`
	border-radius: 50%;
	width: 24px;
	border: none;
	transition: .5s;
	background-color: #fff;
	&:hover {
    color: #ee381d;
		font-size: 24px;
  }
`;

const Input = styled.input`
	max-width: 104px;
	border-radius: 8px;
	padding: 4px;
	border: 1px solid black;
`;

function Rows({ products, setProducts, filteredProducts }) {
	
	function remItem(id) {
		setProducts(products.filter(prod => prod.id !== id)); 
	}

	function onKeyDown(unix, id, prop, event) {
		if (event.keyCode === 13) {
			endEdit(unix, id, prop);
		}
	}
	
	function startEdit(unix, id, prop) {
		setProducts(products.map(prod => {
			if (prod.id === id) {
				const fields = prod.fields.map(field => {
					if (field.prop === prop) {
						return {...field, isEdit: true}
					} else {
						return field;
					}
				});
				
				return {unix, id, fields};
			} else {
				return prod;
			}
		}));
	}
	
	function endEdit(unix, id, prop) {
		setProducts(products.map(prod => {
			if (prod.id === id) {
				const fields = prod.fields.map(field => {
					if (field.prop === prop) {
						return {...field, isEdit: false}
					} else {
						return field;
					}
				});
				
				return {unix, id, fields};
			} else {
				return prod;
			}
		}));
	}
	
	function changeCell(unix, id, prop, event) {
		setProducts(products.map(prod => {
			if (prod.id === id) {
				const fields = prod.fields.map(field => {
					if (field.prop === prop) {
						return {...field, value: event.target.value}
					} else {
						return field;
					}
				});
				
				return {unix, id, fields};
			} else {
				return prod;
			}
		}));
	}

  const rows = filteredProducts.map(prod => {
		const cells = prod.fields.map(field => {
			let elem;
			
			if (!field.isEdit) {
				elem = <span onClick={() => startEdit(prod.unix, prod.id, field.prop)}>
						{field.value}
					</span>
			} else {
				elem = <Input
						value={field.value}
						onChange={(event) => changeCell(prod.unix, prod.id, field.prop, event)}
						onBlur={() => endEdit(prod.unix, prod.id, field.prop)}
						onKeyDown={(event) => onKeyDown(prod.unix, prod.id, field.prop, event)}
					/>
			}
			
			return <td key={field.prop}>{elem}</td>;
		});
		
		return <tr key={prod.id}>
			{cells}
			<td className='tableBottom-borderNone'>
				<Button onClick={() => remItem(prod.id)}>&#215;</Button> 
			</td>
		</tr>;
	});

  return <tbody>
    {rows}
  </tbody>;
}

export default Rows;