import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {signup} from "../services/auth.service";
import * as Constants from '../Constants';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { Spinner } from '@fluentui/react/lib/Spinner';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.changeFName = this.changeFName.bind(this);
    this.changeLName = this.changeLName.bind(this);
    this.closeDialog = this.closeDialog.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      isError:false,
      message: "",
      fname:"",
      lname:"",
      loader:false,
    };
  }

  changeFName(e){
    this.setState({
      fname: e.target.value
    });
  }

  changeLName(e){
    this.setState({
      lname: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
      username:e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();
    this.setState({
      loader:true
    })
      let name = this.state.fname + " "+ this.state.lname;
      let email = this.state.email;
      let password = this.state.password;
      signup({ name, email, password })
    .then(data => {
      if (data.error || data.err) {
        this.setState({
          message: data.error?data.error:data.err,
          successful: false,
          loader:false,
          isError:true
        });
      } else {
        this.setState({
          message: "Registered successfully",
          successful: true,
          loader:false
        });  
      }
    })
    .catch(
console.log("error in sign up")
      );  
    }
  
    closeDialog(){
      if(this.state.successful){
        this.props.changePage(Constants.ScreenName.Login);
      }
      this.setState({
        successful:false,
        loader:false,
        isError:false
      });
      
    }

  getStyles(){
    const classes = useStyles();
    return classes;
  }

  render(){
  
    const classes = this.getStyles; return (
      <form className={classes.form} noValidate>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className="mb-3">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={this.changeFName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={this.changeLName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.onChangePassword}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleRegister}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={()=>this.props.changePage(Constants.ScreenName.Login)}>
                Already have an account? Sign in 
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Dialog
        hidden={!this.state.successful && !this.state.loader && !this.state.isError}
       isBlocking
      // onDismiss={this.closeDialog}
      >
         {this.state.loader?<Spinner label="Working on it"></Spinner>:""}
          {this.state.successful || this.state.isError?this.state.message:"" }
        <DialogFooter>
         
        {this.state.successful || this.state.isError?<PrimaryButton onClick={this.closeDialog} text="Ok" />:""}
        </DialogFooter>
      </Dialog>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </form>
  );
 }
}
 