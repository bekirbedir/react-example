import React from 'react';
import axios from 'axios';
import *as Http from '../../../../utils/http.helper';

    class SignUpView extends React.Component{
      constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            hasError : false,
            errorMessage: ""
          
        }
    }
    
    onInputChanged(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  onSignUp(e) {
     e.preventDefault();
    console.log("onSignUp(): " + this.state  )
    

    if( this.state.email === "" || this.state.password === "" ){
      this.setState({
        hasError: true,
        errorMessage : "lütfen tüm alanları doldurun"
      })
      return;
    }

     const model = this.state;
     console.log ("slkdfs")
    console.log("model" + model)

   const response =  Http.post ("auth/sign-up" , model)
    .then(response => {
      this.setState({
         hasError : !response.status,
         errorMessage: response.error.errmsg
     })
   });
   console.log(this.state.errorMessage)
   console.log(this.state.hasError)
 
  }

  renderError(){
      return <div className="alert alert-danger col-6  offset-3" > { this.state.errorMessage} </div>
  } 


  render() {
    const { onViewChange } = this.props;
    const Error = this.renderError.bind(this);
    return (
        <div>
           <div className= "d-flex justify-content-center">
            <form className="form-inline" onSubmit={this.onSignUp.bind(this)}>
                <div className="form-group">
                    <input type="text" name="email" className="form-control" placeholder="E-Posta" value={this.state.email} onChange={this.onInputChanged.bind(this)} />
                </div>
                <div className="form-group mx-sm-3">
                    <input type="password" name="password" className="form-control" placeholder="Şifre" value={this.state.password} onChange={this.onInputChanged.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Kayıt Ol!</button>
            </form>

        
       
        </div >
<row>  {this.state.hasError ? <Error /> : '' } </row>


        <div className = "d-flex justify-content-center signup">
       
        <p>
                Zaten üye misiniz? <br />
                O zaman giriş yapmak için <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                    e.preventDefault();
                    onViewChange(1);
                }}>tıklayınız.</a></u></b>
            </p> 
        </div>
        
        </div >
    )
}

    }

export default SignUpView