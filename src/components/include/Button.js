import "../../assets/css/include/Button.css"

function Button(props) {
    return(
      <div className="btn-position">
        <button className="round-btn">{props.name}</button>
      </div>
    )
  }
  
  export default Button;