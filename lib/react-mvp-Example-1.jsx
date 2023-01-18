import { useState } from 'react';

// Model
const User = { name: 'John Doe', age: 30 };

// View
function UserView({user, setName, setAge}) {
  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <button onClick={()=> setName('Jane Doe')}>Change Name</button>
      <button onClick={()=> setAge(35)}>Change Age</button>
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
  return <UserView user={user} setName={setName} setAge={setAge} />;
}

// Usage
console.log(<UserPresenter />);