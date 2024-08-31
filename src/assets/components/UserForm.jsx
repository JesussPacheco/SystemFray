import { useState } from "react";

const initialUserForm = {
  username: '',
  password: '',
  email: '',
};

export const UserForm = ({handleAddUser}) => {
  const [userForm, setUserForm] = useState(initialUserForm);
  const { username, password, email } = userForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log("name" + name)
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', userForm);
    handleAddUser(userForm)
    setUserForm(initialUserForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};