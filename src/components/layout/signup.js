import React, { Component } from 'react';

//MUI Core
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({

});
class signup extends Component {
    render(){
        const { classes, open, onClose } = this.props;
        const signupCopyrignt = (
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
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
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
                </Dialog>
            </div>
        );
    }
}

export default withStyles(theme)(signup);