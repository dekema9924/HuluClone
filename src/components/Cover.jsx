
const Cover = (props)=>{
    return(
         <div className="--covers">
            <div className="--cover-text">
                    <p>{props.heading}</p>
                    <h4>{props.series}</h4>
            </div>
            <img className='--cover-img' src={props.img} alt="show-img" />
        </div>
    )
 



}

export default Cover;