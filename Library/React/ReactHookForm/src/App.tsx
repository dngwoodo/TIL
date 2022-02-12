import Profile from './components/Profile';
import ProfileProvider from './context/profile/ProfileProvider';

import './App.css';

export default function App() {
  return (
    <ProfileProvider>
      <div>
        <h1>Profile</h1>
        <Profile />
      </div>
    </ProfileProvider>
  );
}
