import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/M_header'
import Download from './components/download'
import Skills from './components/skills';
import Cards from './components/projects';
import Footer from './components/footer';
function App() {
  return (
    <>
      
 
        <Header/>
        <Download/>
        <Skills/>
        <Cards/>
        <Footer/>
    </>
  );
}

export default App;
