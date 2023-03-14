import React from 'react'
import { DateContext } from './App';
import { useSelector } from 'react-redux';


interface RootState {
    date: Date;
    // add other properties as needed
  }


const DateChanger: React.FC = () => {
    const { date, setDate } = React.useContext(DateContext);
   

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(Date.parse(e.target.value));
        setDate(selectedDate);
    };

  return (
    <>
        <input type="date" id='date' onChange={handleDateChange} />
        <p>{date?.toString()}</p>
    </>
  )
}

export default DateChanger