import React from 'react'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Map from './Components/Map/Map'
import { CssBaseline, Grid } from '@material-ui/core'

const App = () => {
  return (
    <>
    <CssBaseline>
      <Header></Header>
      <Grid container spacing={3} sx={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map/>
        </Grid>
      </Grid>  
      
    
    </CssBaseline>

    </>
  )
}

export default App
