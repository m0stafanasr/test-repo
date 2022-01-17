const Prog = (props)=>{
    console.log(props)
    return(
        <>
        
       
       <div className="row py-3 mx-3 d-flex justify-content-center align-items-center">
           <label className="col-1  h4"><strong>{props.name}</strong></label>
        <progress className="col-3" id="file"  value={props.val} max="100"> </progress>
        </div>
        </>

    )
    
}
export default Prog;