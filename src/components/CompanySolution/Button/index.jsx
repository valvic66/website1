import React from 'react'
import './index.css'


export default class Button extends React.Component {

    getDefaultCSSClasses = () => {
        const classes = ['company_solution_btn']
        return classes
    }

    getDefaultBtnLogoCSSClasses = () => {
        const classes = ['company_solution_btn_logo']
        if (this.props.isImageHovered) {
            classes.push('isMouseEnter')
        }
        return classes.join(' ')
    } 

    render () {
        return (
            <div className={this.getDefaultCSSClasses()}>
                <div className={this.getDefaultBtnLogoCSSClasses()}>
                    <div className='icon-arrow-right'></div>
                </div>
                <div className="company_solution_btn_name">{this.props.buttonname}</div>
            </div>
        )
    }
    
}