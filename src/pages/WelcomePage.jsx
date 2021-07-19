import React, { useMemo } from 'react'
import WelcomeScreen from '../components/WelcomeScreen'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import Box from '@material-ui/core/Box'

const WelcomePage = props => {
   const iconContextProps = useMemo(() => ({ size: '120px', color: '#223574' }), [])

   return (
      <WelcomeScreen>
         <Grid container
            direction="column"
            justify="center"
            className="full">
            <div className="highlight">
               <Grid item container xs={12}
                  justify="center"
                  alignItems="center">
                  <Grid item>
                     <IconContext.Provider value={iconContextProps}>
                        <WiDaySunny />
                     </IconContext.Provider>
                  </Grid>

                  <Grid item container
                     direction="column"
                     justify="center"
                     alignItems="center">
                     <Typography className="welcome-title" variant="h4" color="inherit">
                        Weather App
                     </Typography>
                     <Box mt={5} color="white">
                        <Link to="/main"
                           component={LinkRouter}
                           color="inherit"
                           aria-label="menu"
                           className="welcome-link">
                           Acceder a la App
                        </Link>
                     </Box>
                  </Grid>
               </Grid>

            </div>
         </Grid>
      </WelcomeScreen>
   )
}

export default WelcomePage
