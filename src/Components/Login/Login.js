import React from 'react';
import '../Login/Login.css';
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paper: {
                marginTop: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #d3d3d3',
                padding: '25px 20px',
                borderRadius: '20px',
            },
            avatar: {
                margin: '8px auto',
                backgroundColor: '#f50057',
            },
            form: {
                width: '100%',
                marginTop: '8px',
            },
            submit: {
                margin: '10px 0',
            },
            cont: {
                height: '75vh',
                display: 'flex',
                alignItems: 'center',
            },
            username: '',
            password: '',
            redirect: false
        }
        this.login = this.login.bind(this);
        this._handleUserNameChange = this._handleUserNameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
    }

    _handleUserNameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    _handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    login() {
        let usrName = this.state.username;
        let pwd = this.state.password;
        if (usrName === "admin" && pwd === "admin") {
            this.setState({
                redirect: true
            })
        } else {
            this.setState({
                redirect: false
            })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Dashboard' />
        } else {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container component="main" maxWidth="sm" style={this.state.cont}>
                    <CssBaseline />
                    <div style={this.state.paper}>
                        <Avatar style={this.state.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form style={this.state.form} noValidate>
                            <TextField variant="outlined" margin="normal" value={this.state.username} onChange={this._handleUserNameChange} required fullWidth id="email" label="Username" name="username" autoFocus />
                            <TextField variant="outlined" margin="normal" value={this.state.password} onChange={this._handlePasswordChange} required fullWidth name="password" label="Password" type="password" id="password" />
                            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                            {this.renderRedirect()}
                            <Button fullWidth variant="contained" color="primary" style={this.state.submit} onClick={this.login}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs style={{textAlign: "left"}}>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
    componentDidMount() {
        let ele = document.getElementById('logout');
        ele.style = 'visibility: hidden';
    }
}

export default Login;