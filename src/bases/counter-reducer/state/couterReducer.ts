import { CounterState } from "../interfaces/interfaces";
import * as actions from '../actions/actions';

export const counterReducer = (state: CounterState, action: actions.CounterAction ): CounterState => {

   const { counter, changes } = state;
   
   switch (action.type) {
      case 'reset':
         return {
            counter: 0,
            changes: 0,
            previous: 0
         }
   
      case 'increaseBy':
      
         return {
            ...state,
            counter: counter + action.payload.value,
            changes: changes + 1,
            previous: counter
         }
   
      default:
         return state;
   }
}
