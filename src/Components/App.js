import { useState } from 'react';
import { nanoid } from 'nanoid';
import moment from 'moment';
import localization from 'moment/locale/ru';
import styled from 'styled-components';
import Inputs from './Inputs';
import Table from './Table';
import MyChart from './MyChart';

const initProducts = [
	{
		unix: '1652907600', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Автобус', isEdit: false},
			{prop: 'category', value: 'Транспорт', isEdit: false},
			{prop: 'cost', value: '35', isEdit: false}
		]
	},
	{
		unix: '1652821200', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Молоко', isEdit: false},
			{prop: 'category', value: 'Продукты', isEdit: false},
			{prop: 'cost', value: '70', isEdit: false}
		]
	},
	{
		unix: '1652130000', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Ипотека', isEdit: false},
			{prop: 'category', value: 'Кредиты', isEdit: false},
			{prop: 'cost', value: '19000', isEdit: false}
		]
	},
	{
		unix: '1652994000', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Хлебушек', isEdit: false},
			{prop: 'category', value: 'Продукты', isEdit: false},
			{prop: 'cost', value: '100', isEdit: false}
		]
	},
	{
		unix: '1652994000', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Ноутбук', isEdit: false},
			{prop: 'category', value: 'Кредиты', isEdit: false},
			{prop: 'cost', value: '5000', isEdit: false}
		]
	},
	{
		unix: '1652389200', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Коммуналка', isEdit: false},
			{prop: 'category', value: 'Дом', isEdit: false},
			{prop: 'cost', value: '6000', isEdit: false}
		]
	},
	{
		unix: '1618434000', 
    id: nanoid(),
		fields: [
			{prop: 'name', value: 'Корм', isEdit: false},
			{prop: 'category', value: 'Животные', isEdit: false},
			{prop: 'cost', value: '5000', isEdit: false}
		]
	},
];

moment.updateLocale('en', {week: {dow: 1}});
moment.updateLocale('ru', localization);

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	height: 100vh;
	padding: 80px 0;
	display: flex;
	@media (max-width: 1240px) {
		flex-direction: column;
		align-items: center;
	}
	@media (max-width: 655px) {
		padding: 20px 0;
	}
`;

const Wrap = styled.div`
	display: flex;
	@media (max-width: 655px) {
		flex-direction: column;
		align-items: center;
	}
`;

function App() {
  const [products, setProducts] = useState(initProducts);
	const [filter, setFilter] = useState('0');
	const [unix, setUnix] = useState(''); 
	
	const initCategories = products.map(prod => {
    return prod.fields[1].value;
  });

	const res = [...new Set(initCategories)];
	const categories = res.map(res => {
		return res;
	})

	const filteredProducts = products.filter(prod => {
    if (filter === '0') {
      return moment().isSame(moment.unix(prod.unix), 'day');
    } else if (filter === '1') {
      return prod.unix === String(unix);
    } else if (filter === '2') {
      return moment().isSame(moment.unix(prod.unix), 'week');
    } else if (filter === '3') {
      return moment().isSame(moment.unix(prod.unix), 'month');
    } else if (filter === '4') {
      return moment().isSame(moment.unix(prod.unix), 'year');
    } else if (filter === '5') {
      return prod;
    } else if (isNaN(Number(filter))){
			return filter === prod.fields[1].value;
		} else {
			return prod;
		}
  });

  return <Container>
		<Wrap>
			<Inputs 
				products={products} 
				setProducts={setProducts}
				categories={categories}
				filter={filter}
				unix={unix}
			/>
			<Table 
				products={products} 
				setProducts={setProducts}
				categories={categories}
				filter={filter}
				setFilter={setFilter}
				unix={unix}
				setUnix={setUnix}
				filteredProducts={filteredProducts}
			/>
		</Wrap>
		<MyChart 
			filteredProducts={filteredProducts}
			filter={filter}	
			categories={categories}
		/>
  </Container>; 
}

export default App;
