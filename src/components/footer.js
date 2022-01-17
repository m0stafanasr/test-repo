import React from "react";
import './footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faTwitter,
    faLinkedin,
    faFacebookF,
  } from "@fortawesome/free-brands-svg-icons";
import 'font-awesome/css/font-awesome.min.css';

class Footer extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="footer mt-3 ps-3">
                <div className="h1 text-light text-opacity-75 mb-4">Get in touch</div>
                <div className="row">
                    <div className="col-3">
                    <div className="row text-light h5">
                    <div className="col-1 ">
                    <FontAwesomeIcon icon={faEnvelope} />
                        </div>    
                        <div className="col-3">
                        <strong>someone@somewhere.com </strong>
                        </div> 
                        </div>
                        <div className="row text-light h5">
                        <div className="col-1">
                        <FontAwesomeIcon icon={faAddressCard}  />
                        
                        </div>    
                        <div className="col-3">
                        <strong>1111111111111 </strong>
                        </div>    
                    </div>    
                    
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="buton py-3 px-5 h3 text-light">get in touch</div>
                    </div>
                    <div className="col-3 h2 d-flex flex-row text-light text-opacity-50 justify-content-center">
                    <FontAwesomeIcon className=" ms-2" icon={faGithub} />
                    <FontAwesomeIcon className=" ms-2" icon={faTwitter} />
                    <FontAwesomeIcon className=" ms-2" icon={faLinkedin} />
                    <FontAwesomeIcon className=" ms-2" icon={faFacebookF} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;