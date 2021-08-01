import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0;

export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase());
    }, 1500)
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease());
    }, 1500)
}

const counter = handleActions({
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1

},
    initialState
);

export default counter;