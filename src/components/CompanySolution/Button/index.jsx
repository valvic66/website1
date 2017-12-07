import React from 'react'
import './index.css'

const Button = (props) => {
    return (
        <div className="company_solution_btn">
            <div className="company_solution_btn_logo">
                <img src="menu_arrowr.svg" />
            </div>
            <div className="company_solution_btn_name">{props.buttonname}</div>
        </div>
    )
}
export default Button