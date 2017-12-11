import React from 'react'
import './index.css'


export default class Blind extends React.Component {
    getBlindCSSClasses = () => {
        const classes = ['blind']
        if (this.props.isMenuClicked) {
            classes.push('isBlindOn')
        }
        return classes.join(' ')
    }
    render () {
        return (
            <div 
                className={this.getBlindCSSClasses()}

            >
               {/* <div className='blind_firmname'>PETERSEN & PARTNERS</div> */}
            </div>
        )
    }
}