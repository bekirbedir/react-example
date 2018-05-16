import React from 'react';
import { connect } from 'react-redux';
import { userInit } from 'store/userReducer';




class LoginView extends React.Component{
    constructor(){
        super()
        
        this.state = {
            email : "",
            password : ""
        }
    }

    onUserClick(){
        //TODO HTTP call
        console.log(this.state)
        const user = {
            name: "Melih Korkmaz",
            email: "melih@gmail.com",
            age: 24,
            gender: "male"
        }
        /*
        const user = {
            name: this.state.email,
            password: this.state.password
        }
        */
        this.props.loginUserData(user);
    }

    emailChanged(e){
        this.setState({
            email: e.target.value
        })
    }
    passwordChanged(e){
        this.setState({
            password: e.target.value
        })
    }
    

    render(){
        const onViewChange = this.props.onViewChange;

        if(this.props.userData.name){
            return  (<div> LOGIN OLDUNUZ 
                  <p>Hoşgeldiniz , Sayın  {this.props.userData.name} </p>
            <p>Şifreniz: {this.props.userData.password} </p>
            </div>)
            
        }
        else{
      return (
        <div>
        
        <div className= "d-flex justify-content-center">
          <form className="form-inline">
          
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
          <input type="text" className="form-control" value = {this.state.email} onChange={this.emailChanged.bind(this)}  placeholder="ornek@ornek.com"/>
          </div>
        
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input type="text" className="form-control"  value = {this.state.password}  onChange= {this.passwordChanged.bind(this)}  placeholder="Parola"/>
          </div>
          <button type="button" className="btn btn-primary"
          onClick = {this.onUserClick.bind(this)}
          >Giriş Yap</button>
         
        </form>
        
        </div>
        <div className= "d-flex justify-content-start">
        <a href ="#" onClick = { e => {
            e.preventDefault();
            onViewChange(3)
        }} > Şifremi Unuttum </a>
        </div>
        
        <div className= "d-flex justify-content-center signup">
        <p > Henüz üye değil misiniz? <br/> <a href = "#" onClick = {e => {
            e.preventDefault()
            onViewChange(2)
        }} ><bold>Ücretsiz Kayıt Olmak İçin Tıklayınız..</bold>  </a></p>
        </div>
        
        </div>
        
        )
    }
    
      }
}

const mapStateToProps = (state) => {
    return {
        userData :state.user
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        loginUserData: (user) => dispatch(userInit(user))
    }
}

export default connect(mapStateToProps  , mapDispatchToProps)(LoginView)

//export default LoginView;