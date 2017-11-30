import React from 'react'
import AspectRatio from 'react-aspect-ratio';




export const WorkObject = (props) => {

  var globalStyles = {
    backgroundColor: 'grey',
    backgroundSize: 'cover'
  };

  var objectStyles = Object.assign({},
    props.color,
    globalStyles
  )

  return (
    <div className="work-object">

      <AspectRatio
        ratio={props.ratio}
        style={objectStyles}
      >
        <h3>{props.title}</h3>
      </AspectRatio>

    </div>
  )
}
