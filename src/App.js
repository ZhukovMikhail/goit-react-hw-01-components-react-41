import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from './components/Statistics/Statistics.jsx';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';

import { FriendList } from './components/FriendList/FriendList.jsx';

export function App() {
  return (
    <div className="App">
      Слава Україні
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}

// export default App;
