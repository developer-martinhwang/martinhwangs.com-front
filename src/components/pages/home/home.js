import React, { Component, Fragment } from 'react';
import '../home/home.scss'
// Axios
import axios from "axios";
// Material-UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// Layout Page
import Footer from '../../layout/footer';
// Image
import htmllog from '../../../assets/logos/html5.png';
import csslog from '../../../assets/logos/css3.png';
import javascriptlog from '../../../assets/logos/javascript.png';
import responsivelog from '../../../assets/logos/reponsive.png';
import reactlog from '../../../assets/logos/react.png';
import nodelog from '../../../assets/logos/node-js.png';
import figmalog from '../../../assets/logos/figma-logo.png';
import springlog from '../../../assets/logos/spring-framework.png';
import materialuilog from '../../../assets/logos/material-ui.png';
import javalog from '../../../assets/logos/Java-logo-icon.png';
import covid19WorldMap from '../../../assets/images/covid19WorldMap.png'
import covid19CanadaMap from '../../../assets/images/covid19CanadaMap.png'
// Icon
const developerTooltip = `Click`;
const proficientTooltip1=`Proficient with HTML CSS JavaScript responsive development techniques`
const proficientTooltip2=`Proficient with contemporary JavaScript web development frameworks React and work with modern design technology tools Figma`
const proficientTooltip3=`Experience with developing Backend with Node.js and Java Spring framework and work with SASS, Material Design, Bootstrap`
// Material-UI withStyles
const styles = (theme) => ({
    ...theme.spread,
    pTooltip0: {
        background: '#a259ff',
        fontSize: '1em'
    },
    pTooltip1: {
      background: '#e34d26',
      fontSize: '1em',
    },
    pTooltip2: {
        background: '#00d9ff',
        fontSize: '1em',
    }, 
    pTooltip3: {
        background: '#5fb92e',
        fontSize: '1em',
    }
  });
