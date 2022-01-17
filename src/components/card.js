const Card=(props)=>{
    return(

        <div className="col-3 my-4">
            <div class="my-card">
                <div className="d-flex h2 justify-content-center align-items-center" >{props.name}</div>
                <hr className="mx-3"></hr>
            </div>
        </div>
    )
}

export default Card;