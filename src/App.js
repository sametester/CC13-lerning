import { useState } from 'react';

function App() {
  // const friends = ['Korn', 'Bell', 'Ice', 'Mew', 'Ham', 'Korn'];
  const initialFriend = [
    { id: 1, name: 'Korn' },
    { id: 2, name: 'Bell' },
    { id: 3, name: 'Ice' },
    { id: 4, name: 'Mew' },
    { id: 5, name: 'Ham' },
    { id: 6, name: 'Korn' },
  ];
  const product = [];
  const products = { name: 'Coke', price: 15 };

  const [friends, setFriends] = useState(initialFriend);

  const handleCLickUnfriend = idToDelete => {
    const nextFriendState = friends.filter(el => el.id !== idToDelete);
    setFriends(nextFriendState);
  };

  return (
    <div>
      {friends.map(el => (
        <div
          style={{
            border: '1px solid green',
            display: 'flex',
            justifyContent: 'space-between',
          }}
          key={el.id}
        >
          <span>{el.name}</span>
          <button onClick={() => handleCLickUnfriend(el.id)}>Unfriend</button>
        </div>
      ))}
      {/* <div style={{ border: '1px solid green' }}>Bell</div>
      <div style={{ border: '1px solid green' }}>Ice</div>
      <div style={{ border: '1px solid green' }}>Mew</div>
      <div style={{ border: '1px solid green' }}>Ham</div> */}
    </div>
  );
}

export default App;