class home extends Component {
    state = {
        covid19Total:[],
        covid19Canada:[],
        openDialog: false,
        isLoading: true,
        error: null
    };
    getCovid19Total(){
        axios({
            "method":"GET",
            "url":"https://covid-19-data.p.rapidapi.com/totals",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":"c29bcf2dcdmshe96bbe0cb1b70e9p136625jsn1659930f1fe6"
            },"params":{
            "format":"json"
            }
            })
            .then((res)=>
                res.data.map(total => ({
                    confirmed: `${total.confirmed}`,
                    deaths: `${total.deaths}`,
                    recovered: `${total.recovered}`
                }))
            )
            .then(covid19Total => {
                this.setState({
                    covid19Total,
                    isLoading: false
                });
            })
            .catch((error)=> {
              this.setState({error, isLoading: false})
            });
    }
    getCovid19Canada() {
        axios({
            "method":"GET",
            "url":"https://covid-19-data.p.rapidapi.com/country",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":"c29bcf2dcdmshe96bbe0cb1b70e9p136625jsn1659930f1fe6"
            },"params":{
            "format":"json",
            "name":"canada"
            }
            })
            .then((res)=>
                res.data.map(canada => ({
                    confirmed: `${canada.confirmed}`,
                    deaths: `${canada.deaths}`,
                    recovered: `${canada.recovered}`
                }))
            )
            .then(covid19Canada => {
                this.setState({
                    covid19Canada,
                    isLoading: false
                });
            })
            .catch((error)=> {
              this.setState({error, isLoading: false})
            });
    }
    componentDidMount() {
        this.getCovid19Total();
        this.getCovid19Canada();
    }
    handleOpen = () => {
        this.setState({openDialog: true});
    }
    handleClose = () => {
        this.setState({openDialog: false});
    }
    render() {
        const { classes } = this.props;
        const { isLoading, covid19Total, covid19Canada } = this.state;
        //Current Date
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        let covid19OutbreakUpdate = (
            <Fragment>
                <h6>COVID-19 Outbreak Update: {today} </h6>
                <div>
                    {!isLoading ? (
                        covid19Total.map(total => {
                            const { confirmed, deaths, recovered } = total;
                            return (
                                <div className="covid19" key={confirmed}>
                                    <img src={covid19WorldMap} alt="covid19 update" width="90" height="55"/> 
                                    <div>
                                        <p>confirmed {confirmed}</p>
                                        <p>deaths {deaths}</p>
                                        <p>recovered {recovered}</p>                                        
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h2>Loading ...</h2>
                    )}
                </div>
                <div>
                    {!isLoading ? (
                        covid19Canada.map(canada => {
                            const { confirmed, deaths, recovered } = canada;
                            return (
                                <div className="covid19" key={confirmed}>
                                    <img src={covid19CanadaMap} alt="covid19Canada update"  width="95" height="75"/> 
                                    <div className="covid19CanadaDiv">
                                        <p>confirmed {confirmed}</p>
                                        <p>deaths {deaths}</p>
                                        <p>recovered {recovered}</p>                                        
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h2>Loading ...</h2>
                    )}
                </div>
            </Fragment>
        );
        let firstBinaryCodeDialog = (
            <Dialog 
                open={this.state.openDialog}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"First binary means Software Developer Martin Hwang"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        To decrypt mouse hover or hold down the binary for a second
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        );
        return (
            <Grid>
                <div className="home-container">
                    {covid19OutbreakUpdate}
                    <div className="card-container">
                        <div className="first-item">
                            <Box display="flex" justifyContent="center">
                                <img src={htmllog} alt="html5"/>
                                <img src={csslog} alt="css3"/>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <img src={javascriptlog} alt="javascript"/>
                            </Box>
                        </div>
                        <div className="second-item">
                            <Tooltip 
                                title={developerTooltip}
                                placement='top-end'
                                arrow={true}
                                classes={{ tooltip: classes.pTooltip0 }} 
                            >
                                <p className="mb-5" onClick={this.handleOpen}>
                                    01110011 01101111 01100110 01110100 01110111 01100001 01110010 01100101 00100000 01100100 01100101 01110110
                                    01100101 01101100 01101111 01110000 01100101 01110010 00100000 01101101 01100001 01110010 01110100 
                                    01101001 01101110 00100000 01101000 01110111 01100001 01101110 01100111
                                </p>
                            </Tooltip>
                            {firstBinaryCodeDialog}    
                            <Tooltip 
                                title={proficientTooltip1}
                                placement='top-start'
                                arrow={true}
                                classes={{ tooltip: classes.pTooltip1 }}
                            >
                                <p>
                                    01110000 01110010 01101111 01100110 01101001 01100011 01101001 01100101 01101110 01110100 00100000 01110111 
                                    01101001 01110100 01101000 00100000 01001000 01010100 01001101 01001100 00100000 01000011 01010011 
                                    01010011 00100000 01001010 01100001 01110110 01100001 01010011 01100011 01110010 01101001 01110000 
                                    01110100 00100000 01110010 01100101 01110011 01110000 01101111 01101110 01110011 01101001 01110110 01100101 
                                    00100000 01100100 01100101 01110110 01100101 01101100 01101111 01110000 01101101 01100101 01101110 
                                    01110100 00100000 01110100 01100101 01100011 01101000 01101110 01101001 01110001 01110101 01100101 
                                    01110011
                                </p>
                            </Tooltip>
                        </div>
                        <div className="third-item">
                            <img src={responsivelog} alt="responsive"/>
                        </div>
                    </div>
                    <div className="second-card-container">
                        <div className="second-first-item">
                            <Box display="flex" justifyContent="center">
                                <img src={nodelog} alt="node"/>
                            </Box>
                        </div>
                        <div className="second-second-item">
                            <Box display="flex" justifyContent="center">
                                <img src={reactlog} alt="react"/>
                            </Box>
                            <Tooltip 
                                title={proficientTooltip2}
                                placement='top-end'
                                arrow={true}
                                classes={{ tooltip: classes.pTooltip2 }}
                            >
                                <p>
                                    01110000 01110010 01101111 01100110 01101001 01100011 01101001 01100101 01101110 01110100 00100000 01110111 
                                    01101001 01110100 01101000 00100000 01100011 01101111 01101110 01110100 01100101 01101101 01110000 01101111 
                                    01110010 01100001 01110010 01111001 00100000 01001010 01100001 01110110 01100001 01010011 01100011 
                                    01110010 01101001 01110000 01110100 00100000 01110111 01100101 01100010 00100000 00100000 01100100 
                                    01100101 01110110 01100101 01101100 01101111 01110000 01101101 01100101 01101110 01110100 00100000 01100110 
                                    01110010 01100001 01101101 01100101 01110111 01101111 01110010 01101011 01110011 00100000 01010010 01100101 
                                    01100001 01100011 01110100 00100000 01100001 01101110 01100100 00100000 01110111 01101111 01110010 
                                    01101011 00100000 01110111 01101001 01110100 01101000 00100000 01101101 01101111 01100100 01100101 
                                    01110010 01101110 00100000 01100100 01100101 01110011 01101001 01100111 01101110 00100000 01110100 
                                    01100101 01100011 01101000 01101110 01101111 01101100 01101111 01100111 01111001 00100000 01110100 01101111 
                                    01101111 01101100 01110011 00100000 01000110 01101001 01100111 01101101 01100001 00001010 
                                </p>
                            </Tooltip>
                        </div>
                        <div className="second-third-item">
                            <img src={materialuilog} alt="material"/>
                        </div>
                    </div>
                    <div className="third-card-container">
                        <div className="third-first-item">
                            <Box display="flex" justifyContent="center">
                                <img src={figmalog} alt="figma"/>
                            </Box>
                        </div>
                        <div className="third-second-item">
                            <Box display="flex" justifyContent="center">
                                <img src={springlog} alt="spring framework"/>
                            </Box>
                            <Tooltip 
                                title={proficientTooltip3}
                                placement='top-start'
                                arrow={true}
                                classes={{ tooltip: classes.pTooltip3 }}
                            >
                                <p>
                                    01000101 01111000 01110000 01100101 01110010 01101001 01100101 01101110 01100011 01100101 00100000 
                                    01110111 01101001 01110100 01101000 00100000 01100100 01100101 01110110 01100101 01101100 01101111 
                                    01110000 01101001 01101110 01100111 00100000 01000010 01100001 01100011 01101011 01100101 01101110 
                                    01100100 00100000 01110111 01101001 01110100 01101000 00100000 01001110 01101111 01100100 01100101 
                                    00101110 01101010 01110011 00100000 01100001 01101110 01100100 00100000 01001010 01100001 01110110 
                                    01100001 00100000 01010011 01110000 01110010 01101001 01101110 01100111 00100000 01100110 01110010 
                                    01100001 01101101 01100101 01110111 01101111 01110010 01101011 00100000 01100001 01101110 01100100 
                                    00100000 01110111 01101111 01110010 01101011 00100000 01110111 01101001 01110100 01101000 00100000 
                                    01010011 01000001 01010011 01010011 00101100 00100000 01001101 01100001 01110100 01100101 01110010 
                                    01101001 01100001 01101100 00100000 01000100 01100101 01110011 01101001 01100111 01101110 00101100 
                                    00100000 01000010 01101111 01101111 01110100 01110011 01110100 01110010 01100001 01110000 
                                </p>
                            </Tooltip>
                        </div>
                        <div className="third-third-item">
                            <img src={javalog} alt="java"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </Grid>
        )
    }
}
export default withStyles(styles)(home);