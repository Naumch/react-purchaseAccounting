import styled from 'styled-components';
import Calendar from './Calendar';

const Select = styled.select`
  margin-bottom: 4px;
  border: none;
  border-radius: 12px;
  letter-spacing: 1px;
  padding: 4px 8px;
  cursor: pointer;
`;

function TableFilter({ filter, setFilter, categories, unix, setUnix, products }) {
  let listDates = [
    'За сутки', 
    'Выбрать дату', 
    'За неделю', 
    'За месяц', 
    'За год', 
    'За все время'
  ];
  
  const options = listDates.map((date, i) => {
      return <option value={i} key={i}>{date}</option>;
    }
  );

  const optgroup = categories.map((res, i) => {
    return <option value={res} key={i}>{res}</option>
  });

  return <div>
    <Select value={filter} onChange={(event) => setFilter(event.target.value)}>
      {options}
      <optgroup label="По категориям">
        {optgroup}
      </optgroup>
    </Select>
    <Calendar filter={filter} unix={unix} setUnix={setUnix} products={products}/>
  </div>;
}

export default TableFilter;