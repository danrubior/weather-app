import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'
import Box from '@material-ui/core/Box'

const NotFoundPage = () => {
  return (
   <Grid container
   direction="column"
   justify="center"
   className="full">
   <div>
      <Grid item container xs={12}
         justify="center"
         alignItems="center">
         <Grid item>
            <IconContext.Provider value={{ size: '120px' , color: '#223574'}}>
               <WiRain/>
            </IconContext.Provider>
         </Grid>

         <Grid item container
            direction="column"
            justify="center"
            alignItems="center">
            <Typography className="welcome-title" variant="h4" color="inherit">
               404 | Página no encontrada
            </Typography>
            <Box mt={5} color="white">
               <Link to="/main"
                  component={LinkRouter}
                  color="inherit"
                  aria-label="menu"
                  className="welcome-link">
                  Volver al inicio
               </Link>
            </Box>
         </Grid>
      </Grid>

   </div>
</Grid>
  )
}

export default NotFoundPage
