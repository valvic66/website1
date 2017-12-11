import React from 'react'
import SliderDescription from './SliderDescription'
import SliderImage from './SliderImage'
import SliderSolution from './SliderSolution'
import './index.css'

export default class CompanySolution extends React.Component {
  constructor(props) {
    super(props)
    const { data } = this.props
    this.state = {
      currentValue: data[0].id,
      sliderImage: data[0].sliderimage,
      solutionDescription: data[0].solutiondescription,
      solutionName: data[0].solutionname,
      selectedValue: null,
      isImageHovered: false
    }
    this.timer = null
  }

  componentWillMount () {
    console.log('Timer started')
    this.timer = setInterval(this.getFilteredData, 3000)
  }

  getFilteredData = () => {
    const { data } = this.props
    const { currentValue, sliderImage, SliderDescription } = this.state
    if (currentValue < data.length - 1)
    {
      this.setState ({
        currentValue: currentValue + 1,
        sliderImage: data[currentValue + 1].sliderimage,
        solutionDescription: data[currentValue + 1].solutiondescription,
        solutionName: data[currentValue + 1].solutionname
      })
    } else {
      this.setState ({
        currentValue: data[0].id,
        sliderImage: data[0].sliderimage,
        solutionDescription: data[0].solutiondescription,
        solutionName: data[0].solutionname
      })
    }
  }

  startTimer = () => {
    console.log('Timer started')
    this.timer = setInterval(this.getFilteredData, 3000)
  }
  stopTimer = () => {
    const { data } = this.props
    console.log('Timer stopped')
    clearInterval(this.timer)
    this.setState ({
      currentValue: data[this.state.currentValue].id,
      sliderImage: data[this.state.currentValue].sliderimage,
      solutionDescription: data[this.state.currentValue].solutiondescription
    })
  }

  handleImageMouseEnter = (event) => {
    const { data } = this.props

    console.log('Timer stopped')
    
    clearInterval(this.timer)

    this.setState ({
      currentValue: data[this.state.currentValue].id,
      sliderImage: data[this.state.currentValue].sliderimage,
      solutionDescription: data[this.state.currentValue].solutiondescription,
      isImageHovered: true
    })
  }

  handleImageMouseLeave = (event) => {
    console.log('Timer started')
    this.timer = setInterval(this.getFilteredData, 3000)
    this.setState ({
      isImageHovered: false
    })
  }
  
  handleSelect = (event, solution) => {
    // console.log(event.type, solution)
    this.setState ({
      sliderImage: solution.sliderimage,
      solutionDescription: solution.solutiondescription,
      solutionName: solution.solutionname
    })
  }
  render () {

    return (
      <div className="company_solution">
        <div className="company_wrapper">
            <SliderImage
              sliderimage={this.state.sliderImage}
              onMouseEnter={(event) => this.handleImageMouseEnter(event)}
              onMouseLeave={(event) => this.handleImageMouseLeave(event)}
            />
            <SliderSolution
              data={this.props.data} 
              onSelect={(event, solution) => this.handleSelect(event, solution)}
              currentsolution={this.state.solutionName}
            />
        </div>
        <SliderDescription
          solutiondescription={this.state.solutionDescription}
          solutionname={this.state.solutionName}
          isImageHovered={this.state.isImageHovered}
        />
      </div> 
    )
  }
}