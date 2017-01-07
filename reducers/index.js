import { combineReducers  } from 'redux';
import { routerReducer  } from 'react-router-redux';
import postReducer from './posts';

const rootReducers = combineReducers({
    posts: postReducer,
    routing: routerReducer
});

export default rootReducers;

