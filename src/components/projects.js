import React from "react";
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./card";

class Cards extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <div className="d-flex justify-content-center align-items-center h1">Projects</div>
            <div className="row d-flex justify-content-center my-3" >
            <Card name="Jumia"></Card>
            <Card name="mySupps"></Card>
            <Card name="Basic Portfolio"></Card>
            </div>
            </>
        )
    }
} 
export default Cards;