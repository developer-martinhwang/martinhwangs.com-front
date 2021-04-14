import React, { Component } from 'react';
// Material-UI
import withStyles from "@material-ui/core/styles/withStyles";

// Images
import caricature404 from "../../assets/images/caricature404.png"

const styles = (theme) => ({
    ...theme.spread,
    nomatchContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4em',
        '& div:nth-child(2)':{
            marginLeft: '2em',
        },
        '& img': {
            paddingTop: '3.5em',
            width: '22em',
        }
    },
    nomatchContainertext: {
        marginTop: '5em',
        '& div:nth-child(1)':{
            display: 'flex',
        },
        '& h2:nth-child(1)': {
            color: '#00d9ff',
        },
        '& h2:nth-child(2)': {
            color: '#5fb92e',
        },
        '& h5': {
            marginTop: '1em'
        },
        '& p': {
            marginTop: '1em',
            fontSize: '1.4em'
        }
    },
    '@media (max-width: 640px)':{
        nomatchContainer: {
            flexDirection: 'column-reverse',
            '& img':{
                width: '17em',
            }
        },
        nomatchContainertext: {
            marginTop: '0.1em'
        }
    }
});
export default withStyles(styles)(class nomatchpage extends Component {
    render() {
       const { classes } = this.props;
       const path = this.props.location.pathname
        return (
            <div className={classes.nomatchContainer}>
                <div className={classes.nomatchContainertext}>
                    <div><h2>martin</h2><h2>hwangs.com</h2></div>
                    <h5><strong>404.</strong> That's an error.</h5>
                    <p>The requested URL{path} was not found on this server</p>
                </div>
                <div>
                    <img src={caricature404} alt="caricature 404" width="300"/>
                </div>
            </div>
        )
    }

});

