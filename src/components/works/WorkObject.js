import React from 'react'
import { Link } from 'react-router-dom'
import AspectRatio from 'react-aspect-ratio';




export const WorkObject = (props) => {

  var globalStyles = {
    backgroundColor: '#e2e5e8',
    backgroundSize: 'cover'
  };

  var objectStyles = Object.assign({},
    props.style,
    globalStyles
  )

  return (
    <div className="work-object">

      <Link to={props.linkTo}>

        <AspectRatio
          ratio={props.ratio}
          style={objectStyles}>

          <h3>{props.title}</h3>
          <span>{props.type}</span>

        </AspectRatio>

      </Link>


    </div>
  )
}
