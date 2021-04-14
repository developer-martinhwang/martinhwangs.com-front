import React from 'react';

// React-animated-slider
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.scss';
import './slider.scss';


// Material Ui
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

// Material Ui Icon
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
// import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountBox from '@material-ui/icons/AccountBox';

// Layout
import Menubar from '../menubar';

// Page
import Login from '../login';

// Image
import bluewallpaperbg from '../../../assets/images/bluewallpaperbg.jpg';
import collaborationbg from '../../../assets/images/collaborationbg.jpg';
import mobilebg from '../../../assets/images/mobilebg.jpg';

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      marginTop: 20,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#424242'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      color: '#424242'
    },
    mailButton: {
      color: '#424242'
    }, 
    notificationButton: {
      color:'#424242'
    },
    accountBoxButton: {
      color:'#424242'
    }
  }));
  
  // Dummy data for slider 
  const content = [
    {
      title: 'martinhwangs.com ',
      description:
      `Martin Hwang is skilled with Figma, react.js, material-ui, javascript, HTML, CSS in a production environment but also proficient with node.js and java spring framework`,
      button: 'Buy now',
      image: `${bluewallpaperbg}`,
      user: '',
      userProfile: ''
    },
    {
      title: 'martinhwang.ca',
      description:
      'Martin Hwang is skilled with Figma, react.js, material-ui, javascript, HTML, CSS in a production environment but also proficient with node.js and java spring framework',
      button: 'Discover',
      image: `${collaborationbg}`,
      user: '',
      userProfile: ''
    },
    {
      title: 'Full Stack Software Developer',
      description:
      'Martin Hwang is skilled with Figma, react.js, material-ui, javascript, HTML, CSS in a production environment but also proficient with node.js and java spring framework',
      button: 'Discover',
      image: `${mobilebg}`,
      user: '',
      userProfile: ''
    }
  ];
  export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    // const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    // const handleProfileMenuOpen = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const [open, setOpen] = React.useState(false);

    const handleLoginOpen = () => {
      setOpen(true);
      handleMenuClose();
    };
    const handleLoginClose = () => {
      setOpen(false);
    };
  
    const menuId = 'primary-search-account-menu';
    // const renderMenu = (
    //   <Menu
    //     anchorEl={anchorEl}
    //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     id={menuId}
    //     keepMounted
    //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     open={isMenuOpen}
    //     onClose={handleMenuClose}>
    //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //     <MenuItem onClick={handleLoginOpen}>My account</MenuItem>
    //   </Menu>
    // );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}>
        {/* <MenuItem>
          <IconButton aria-label="show 4 new mails" className={classes.mailButton}>
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem> */}
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" className={classes.notificationButton}>
            <Badge badgeContent={11} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleLoginOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            className={classes.accountBoxButton}
          >
            <AccountBox/>
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  
    return (
      <div className={classes.grow}>
        <Slider autoplay={4000} infinite={false} className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <Grid container spacing={3}>
                <Grid item xs>
                  <Box display="flex" justifyContent="flex-start" pl={2} pt={1}>
                    <Menubar/>
                  </Box>
                </Grid>
                <Grid item xs>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </Grid>
                <Grid item xs>
                  <Box display="flex" justifyContent="flex-end"  pr={2} pt={2}>
                    <div className={classes.sectionDesktop}>
                      {/* <IconButton aria-label="show 4 new mails" className={classes.mailButton} >
                        <Badge badgeContent={4} color="primary">
                          <MailIcon />
                        </Badge>
                      </IconButton> */}
                      <IconButton aria-label="show 17 new notifications" className={classes.notificationButton}>
                        <Badge badgeContent={17} color="primary">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleLoginOpen}
                        className={classes.accountBoxButton}>
                        <AccountBox/>
                      </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                      <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit">
                        <MoreIcon />
                      </IconButton>
                    </div>
                  </Box>
                </Grid>
                 {renderMobileMenu}
                 {/* {renderMenu} */}
              </Grid>
            
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
        <Login open={open} onClose={handleLoginClose}/>
      </div>
    );
  }
  