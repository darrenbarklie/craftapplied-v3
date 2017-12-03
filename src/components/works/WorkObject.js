import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AspectRatio from 'react-aspect-ratio'

import { WorkObjectCover } from './WorkObjectCover'

class WorkObject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      height: 0,
    }
  }

  componentDidMount() {
    const width = this.divElement.clientWidth
    this.setState({ width })

    const height = this.divElement.clientHeight
    this.setState({ height })
  }

  render() {

    let globalStyles = {
      backgroundColor: '#e2e5e8',
      backgroundSize: 'cover'
    };

    let objectStyles = Object.assign({},
      this.props.style,
      globalStyles
    )

    return (
      <div className="work-object"
        ref={ (divElement) => this.divElement = divElement}>

          <Link to={this.props.linkTo}>

            <AspectRatio
              ratio={this.props.ratio}
              style={objectStyles}>

              <div className="label">
                <h3>{this.props.title}</h3>
                <span>{this.props.type}</span>


                <h3>Width: {this.state.width}</h3>
                <h3>Height: {this.state.height}</h3>

              </div>

            </AspectRatio>

          </Link>
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
