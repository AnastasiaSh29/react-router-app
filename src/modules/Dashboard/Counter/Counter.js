import React from "react";
  import './CounterStyles.css';
  import { useDispatch, useSelector } from 'react-redux';
  import { increment, decrement, reset } from './counterActions';

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counterReducer);
  return (
    <div className="counter">
      <h1 className='counter__header'>Counter App</h1>
      <div className="counter__container">
      <div className='counter__wrapper'>
            <h3 className='counter__text'>FunctionalComponent</h3>
        <p className='counter__num'>{counter}</p>
        <div className='counter__buttons'>
            <button className='counter__button func-button' type='button' onClick={() => dispatch(increment())} >Increment</button>
            <button className='counter__button func-button' type='button' onClick={() => dispatch(decrement())}>Decrement</button>
            <button className='counter__button func-button' type='button' onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Counter;
