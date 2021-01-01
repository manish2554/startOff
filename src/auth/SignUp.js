import React from "react";
import "./Styles/Signin.css";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
          <div className="form-box">
              <div className="header-form">
                <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
                <div className="image">
                </div>
              </div>
        <div className="body-form">
        <form>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" className="form-control" placeholder="Username" />
          </div>

        <div className="input-group mb-3">
            <div className="input-group-prepend">
            <span className="input-group-text"><i class="fa fa-lock"></i></span>
            </div>
            <input type="password" className="form-control" placeholder="Password" />
        </div>

        <div className="input-group mb-3">  
            <div className="input-group-prepend">
            <span className="input-group-text"><i class="fa fa-lock"></i></span>
            </div>
            <input type="password" className="form-control" placeholder="Re-enter Password" />
        </div>

        <button type="button" className="btn btn-secondary btn-block">Signup</button>

       </form>
                <div className="social">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter-square"></i></a>
                  <a href="#"><i className="fab fa-google"></i></a>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default SignUp;
