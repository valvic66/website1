import React from 'react'
import './index.css'

import Button from '../Button'


const SliderDescription = ({ solutionname, solutiondescription, isImageHovered }) => {
  return (
    <div className='company_solution_sliderdescription'>
      <div className='company_solution_slidingrect' />
      
      <div className='company_solution_sliderdescription_solution'>{solutionname}</div>
      <div className='company_solution_sliderdescription_advice'>{solutiondescription}</div>
      <div className='company_solution_sliderdescription_btn'>
        <Button
          buttonname='Read more'
          isImageHovered={isImageHovered}
        />
      </div>
    </div>
  )
}

export default SliderDescription
