import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import ViewPost from '../viewPost';

class FetchPost extends React.Component {

    render() {
        return (
            <div>
                 <ViewPost post={this.props.posts} />
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        posts: state.posts
    }
} 


const ViewPostContainer = connect(mapStateToProps)( FetchPost );
export default ViewPostContainer;