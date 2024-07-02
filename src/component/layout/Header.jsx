import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {

  const newdata = { "/": "Home", "/counter": "Counter", "/admin": "AdminProject","/tool":"ToolKitCounter","/insert":"InsertUserFireBase","/view":"ViewUserFireBase","/signup":"Authentication" ,"google":"GoogleAuthentication"}
  const resturdata = Object.entries(newdata).map((ele) => {
    return <li className="nav-item ms-5 " key={ele[0]}>
      <Link className="nav-link active" aria-current="page" to={ele[0]}>{ele[1]}</Link></li>
  })
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Axios Project</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5  ">

              {resturdata}
            
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;