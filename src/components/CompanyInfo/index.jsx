import React, {Component} from 'react'
import './index.css'
import Button from '../CompanySolution/Button'

export default class CompanyInfo extends Component {
  render () {
    return (
      <div className='company_info'>
        <div className='company_info_ad1'>{this.props.companyInfo.companyInfoAd1}</div>
        <div className='company_info_ad2'>{this.props.companyInfo.companyInfoAd2}</div>
        <div className='company_info_ad3'>{this.props.companyInfo.companyInfoAd3}</div>
        <div className='company_info_ad4'>
          <Button
            buttonname='Read more'
          />
        </div>
      </div>
    )
  }
}
