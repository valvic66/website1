import React from 'react'
import './index.css'

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
        >
            {this.props.sidebaritem}
        </div>
      )
    }
  }

class Sidebar extends React.Component {
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
                    <div className='company_sidebar_logo_title'>Close</div>
                    <div className='icon-close' />
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

export default Sidebar