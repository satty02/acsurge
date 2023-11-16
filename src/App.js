import Products from './Components/Products';
import ProductList from './Components/Products&Services/ProductList';
import Services from './Components/Products&Services/Services';
import System from './Components/Products&Services/System';
import Contact from './Components/contact/Contact';
import Courousel from './Components/mainPage/Courousel';
import FrontPage from './Components/mainPage/FrontPage';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import OurClients from './Components/mainPage/OutClients';


function App() {
  return (
    // <div className="App">
    //     {/* <Products/> */}
    //     {/* <FrontPage/> */}
    //     {/* <OurWorks/> */}
    //     {/* <Contact/> */}
    //     {/* <ProductList/> */}
    //     {/* <Services/> */}
    //     {/* <System/> */}
    // </div>
    <Router>
      <Routes>
        <Route exact path='/' Component={FrontPage} />
        <Route exact path='/systems' Component={System} />
        <Route exact path='/products' Component={ProductList} />
        <Route exact path='/services' Component={Services} />
        <Route exact path='/Contact' Component={Contact} />
        <Route exact path='/slide' Component={OurClients} />
      </Routes>
    </Router>
  );
}

export default App;
