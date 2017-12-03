import React, { Component } from 'react'

export const WorkObjectCover = (props) => {

  var objectWidth = {}
  var objectHeight = {}

  return (
    <div className="work-object-cover">
      {/* <h1>Top</h1> */}

        {props.children}

      {/* <h1>Bottom</h1> */}
    </div>
  )
}
