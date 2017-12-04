import React, { Component } from 'react'

export const WorkObjectCover = (props) => {
  let coverLeftStyle = {
    borderWidth: `${props.height}px 0 0 ${props.width}px`,
  }
  let coverRightStyle = {
    borderWidth: `0 ${props.width}px ${props.height}px 0`,
  }

  return (
    <div className="work-object-cover">

      <div className="triangle-left"
        style={coverLeftStyle}></div>

      <div className="triangle-right"
        style={coverRightStyle}></div>

      <div className="full-size"></div>

      {props.children}

    </div>
  )
}
