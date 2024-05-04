import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(""); // Renamed to formError
  const loginstate = useSelector(state => state.loginUserReducer);
  const { loading, error: loginError } = loginstate; // Renamed to loginError
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const login = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const user = { email, password };
    try {
      await dispatch(loginUser(user));
      // Redirect or perform any other action upon successful login
      window.location.href = "/";
    } catch (err) {
      setFormError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: '35px' }}>
            Login
          </h2>

          {loading && <Loading />} {/* Use your Loading component */}
          {loginError && <Error error="Invalid Credentials" />} {/* Use your Error component */}

          <form onSubmit={login}>
            <input
              required
              type="text"
              placeholder="Email"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="form-control mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn mt-3 mb-3">
              Login
            </button>
            {formError && <div className="text-danger">{formError}</div>}
          </form>
          <a href="/register" style={{ color: 'black' }} className="mt-2">
            Click Here To Register
          </a>
        </div>
      </div>
    </div>
  );
}
