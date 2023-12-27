import React from 'react'
import './PlaceDetail.css'
import { Card, CardHeader, CardMedia, Chip } from '@mui/material'
import { LocationOnOutlined } from '@mui/icons-material'

const PlaceDetail = ({place}) => {
  return (
    <Card elevation={6}>
    <CardMedia 
      style={{height:250}}
      image={place?.photo?.images.large.url}
    />
      <div className="card-heading">
        <div className="card-name-dist">
          <h4>{place.name}</h4>
          <div className="dist">
            <LocationOnOutlined fontSize='18px'/>
            <h5>{place?.distance_string}</h5>
          </div>
        </div>
        <p>{place?.address}</p>
      </div>
      <div className="card-content">
        <div className="card-content-item">
          <h5>Rating:</h5>
          <h5 style={{textAlign:"center"}}>{place.rating? place.rating:"UnRanked"}⭐<h6>{place.num_reviews? place.num_reviews: '0'} reviews</h6></h5>
        </div>
        <div className="card-content-item">
          <h6>Ranking:</h6>
          <h6>{place.ranking ? place.ranking : "unranked"}</h6>
        </div>
        <div className="card-content-item">
          <h6>Email:</h6>
          <h6>{place.email ? place.email : "Not available  " }</h6>
        </div>
        <div className="card-content-cuisine">
          {place?.cuisine?.map(({name})=>{
              <div className="cuisine-name">
                <h5>{name}</h5>
              </div>
          })}
        </div>
        
      </div>

    </Card>
  )
}

export default PlaceDetail