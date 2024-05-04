import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { logoutUser } from '../actions/userActions';

export default function Navbar() {
  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logoutUser action when the user clicks Logout
    dispatch(logoutUser());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          FoodieFlavour
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <li className="nav-item mt-2">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {currentUser.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Orders</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={handleLogout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
