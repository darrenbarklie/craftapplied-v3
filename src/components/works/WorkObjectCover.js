import React, { Component } from 'react'

export const WorkObjectCover = (props) => {
  let coverLeftStyles = {
    //position: 'absolute',
    borderStyle: 'solid',
    borderColor: 'transparent transparent transparent #00cc66',
    borderWidth: `${props.height}px 0 0 ${props.width}px`,
    //left: 0
  }
  let coverRightStyles = {
    //position: 'absolute',
    borderStyle: 'solid',
    borderColor: 'transparent #ffcc99 transparent transparent',
    borderWidth: `0 ${props.width}px ${props.height}px 0`,
    //right: 0
  }



  return (
    <div className="work-object-cover">
      {/* <h6>Width: {props.width} | Height: {props.height}</h6> */}

        <div className="triangle-left"
          style={coverLeftStyles}></div>
        <div className="triangle-right"
          style={coverRightStyles}></div>

        {props.children}

    </div>
  )
}
