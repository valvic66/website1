import React from 'react'
import './index.css'
import onClickOutside from "react-onclickoutside";

class SidebarItem extends React.Component {
    getCSSClasses = () => {
      const classes = ['company_sidebar_item']
      if(this.props.currentsolution) {
        classes.push('islogo')
      }
      return classes.join(' ')
    }
  
    render() {
      return (
        <div
          className={this.getCSSClasses()}
        //   onMouseEnter={(event) => this.handleMouseEnter(event)}
        >
            {this.props.sidebaritem}
        </div>
      )
    }
  }

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    getCompanySidemenuCSS = () => {
        const classes = ['company_sidebar']
        if (this.props.isMenuClicked) {
        classes.push ('isSidemenuVisible isSidemenuSlideIn')
        } else {
        classes.push ('isSidemenuSlideOut')
        }
        return classes.join(' ')
    }

    handleClick = (event) => {
        this.props.onClick(event)
    }

    render () {
        return (
            <div className={this.getCompanySidemenuCSS()}>
                <div 
                    className="company_sidebar_logo"
                    onClick={(event) => this.handleClick(event)}
                >
                    <div>Close</div>
                    <img src='menu_close.svg' width='16' height='16' />   
                </div>
                {this.props.sidebaritems.map((menuitem, key) => (
                    <SidebarItem
                        key={key}
                        sidebaritem={menuitem}
                    />
                ))}
            </div>
        )
    }
}

export default onClickOutside(Sidebar)