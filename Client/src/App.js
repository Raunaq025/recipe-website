import './App.css';
import './index.css';
import Homepage from './components/homepage';
import { Routes, Route} from 'react-router-dom';
import RecipeDetails from './components/recipeDetails';
import NavBar from './components/NavBar1';
import Footer from './components/footer';
import './components/NavBar1.css';
import Contact from './components/contactPage';
import AboutUs from './components/aboutUs';
import './components/aboutUs.css';

function App() {
return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/:category" element={<Homepage/>}/>
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/ContactUs" element={<Contact/>} />
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
