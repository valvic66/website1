import React from 'react'
import './index.css'

export default class SliderImage extends React.Component {
  handleMouseEnter = (event) => {
    this.props.onMouseEnter(event)
  }
  handleMouseLeave = (event) => {
    this.props.onMouseLeave(event)
  }


  render () {

    return (
      <div
        id='div1'
        className='company_solution_image'
      >
        <img
          src={this.props.sliderimage}
          onMouseEnter={(event) => this.handleMouseEnter(event)}
          onMouseLeave={(event) => this.handleMouseLeave(event)}
        />
      </div>
    )
  }
}