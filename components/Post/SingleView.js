import React from 'react';

class SingleView extends React.Component {
    
    render() {
        const i = this.props.POSTS.findIndex( (post) => String(post.postId) === this.props.id);
        const post = this.props.POSTS[i];
                        
        return (
            <div>
                <h1>{post.title}</h1>
                <p>{post.post}</p>
            </div>
        )
    }
}

export default SingleView;