import './App.css';
import { Hero } from './components/Hero';
import MeetPeperuney from './components/MeetPeperuney';
import ClickToEarn from './components/ClickToEarn'
import HowToBuy from './components/HowToBuy'
import PeperuneyContinue from './components/PeperuneyContinue'
import OurPartners from './components/OurPartners'
import Faq from './components/Faq'
import Pizzanomics from './components/Pizzanomics'
import JoinTheCult from './components/JoinTheCult';
import PeperuneyToons from './components/PeperuneyToons';
import Footer from './common/Footer';
import PeperuneyMeme from './components/PeperuneyMeme';

function App() {
  return (
    <div>
      <Hero />
      <MeetPeperuney />
      <HowToBuy />
      <PeperuneyContinue />
      <Pizzanomics/>
      <ClickToEarn />
      <PeperuneyToons/>
      <OurPartners />
      <PeperuneyMeme/>
      <Faq />
      <JoinTheCult />
      <Footer/>
    </div>
  );
}

export default App;
