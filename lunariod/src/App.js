
import './App.css';
//// components 
import NavBar from './components/NavBar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import CarouselImages from './components/CarouselImages';
import Section3 from './components/Section3';
import RoadMap from './components/RoadMap';
import Artist from './components/Artist'
import Team from './components/Team';
import FAQ from './components/FAQ';






function App() {
  return (
    <div >
    <NavBar/>
    <Section1/>
    <Section2/>
    <CarouselImages/>
    <Section3/>
    <RoadMap/>
    <Artist/>
    <Team/>
    <FAQ/>
    </div>
  )
}

export default App;
