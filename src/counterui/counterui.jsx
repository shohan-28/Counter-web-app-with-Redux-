import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counters/counterslice';

const CounterUi = () => {
    const count = useSelector((state) => state.counters.value);
    const total = useSelector((state) => state.counters.total);
    const dispatch = useDispatch();

    const handleIncreament = () =>{
        dispatch(increment());
    };

    const handleDecreament = () =>{
        dispatch(decrement());
    };

    
    return (
        <div className=' container mx-auto space-y-5'>
            <div className='space-y-2 px-15 py-8 flex flex-col justify-center items-center shadow-md'>
                <p className='text-black text-2xl'>count:{count}</p>
                <button
                onClick={() => handleIncreament()}
                className='text-lg text-white bg-green-700 px-3 py-2 rounded-md cursor-pointer'>Click to Count</button>
            </div>

            <div className='space-y-2 px-15 py-8 flex flex-col justify-center items-center shadow-md'>
                <p className='text-black text-2xl'>count:{count}</p>
                <button
                onClick={() => handleDecreament()}
                className='text-lg text-white bg-red-700 px-3 py-2 rounded-md cursor-pointer'>Click to Count</button>
            </div>

            <div className='flex justify-center items-center px-15 py-8 bg-amber-200 rounded-md'>
                <p className='text-2xl text-red-500 font-bold'>Total count: {total}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default CounterUi;