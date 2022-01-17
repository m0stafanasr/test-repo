import React from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    constructor() {
     
        super();
        
        console.log("from constructor")
      }
      render() {
        

        console.log("from render")
        return( 
            <>
        
        <div className="row d-flex flex-column justify-content-center img">
            
            <div className="col-12 text-center h1">Mostafa nasr</div>
            <div className="col-12 text-center h2">Portfolio</div>
        </div>
        </>
        )
      }
}
export default Header;