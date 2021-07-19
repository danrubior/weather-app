import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { IconContext } from 'react-icons'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { WiDaySunny } from 'react-icons/wi'


const AppFrame = ({ children }) => {
   //Evitamos nuevas instancias
   const iconContextSize = useMemo(() => ({size: '80px'}), [])

   return (
      <Grid container
         justify="center">
         <AppBar id="app-header" position="static">
            <Toolbar variant="dense">
               <IconButton color="inherit" aria-label="menu">
                  <Link
                     component={LinkRouter}
                     to="/main"
                     color="inherit"
                     aria-label="menu">
                     <IconContext.Provider value={iconContextSize}>
                        <WiDaySunny />
                     </IconContext.Provider>
                  </Link>
               </IconButton>

               <Typography variant="h6" color="inherit">
                  Weather App
               </Typography>
            </Toolbar>
         </AppBar>

         <Grid item
            xs={12}
            sm={11}
            md={10}
            lg={8}>
            {children}
         </Grid>
      </Grid>
   )
}

AppFrame.propTypes = {
   children: PropTypes.node,
}

export default AppFrame
