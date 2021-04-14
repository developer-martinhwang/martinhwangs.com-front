import React, { Component } from 'react';

// Material-UI
import Grid from '@material-ui/core/Grid';
import withStyles from "@material-ui/core/styles/withStyles";

// Material-UI withStyles
const styles = (theme) => ({
    ...theme.spread,
    container: {
        minHeight: '100vh'
    },
    container_p: {
        fontWeight:'bolder'
    },
    container_h: {
        border: 'none',
        borderTop: '1.2px solid #333',
        marginTop: '-0.5px'
    },
    "@media(max-width: 640px)":{
        container: {
            // background: 'blue'
        }
    }
})
class about extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid>
                <div className={classes.container}>
                    <h3 className={classes.container_p}>Developer Venue</h3>
                    <hr className={classes.container_h}/>
                </div>
            </Grid>
        )
    }
}

export default withStyles(styles)(about);