import React, { useState } from 'react';
import Greetings from './Greetings';

const SignupPage = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    nationality: '',
    toggleForm: true,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }
  function handleClick(e) {
    e.preventDefault();
    setState({
      ...state,
      toggleForm: !state.toggleForm,
    });
  }

  return (
    <div>
      {state.toggleForm ? (
        <form className="d-flex flex-column m-3" action="">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id=""
            value={state.email}
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id=""
            value={state.password}
          />

          <label htmlFor="nationality">Nationality</label>
          <select
            onChange={handleChange}
            name="nationality"
            id=""
            value={state.nationality}
          >
            <option value="en">English</option>
            <option value="de">Deutch</option>
            <option value="fr">French</option>
          </select>
          <button onClick={handleClick} className="btn btn-primary my-2">
            Submit
          </button>
        </form>
      ) : (
        <div>
          <Greetings lang={state.nationality} />
          <p>Your email address is: {state.email} </p>
          <button onClick={handleClick} className="btn btn-primary my-2">
            Change information
          </button>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
