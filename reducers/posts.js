import { ADD_POST, INCREMENT_LIKES } from '../constants';
import { createReducer } from '../utils';

const initialState = {
    likes: 0
}

function Post(state = {}, action) {
    return {
            ...state,
            postId: action.postId,
            title: action.title,
            post: action.post    
            }

    }

export default createReducer({}, {
    [INCREMENT_LIKES]: (state, payload) => {
        let i = action.index;
            return {
                ...state.slice(0, i),
                ...state[i], likes: state[i].likes + 1,
                ...state.slice(i + 1)
            } 
    },

    [ADD_POST]: (state = [], payload) => {
        return [
            ...state, 
            Post(state, payload)
        ]
    }

});