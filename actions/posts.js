import { ADD_POST } from '../constants';

export function addPost(postId, title, post) {
    return {
        type: ADD_POST,
        payload: {
            postId,
            title,
            post
        }
    }
}

