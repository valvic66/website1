import React from 'react'
import './index.css'
import Button from '../Button'

const SliderDescription = (props) => {
  return (
    <div className='company_solution_sliderdescription'>
      <div className='company_solution_slidingrect' />

      <div className='company_solution_sliderdescription_solution'>{props.solutionname}</div>
      <div className='company_solution_sliderdescription_advice'>{props.solutiondescription}</div>
      <div className='company_solution_sliderdescription_btn'>
        <Button
          buttonname='Read more'
        />
      </div>
    </div>
  )
}
export default SliderDescription
