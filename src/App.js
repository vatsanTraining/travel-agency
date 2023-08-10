import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  const company={
    title:"Garuda Travels",
    city:"Chennai",
    phonenumber:2939239

  }
  return (
    <div className="App">
      <Header {...company}></Header>
      {/* <Header title={""} phonenumber={""} city={""}></Header> */}
      {/* <Header data ={company}></Header> */}

      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
