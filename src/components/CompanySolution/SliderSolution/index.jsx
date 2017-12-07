import React from 'react'
import './index.css'

class SliderSolutionItem extends React.Component {
  getCSSClasses = () => {
    const classes = ['company_solution_slidersolutions_item_logo']
    if(this.props.currentsolution) {
      classes.push('islogo')
    }
    return classes.join(' ')
  }
  
  handleMouseEnter = (event) => {
    console.log('Mouse entered')
    this.props.onMouseEnter(event)
  }

  render() {
    return (
      <div
        className='company_solution_slidersolutions_item'
        onMouseEnter={(event) => this.handleMouseEnter(event)}
      >
        {/* company_solution_slidersolutions_item_logo */}
        <div className={this.getCSSClasses()}>
          <img src='menu_arrowr.svg' />
        </div>
        <div className="company_solution_slidersolutions_item_text">{this.props.solutionname}</div>
      </div>
    )
  }
}

export default class SliderSolution extends React.Component {
  getCSSClass = this.props.classes || ''
  handleSelect = (event, solution) => {
    this.props.onSelect(event, solution)
  }
  render() {
    let style = {
      textAlign: 'left',
    }
    // console.log(this.props.currentsolution)
    return (
      <div id='div2' className="company_solution_slidersolutions">
        <div style={style}>
          <div className="company_solution_slidersolutions_title">Solutions</div>
            {this.props.data.map((solution, key) => (
              <SliderSolutionItem
                key={key}
                solutionname={solution.solutionname}
                onMouseEnter={(event) => this.handleSelect(event, solution)}
                currentsolution={this.props.currentsolution && this.props.currentsolution === solution.solutionname}
              />  
            ))}
          </div>  
    </div>
    )
  }
}