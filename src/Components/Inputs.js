import { useState } from 'react';
import { nanoid } from 'nanoid';
import moment from 'moment';
import Datalist from './Datalist';
 
function Inputs({ products, setProducts, categories, filter, unix }) {
  const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');
	const [value3, setValue3] = useState('');
	
	function addItem() {
    let obj;

    if (String(unix).length === 0 || filter !== '1') {
      obj = {
        unix: String(moment().startOf('day').unix()),
        id: nanoid(),
        fields: [
          {prop: 'name', value: value1, isEdit: false},
          {prop: 'category', value: value2, isEdit: false},
          {prop: 'cost', value: value3, isEdit: false}
        ]
      };
    } else {
      obj = {
        unix: String(unix),
        id: nanoid(),
        fields: [
          {prop: 'name', value: value1, isEdit: false},
          {prop: 'category', value: value2, isEdit: false},
          {prop: 'cost', value: value3, isEdit: false}
        ]
      };
    }

		setProducts([...products, obj]);
    setValue1('');
    setValue2('');
    setValue3('');
	}
	
	return (
    <div className='input-wrapper'>
      <input className='input'
        value={value1} 
        onChange={event => setValue1(event.target.value)}
        placeholder="Название продукта" 
      /> 
      <input className='input' 
        value={value2} 
        onChange={event => setValue2(event.target.value)}
        placeholder="Категория"
        list='category'  
      />
      <Datalist 
        categories={categories}
      />
      <input className='input' 
        value={value3} 
        onChange={event => setValue3(event.target.value)}
        placeholder="Ценa"  
      /> 
      <button 
        className='input__btn-add' 
        onClick={addItem}
      >
        &#43;
      </button>
    </div>
  )
}

export default Inputs;