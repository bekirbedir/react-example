import React from 'react';

const SignUpView = ({onViewChange}) => (
    <div>
    
    <div className= "d-flex justify-content-center">
      <form className="form-inline">
      
      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
      <input type="text" className="form-control" placeholder="ornek@ornek.com"/>
      </div>
    
     
      <button type="submit" className="btn btn-primary">Kayıt Ol</button>
     
    </form>
    
    </div>
  
    
    <div className= "d-flex justify-content-center signup">
    <p > Zaten üye misiniz? <br/> <a href = "#" onClick = { e => {
          e.preventDefault()
      onViewChange(1)
    } }  ><bold>Giriş yapmak İçin Tıklayınız..</bold>  </a></p>
    </div>
    
    </div>
    
    )

export default SignUpView