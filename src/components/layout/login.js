import React, { Component } from 'react';

// MUI Core
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// MUI Icon
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// Image
const styles = (theme) => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    dialogTitle: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: "-1em",
        padding: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
  });
class login extends Component {
    render() {
        const { classes, open, onClose } = this.props;
        const loginCopyrignt = (
            <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
                <Link color="inherit" href="https://martinhwangs.com">
                    martinhwangs.com
                </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            </Typography>
        );
        return(
            <div>
                <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="xs">
                    <DialogTitle id="customized-dialog-title" className={classes.dialogTitle} onClose={this.handleClose}>
                        <Avatar className={classes.avatar} alt="Martin Hwang Caricature"src="static/assets/images/martincaricature.png"/>
                            {/* <LockOutlinedIcon /> */}
                        {/* </Avatar> */}
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
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
                        <Box mt={5}>
                            {loginCopyrignt}
                        </Box>
                    </DialogContent>
                    
                    {/* <DialogActions>
                        <Button autoFocus onClick={onClose} color="primary">
                            SIGN IN
                        </Button>
                    </DialogActions> */}
                </Dialog>
            </div>
        );
    }
}
export default withStyles(styles)(login);