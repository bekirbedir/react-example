import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component{

    constructor(){
        super();
        this.state = {
            isNavOpen : false   
        }
    }
    buttonClicked(){
        console.log("button clicked worked.")
        this.setState({
           isNavOpen :  !this.state.isNavOpen
        })
    }

    render(){
        console.log("RENDER RE-WORK");
     return(
    <div className = "header-css">
    <nav className = "container navbar navbar-expand-lg navbar-light justify-content-between">
   <a className="navbar-brand" href= "#"> Eğitim Budur</a>
   <button className="navbar-toggler" type="button"  onClick = {this.buttonClicked.bind(this)} >
    <span className="navbar-toggler-icon"></span>
  </button>
 <div className = "navbar-collapse" style = { { display: this.state.isNavOpen ? "block" : "none" } }>
 
  <ul className="navbar-nav ml-auto ">
      <li className="nav-item active">
        <Link to="/" href="" activeClassName = "active" className = "nav-link" >Anasayfa</Link>
      </li>

      <li className="nav-item active">
            <Link to="/iletisim" activeClassName = "active" href="" className = "nav-link" >İletişim</Link>
      </li>

      <li className="nav-item active">
                <Link to="/hakkimizda" activeClassName = "active" href="" className = "nav-link" >Hakkımızda </Link>
      </li>
     
    </ul>
        </div>
    </nav>
</div>
)
    }
}



export default Header;
