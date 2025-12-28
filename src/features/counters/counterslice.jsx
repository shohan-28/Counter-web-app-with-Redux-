import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { total: 0 , cardOne: 0, cardTwo: 0 },
  reducers: {
    increment: (state) => { state.cardOne += 1;
        state.total += 1;
     },
    decrement: (state) => { state.cardOne -= 1; state.total -= 1;},

    increment2: (state) => { state.cardTwo += 1;
        state.total += 1;
     },
    decrement2: (state) => { state.cardTwo -= 1; state.total -= 1;},

    incrementByAmount: (state, action) => { state.value += action.payload;  state.total += action.payload;
    },
    
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, decrement2, increment2 } = counterSlice.actions;
export default counterSlice.reducer;
