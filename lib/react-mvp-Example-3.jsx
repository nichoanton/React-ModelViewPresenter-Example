import { useState } from 'react';

// Model
const User = { name: 'John Doe', age: 30 };

// View
function UserView({user}) {
  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
    </div>
  );
}

// Presenter
function UserPresenter() {
  const [user, setUser] = useState(User);
  const setName = (name) => {
    setUser({ ...user, name });
  };
  const setAge = (age) => {
    setUser({ ...user, age });
  };
  return {
    setName,
    setAge,
    view: <UserView user={user}/>
  };
}

// Usage
const presenter = UserPresenter();
presenter.setName("Jane Doe");
presenter.setAge(31);
console.log(presenter.view);