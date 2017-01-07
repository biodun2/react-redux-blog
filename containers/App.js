import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../components/header';

class App extends React.Component {
    
    render() {
        return (
            <div className="container">
                <Header />
                <div className="jumbotron">
                    <h1><Link to="/" style={{textDecoration: 'none'}}> React Redux Blog</Link></h1>
                    <p>This blog is created with <br /></p>
                    <ul>
                        <li> <strong>React</strong>: For creating components </li>
                        <li> <strong>Redux</strong>: For managing application state</li>
                        <li> <strong>react-router</strong>: To manage routing</li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default App;
