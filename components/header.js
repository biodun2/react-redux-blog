import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Link to="/" className="btn btn-info">Home</Link>
                    <Link to="/posts" className="btn btn-info">View Post</Link>
                </div>
            </div>
        )
    }
}

export default Header;