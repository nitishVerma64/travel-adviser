import { useState , useEffect } from 'react'
import {getPlacesData} from './Api'
import Map from './component/Map/Map'
import List from './component/List/List'
import Header from './component/Header/Header'
import { CssBaseline, Grid } from '@mui/material'

function App() {

  const [places ,setPlaces] = useState([]);
  const [coordinates,setCoordinates] =useState({});
  const [bounds,setBounds]=useState({});
  useEffect(()=>{
    getPlacesData(bounds.ne, bounds.sw)
      .then((data)=>{
          setPlaces(data);
          console.log(data);
      })
  },[coordinates,bounds]);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude})
    })
  },[]);

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={2} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>       
    </>
  )
}

export default App
