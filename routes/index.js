import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import PostContainer from '../containers/Posts/createPost';
import ViewPostContainer from '../containers/Posts/fetchPost';
import App from '../containers/App';
import Single from '../components/Post/Single'

import { Provider } from 'react-redux';
import store from '../stores';

const router = (
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={PostContainer} />
        <Route path="/posts" component={ViewPostContainer} />
        <Route path="/posts/:postId" component={Single} />
        </Route>
    </Router>
    </Provider>
);

export default router;