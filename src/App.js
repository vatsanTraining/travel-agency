import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';
import ShowContent from './components/ShowContent';
import KnowEffect from './components/KnowEffect';
import ShowReview from './components/ShowReview';
import Reservation from './components/Reservation';
import Enquiry from './components/Enquiry';
import {Link,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound';
import { MyRoutes } from './components/MyRoutes';
function App() {
  const company={
    title:"Garuda Travels",
    city:"Chennai",
    phonenumber:2939239

  }

  

  return (
    <div className="App">
      {/* <Header {...company}></Header> */}
      {/* <Header title={""} phonenumber={""} city={""}></Header> */} 
      {/* <Header data ={company}></Header>

      {/* <MainContent></MainContent> */}
      {/* <Footer></Footer>
      <ShowContent/> */}
      {/* <KnowEffect></KnowEffect> */}
      {/* <ShowContent></ShowContent>  */}
      {/* <ShowReview></ShowReview>
      {/* <KnowEffect name={"Shiv"}></KnowEffect> */}
      {/* <Reservation></Reservation>
      <Enquiry></Enquiry> */}

<nav>
  <ul>
    <li className='navItem'>   <Link to="/tours">Tours</Link>
</li>
<li className='navItem'>   <Link to="/reviews/ram">Feed Back</Link>
</li>
<li className='navItem'>   <Link to="/reservation">Book Tours</Link>
</li>
<li className='navItem'>   <Link to="/enquiry">Contact Us</Link>
</li>
  </ul>
   </nav>
   <MyRoutes></MyRoutes>
   {/* <Routes>
   <Route path="/" element={<Home></Home>}></Route>

    <Route path="/tours" element={<MainContent></MainContent>}></Route>
    <Route path="/reviews" element={<ShowReview></ShowReview>}></Route>
    <Route path="/reservation" element={<Reservation></Reservation>}></Route>
    <Route path="/enquiry" element={<Enquiry></Enquiry>}></Route>

    <Route path="*" element={<NotFound></NotFound>}></Route>
 
   </Routes> */}

    </div>
  );
}

export default App;
