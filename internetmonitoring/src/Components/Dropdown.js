import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Arraylist extends React.Component {
  language = {
    myarray: [
      "--Select Your Course--",
      "Devops",
      "Meanstack/MernStack",
      "Gaming",
      "AWS",
      "IDMA",
      "IOT",
      "CyberSecurity",
      "Operating System",
      "Python/C/Java/C++",
      "Infra",
      "SDE",
      "Become Coder",
    ],
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="card-body">
              <form>
                
                  <label>Course:</label>
                  <select className="form-control">
                    {this.language.myarray.map((data) => (
                      <option>{data}</option>
                    ))}
                  </select>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Arraylist;
