import React, { useState } from 'react'
import './List.css'
import { Grid } from '@mui/material'
import PlaceDetail from '../PlaceDetail/PlaceDetail'

const List = ({places}) => {
  const [type,setType]= useState('')
  const [rating,setRating] = useState('')

  return (
    <div className='List-main'>
      <div className="list-places">
          <h1>NearBy...</h1>
          <div className="list-allList">
            <button className='btn' onClick={()=>setType('restaurants')}>Restaurants</button>
            <button className='btn' onClick={()=>setType('attractions')}>Attractions</button>
            <button className='btn' onClick={()=>setType('hotels')}>Hotels</button>
          </div>
          <div className="list-rating">
            <button className='btn' onClick={()=>setRating(0)}>ALL</button>
            <button className='btn' onClick={()=>setRating(3)}>Above 3 Star</button>
            <button className='btn' onClick={()=>setRating(4)}>Above 4 Star</button>
          </div>
      </div>
      <Grid container spacing={3} className='List-card'>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
              <PlaceDetail place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List