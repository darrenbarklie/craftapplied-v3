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

      {props.children}

      <div className="cover-triangle-left"
        style={coverLeftStyle}></div>

      <div className="cover-triangle-right"
        style={coverRightStyle}></div>

      <div className="cover-fullsize"></div>

      <div className="cover-cta">
        <span>Visit Project Page</span>
      </div>

    </div>
  )
}
