import React from 'react';
import '../Header/Header.css';
import { Redirect } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.logout = this.logout.bind(this);
    }
    logout() {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({
                redirect: false
            })
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <header>
                <h2>React-Task</h2>
                <h5 id="logout" onClick={this.logout}>Log Out</h5>
                {this.renderRedirect()}
            </header>
        )
    }
}

export default Header;