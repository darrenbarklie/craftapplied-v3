import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AspectRatio from 'react-aspect-ratio'

import { WorkObjectCover } from './WorkObjectCover'

class WorkObject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0
    }
  }

  componentDidMount() {
    console.log('Mounted here --------------------')
    const height = this.divElement.clientHeight;
    this.setState({ height })
  }

  render() {
    return (
      <div
        className="work-object"
        style={{border: '1px solid red'}}
        ref={ (divElement) => this.divElement = divElement}
        >
        Height: {this.state.height}px
      </div>
    )
  }
}

export default WorkObject



























// export const WorkObject = (props) => {
//
//
//   var elementHeight = 22
//
//
//   var globalStyles = {
//     backgroundColor: '#e2e5e8',
//     backgroundSize: 'cover'
//   };
//
//   var objectStyles = Object.assign({},
//     props.style,
//     globalStyles
//   )
//
//   return (
//     <div className="work-object">
//
//       <Link to={props.linkTo}>
//
//         <AspectRatio
//           ratio={props.ratio}
//           style={objectStyles}>
//
//           <WorkObjectCover>
//
//             <div className="label">
//               <h3>{props.title}</h3>
//               <span>{props.type}</span>
//
//               <h3>{elementHeight}</h3>
//
//             </div>
//
//           </WorkObjectCover>
//         </AspectRatio>
//       </Link>
//     </div>
//   )

// ------------------------------------- //

  // return (
  //   <div className="work-object">
  //
  //     <Link to={props.linkTo}>
  //
  //       <AspectRatio
  //         ratio={props.ratio}
  //         style={objectStyles}>
  //
  //         <div className="label">
  //           <h3>{props.title}</h3>
  //           <span>{props.type}</span>
  //         </div>
  //
  //       </AspectRatio>
  //
  //     </Link>
  //   </div>
  // )
//}
