import { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const CalendarWrap = styled.div`
  display: ${props => props.filter === '1' ? 'block' : 'none'};
  border: 1px solid black;
  border-radius: 12px;
  padding: 4px;
  margin-bottom: 10px;
  max-width: 192px;
`;

const DayWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  visibility: ${props => props.isSelectedMonth ? 'visible' : 'hidden'};
  position: relative;
  &::after {
    content: ${props => props.thereIsProd ? '"_"' : '""'};
    line-height: 2px;
    position: absolute;
    font-weight: 900;
    color: #3366cc;
    top: 15px;
  }
`;

function Calendar({ filter, unix, setUnix, products }) {
  const [startingPoint, setStartingPoint] = useState(moment());
  const firstDay =  startingPoint.clone().startOf('month').startOf('week');
  const day = firstDay.clone().subtract(1, 'day');
  const days = [...Array(42)].map(() => day.add(1, 'day').clone());

	const prevHandler = () => setStartingPoint(prev => prev.clone().subtract(1, 'month'));
  const nextHandler = () => setStartingPoint(next => next.clone().add(1, 'month'));

  const isSelectedMonth = (day) => startingPoint.isSame(day, 'month');
  const isSelectedDay = (day) => day.unix() === unix;
  const isCurrentDay = (day) => moment().isSame(day, 'day');

  const thereIsProd = (day, products) => {
    return products.some(prod => +prod.unix === day.unix());
  };

  const result = days.map(day => {
    return (
      <DayWrap 
        key={day.unix()} 
        onClick={() => setUnix(day.unix())}
        thereIsProd={thereIsProd(day, products)}
        isSelectedMonth={isSelectedMonth(day)}
      >
        {!isCurrentDay(day) && !isSelectedDay(day) && <div className='table-calendar__day-wrap'>{day.format('D')}</div>}
        {isCurrentDay(day) && !isSelectedDay(day) && <div className='table-calendar__day currentDay'>{day.format('D')}</div>}
        {isSelectedDay(day) && <div className='table-calendar__day selectedDay'>{day.format('D')}</div>}   
      </DayWrap>
    )
  })

  const dayNames = [...Array(7)].map((_, i) => {
    return (
      <DayWrap 
        key={i} 
        isSelectedMonth={true}
        className='day'
        >
          {moment().day(i + 1).format('dd')}
      </DayWrap>
    )
  })

  return (
    <CalendarWrap filter={filter}>
      <div className='table-calendar__arrows'>
        <button onClick={prevHandler}>&#129121;</button>
        <div>{startingPoint.format('MMM YYYY')}</div>
        <button onClick={nextHandler}>&#129123;</button>
      </div>
      <div className='table-calendar__grid'>
        {dayNames}
      </div>
      <div className='table-calendar__grid'>
        {result}
      </div>
    </CalendarWrap>
  )
}

export default Calendar;