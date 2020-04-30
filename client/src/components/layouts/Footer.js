import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import innerArtIcon from '../../assets/images/icons/inner-icon-purple.png'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import { Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
      width: '100%',
      height: '250px',
      background: '#5B1C50',
      color: 'white',
      margin: 'auto',
      padding: '0px',
      bottom: '0px',     
    },
    children:  {
      width: '25%',
      float: 'left',
      textAlign: 'center',
      padding: '70px 0', 
  
    },
    childrenRight:  {
      fontSize: '24px',
      width: '25%',
      float: 'left',
      textAlign: 'center',
      padding: '70px 0', 
  
    },    
    childrenLeft:  {
      width: '25%',
      float: 'left',
      textAlign: 'center',
      padding: '150px 0',
    },
    icon: {
      fontSize: '40px',
    },
       
  }))



const Footer = () => {
    const classes = useStyles()    

    const Logo = () => {
      return <img src={innerArtIcon} alt='Logo' />;
    }   

    const handleClick = event => {
      console.info('Redirect to Link');
    }    
    
    return (
        <div className={classes.container}>
            <div className={classes.childrenRight}>
              Inner Art <br />
              Inner Soul <br />
              <Logo />
            </div>
              <div className={classes.children}>
                <Link
                  color="inherit"
                  component="button"
                  onClick={handleClick}
                >
                  Terms & conditions
                </Link>              
                <br />
                <Link
                  color="inherit"
                  component="button"
                  onClick={handleClick}
                >
                  Frequent questions
                </Link>               
            </div>
            <div className={classes.children}>
              <Link
                  color="inherit"
                  component="button"
                  onClick={handleClick}
                >
                  About
                </Link> 
                <br />
                <Link
                  color="inherit"
                  component="button"
                  onClick={handleClick}
                >
                  Register
                </Link> 
                / 
                <Link
                  color="inherit"
                  component="button"
                  onClick={handleClick}
                >
                  Login
                </Link> 
                <br /> 
                <Link
                  color="inherit"
                  component="button"
                  onClick={handleClick}
                >
                  Create art work
                </Link>
                <br />                                                           
                <Link
                  color="inherit"
                  component="button"
                  onClick={handleClick}
                >
                  Stock
                </Link>               
            </div>
            <div className={classes.childrenLeft}>
            <Link
                color="inherit"
                component="button"
                onClick={handleClick}
              >
                <FacebookIcon  className={classes.icon}/>
              </Link>  
              <Link
                color="inherit"
                component="button"
                onClick={handleClick}
              >
                <InstagramIcon className={classes.icon}/>
              </Link>  
              <Link
                color="inherit"
                component="button"
                onClick={handleClick}
              >
                <YouTubeIcon className={classes.icon}/>
              </Link>                                            
            </div>            
        </div>
    )    
}

export default Footer