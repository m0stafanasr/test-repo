import React from "react";
//import './download.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {saveAs} from 'file-saver';
import file from './Day1.pdf'
class Download extends React.Component{
    constructor(){
        super()
    }
    render(){
        const saveFile = ()=>{
            saveAs("./Day1.pdf","CV.pdf");
        };
        return (
        <>
    <div className="row d-flex flex-column justify-content-center my-3">
            
    <div className="col-12 text-center display-2">Download this portfolio</div>
    <div className=" col-12 d-flex justify-content-center text-center  my-3">
    <div className="btn btn-secondary h-100 h3 py-4 px-4"> <a href={file} download="Day1.pdf">  Download Portfolio</a></div>
        </div>
    </div>

</>)
}
}

export default Download;