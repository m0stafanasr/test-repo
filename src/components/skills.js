import React from "react";
import './skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prog from './prog'

class Skills extends React.Component{
    constructor(){
        super()
    }
    render(){
    return(
        
        <div className="skills">
            <div className="h1  d-flex justify-content-center pt-4"><strong>Skills</strong></div>
            
            <Prog name="HTML,CSS"  val='85' />
            <Prog name="bootstrap" val='80' />
            <Prog name="javascript" val='70' />
            <Prog name="React" val='60' />
            </div>
          
        )
    }
   
    
}
export default Skills;