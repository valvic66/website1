import React from 'react'
import './index.css'

export default class Header extends React.Component {
    getCompanyMenuCSS = () => {
        const classes = ['company_menu']
        return classes
      }
    
    getMenuLogoCSS = () => {
        const classes = ['company_menu_logo isDefault']
        // if (this.props.isMenuClicked) {
        //   classes.push ('isChanged')
        // } else {
        //   classes.push ('isDefault')
        // }
        return classes.join(' ')
    }

    handleCompanyMenuClick = (event) => {
        this.props.onClick(event)
      }

    render () {
        return (
            // company_header
            <div className="company_header">
                <div className="company_name">{this.props.name}</div>
                <div
                    className={this.getCompanyMenuCSS()}
                    onClick={(event) => this.handleCompanyMenuClick(event)}
                >
                    <div className="company_menu_name">Menu</div>
                    {/* class company_menu_logo */}
                    <div className={this.getMenuLogoCSS()}></div>
                </div>
            </div>
        )
    }
}