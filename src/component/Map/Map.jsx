import React from 'react'
import './Map.css'
import { useMediaQuery } from '@mui/material'
import GoogleMapReact from 'google-map-react'

const Map = ({setCoordinates,setBounds,coordinates}) => {
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className='map-main'>
      <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyBjv0lvRaKEvjbdJ3MKQKsGY_oXg-lSRyE'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e)=>{
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        // onChildClick={''}
        >

      </GoogleMapReact>
    </div>
  )
}

export default Map