import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CompanySolution from './components/CompanySolution'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CompanyInfo from './components/CompanyInfo'
import Blind from './components/Blind'
import Footer from './components/Footer'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isMenuClicked: false
    }
  }

  handleMenuClick = (event) => {
    this.setState ({
      isMenuClicked: !this.state.isMenuClicked
    })
  }

  handleSidebarClose = (event) => {
    this.setState ({
      isMenuClicked: !this.state.isMenuClicked
    })
  }

  render() {
    console.log('Is menu clicked: ', this.state.isMenuClicked)
    let companySolution = [
      {id: 0, sliderimage: 'http://ppim.dk/sites/default/files/styles/columns_6_square/public/img_4054_0.jpg?itok=oGttWd0P', solutionname: 'Chief Investment Officer', solutiondescription: 'Gain a significant strategic advantage.'},
      {id: 1, sliderimage: 'http://ppim.dk/sites/default/files/styles/columns_6_square/public/img_4196.jpg?itok=VnsBQlPp', solutionname: 'Single Strategy Solutions', solutiondescription: 'Get a smarter single strategy solution.'},
      {id: 2, sliderimage: 'http://ppim.dk/sites/default/files/styles/columns_6_square/public/img_4106_0.jpg?itok=xhmA9Uyb', solutionname: 'Advisory Consulting', solutiondescription: 'Advance of institutional quality.'}
    ]
    let sidebaritems = ['About us', 'Our unique advantages', 'Our solutions', 'Our team', 'Company information', 'Contact']
    let companyInfo = {
      companyInfoAd1: 'Welcome to',
      companyInfoAd2: 'Petersen & Partners Investment Management',
      companyInfoAd3: 'We are an independent investment management firm. We offer institutional-quality Outsourced Chief Investment Officer (OCIO) services to pension funds, foundations, corporations, family offices and high net worth individuals. ',
    }
    let footerLinks = ['Contact', 'Team', 'Our solutions', 'LinkedIn']

    return (
      <div className="page_index">
        <Header
          isMenuClicked={this.state.isMenuClicked}
          name='PETERSEN & PARTNERS'
          onClick={(event) => this.handleMenuClick(event)}
        />
        
        <CompanyInfo
          companyInfo={companyInfo}
        />  

        <CompanySolution data={companySolution} />
        
        <Sidebar 
          isMenuClicked={this.state.isMenuClicked}
          sidebaritems={sidebaritems}
          onClick={(event) => this.handleSidebarClose(event)}
        />  

        <Blind 
          isMenuClicked={this.state.isMenuClicked}
        />

        <Footer
          footerLinks={footerLinks}
        />

      
        
      </div>
    );
  }
}

export default App