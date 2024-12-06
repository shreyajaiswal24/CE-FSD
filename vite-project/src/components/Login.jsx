import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login({regDataLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function verification(e){
    e.preventDefault();
    if(regDataLogin.email == email && regDataLogin.password == password){
      alert ("Login Successful");
      navigate("/dash");

    }
    else{
      alert("Login Failed");
    }
  }
  return (
    <div>
      <h1>Welcome to Login page</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange={(e) => {setEmail(e.target.value)}}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={(e) => {setPassword(e.target.value)}}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>

        <button onClick={verification} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
