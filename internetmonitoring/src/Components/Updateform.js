import "../Components/Updateform.css";

const Updateform  = (props) =>{
    return (
        <div className="updateForm">
            {/* <label>FullName</label> */}
            <input placeholder={props.placeholder}/>
            <br></br>

        </div>
    )
}
export default Updateform;