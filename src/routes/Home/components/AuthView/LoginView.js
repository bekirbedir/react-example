import React from 'react';

const loginView = ({onViewChange}) => (
<div>

<div className= "d-flex justify-content-center">
  <form className="form-inline">
  
  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
  <input type="text" className="form-control" placeholder="ornek@ornek.com"/>
  </div>

  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
    <input type="text" className="form-control"  placeholder="Parola"/>
  </div>
  <button type="submit" className="btn btn-primary">Giriş Yap</button>
 
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

export default loginView;