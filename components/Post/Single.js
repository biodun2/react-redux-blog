import React from 'react';
import SingleView from './SingleView';
import { connect } from 'react-redux';

class SingleComponent extends React.Component {

    render() {
            const { postId } = this.props.params;
        return (
            <div>
                <SingleView POSTS={this.props.posts} id={postId} />
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        posts: state.posts
    }
}

const Single = connect( mapStateToProps )( SingleComponent )

export default Single;