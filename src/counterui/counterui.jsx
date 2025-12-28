import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, decrement2, increment2 } from '../features/counters/counterslice';

const CounterUi = () => {
    const CardOneCount = useSelector((state) => state.counters.cardOne);
    const CardTwoCount = useSelector((state) => state.counters.cardTwo);
    const total = useSelector((state) => state.counters.total);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

     const handleIncrement2 = () => {
        dispatch(increment2());
    };

    const handleDecrement2 = () => {
        dispatch(decrement2());
    };


    return (
        <div className=' container mx-auto space-y-5'>

            {/* CARD ONE */}

            <div className='space-y-2 px-15 py-8 flex flex-col justify-center items-center shadow-md'>
                <p className='text-black text-2xl'>count:{CardOneCount}</p>
                <div className='flex justify-between gap-6'>
                    <button
                        onClick={() => handleIncrement()}
                        className='text-lg text-white bg-green-700 px-3 py-2 rounded-md cursor-pointer'>Click to Increase</button>
                    <button
                        onClick={() => handleDecrement()}
                        className='text-lg text-white bg-red-700 px-3 py-2 rounded-md cursor-pointer'>Click to Decrease</button>
                </div>
            </div>

            {/* CARD TWO */}
            
            <div className='space-y-2 px-15 py-8 flex flex-col justify-center items-center shadow-md'>
                <p className='text-black text-2xl'>count:{CardTwoCount}</p>
                <div className='flex justify-between gap-6'>
                    <button
                        onClick={() => handleIncrement2()}
                        className='text-lg text-white bg-green-700 px-3 py-2 rounded-md cursor-pointer'>Click to Increase</button>
                    <button
                        onClick={() => handleDecrement2()}
                        className='text-lg text-white bg-red-700 px-3 py-2 rounded-md cursor-pointer'>Click to Decrease</button>
                </div>
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