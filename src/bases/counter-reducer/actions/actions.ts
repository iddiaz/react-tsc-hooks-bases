

export type CounterAction = 
| { type: 'increaseBy', payload: { value: number } }
| { type: 'reset'  };

//actionCreators implements
export const doReset = ():CounterAction =>({
      type: 'reset'
});

export const doIncreaseBy = ( value: number ):CounterAction =>({
      type: 'increaseBy',
      payload: {value}
});


