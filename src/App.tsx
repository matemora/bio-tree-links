import './App.css'
import { LinkSection } from './components/LinkSection';
import { ProfileSection } from './components/ProfileSection';
import { SocialSection } from './components/SocialSection';

function App() {
  return (
	  <div className="container">
	    <ProfileSection />
      <SocialSection />
      <LinkSection />
	  </div>
  );
}

export default App