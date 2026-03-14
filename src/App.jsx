
import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// console.log(fetchUsers);

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();
  
  return (
    <>
      {/* users */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>

      {/* frieds */}
      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise} />
      </Suspense>
      {/* counter */}
      {/* <Counter/> */}
      {/* batsman */}
      {/* <Batsman/> */}
    </>
  )
}

export default App
