import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AspectRatio from 'react-aspect-ratio'

import { ProjectObjectCover } from './ProjectObjectCover'

class ProjectObject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      height: 0,
    }

    this.setDimensions = this.setDimensions.bind(this)
  }

  // Set width & height from element self-reference to component state
  setDimensions() {
    let width = this.divElement.clientWidth
    this.setState({ width })
    let height = this.divElement.clientHeight
    this.setState({ height })
  }

  componentDidMount() {
    this.setDimensions()
    window.addEventListener("resize", this.setDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setDimensions);
  }

  render() {
    // Concat declared globalStyles and props.styles to single object
    let globalStyles = {
      backgroundColor: '#e2e5e8',
      backgroundSize: 'cover'
    };
    let objectStyles = Object.assign({},
      this.props.style,
      globalStyles
    )

    return (
      <div className="project-object"
        ref={(divElement) => this.divElement = divElement}>

        <Link to={this.props.linkTo}>

          <AspectRatio
            ratio={this.props.ratio}
            style={objectStyles}>

            <ProjectObjectCover
              width={this.state.width}
              height={this.state.height}>

              <div className="label">
                <h3>{this.props.title}</h3>
                <span>{this.props.type}</span>
              </div>

            </ProjectObjectCover>

          </AspectRatio>

        </Link>
      </div>
    )
  }
}
export default ProjectObject
