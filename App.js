import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar title='Text-converter' aboutText='About' Privacytext="Privacy" />
      <div className="container">
        <TextForm />
      </div>
      <center>
        <Footer />
      </center>
    </>
  )
}

export default App;
