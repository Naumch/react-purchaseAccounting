import { useState } from 'react';
import initProducts from '../init';
import moment from 'moment';
import localization from 'moment/locale/ru';
import Inputs from './Inputs';
import Table from './Table';
import MyChart from './MyChart';

moment.updateLocale('en', {week: {dow: 1}});
moment.updateLocale('ru', localization);

function App() {
  const [products, setProducts] = useState(initProducts);
	const [filter, setFilter] = useState('0');
	const [unix, setUnix] = useState(''); 
	
	const initCategories = products.map(prod => {
    return prod.fields[1].value;
  });

	const categories = [...new Set(initCategories)].map(res => {
		return res;
	});

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

  return (
		<div className='container'>
			<div className='wrap'>
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
			</div>
			<MyChart 
				filteredProducts={filteredProducts}
				filter={filter}	
				categories={categories}
			/>
		</div>
	)
}

export default App;
