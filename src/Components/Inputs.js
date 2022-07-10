import { useState } from 'react';
import { nanoid } from 'nanoid';
import moment from 'moment';
import styled from 'styled-components';
import Datalist from './Datalist';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding-top: 36px;
  @media (max-width: 655px) {
		width: 100%;
	}
  @media (max-width: 340px) {
		width: 90%;
	}
`;

const Input = styled.input`
  margin-bottom: 16px;
  height: 36px;
  border-radius: 12px;
  border: 1px solid;
  letter-spacing: 1px;
  padding: 6px 18px;
`;

const Button = styled.button`
  background-color: #ff9900;
  border: none;
  border-radius: 50%;
  font-size: 28px;
  transition: 0.5s;
  width: 36px;
  height: 36px;
  align-self: flex-end;
  &:hover {
    font-size: 32px;
    width: 40px;
    height: 40px;
  }
`;
 
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
	
	return <InputWrapper>
		<Input
      value={value1} 
      onChange={event => setValue1(event.target.value)}
      placeholder="Название продукта" 
    /> 
		<Input 
      value={value2} 
      onChange={event => setValue2(event.target.value)}
      placeholder="Категория"
      list='category'  
    />
    <Datalist 
      categories={categories}
    />
		<Input 
      value={value3} 
      onChange={event => setValue3(event.target.value)}
      placeholder="Ценa"  
    /> 
		<Button onClick={addItem}>&#43;</Button>
	</InputWrapper>;
}

export default Inputs;