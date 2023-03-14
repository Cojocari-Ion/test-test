import React from 'react'
import { useSelector, useDispatch } from 'react-redux'



  

const DateRendering = () => {
    const state = useSelector((state) => state.x.date);
    console.log(state)
  return (
    <>
      <button>
        button
      </button>
      <div>DateRendering</div>
    </>
  )
}

export default DateRendering