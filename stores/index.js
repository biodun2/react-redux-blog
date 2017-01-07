import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers';

const logger = (store) => (next) => (action) => {
    console.log('prev store', store.getState());    
    console.log('dispatching', action);
    return next(action);
}

const store = createStore(rootReducers, applyMiddleware(logger));
export default store;