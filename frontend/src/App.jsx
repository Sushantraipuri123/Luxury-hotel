import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import Home from './components/home/Home';
import About from './components/about/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rooms from './components/rooms/Rooms';
import Mission from './components/pages/mission/Mission';
import Spa from './components/pages/spa/Spa';
import SpaFaq from './components/pages/spa/SpaFaq';
import Contact from './components/contact/Contact';
import Team from './components/team/Team';
import SingleRoom from './components/rooms/SingleRoom';
import ScrollToTop from './utilities/ScrollToTo';
import BookNow from './components/bookNow/BookNow';


function App() {
  return (
    <Router>
      <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="rooms" element={<Rooms/>} />
        <Route path="mission" element={<Mission/>} />   
        <Route path="spa" element={<Spa/>} />   
        <Route path="faq" element={<SpaFaq/>} />   
        <Route path="contact" element={<Contact/>} />   
        <Route path="team" element={<Team/>} />   
        <Route path="booknow" element={<BookNow/>} />   
        <Route path="singleroom/:id" element={<SingleRoom/>} />   

      </Route>
    </Routes>
  </Router>
  )
}

export default App