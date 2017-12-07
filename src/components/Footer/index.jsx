import React from 'react'
import './index.css'

const Footer = (props) => {
  return (
    <div className='footer'>  
      <div className='footer_leftside'>
        <div className='footer_companyinfo'>FONDSMAEGLERSELSKAB</div>
        <div className='footer_companyname'>PETERSEN & PARTNERS</div>
        <div className='footer_companytype'>INVESTMENT MANAGEMENT A/S</div>
      </div>
      <div className='footer_rightside'>
        <div style={{textAlign: 'left'}}>
          {
            props.footerLinks.map((linkname, verticalIndex) => (
              <div className='footer_link'>{linkname}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
