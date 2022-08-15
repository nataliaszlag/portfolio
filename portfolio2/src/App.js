import Main from './Main.js'
import Navigation from './components/Navigation.js'
import AccountingWebsite from './pages/AccountingWebsite.js'
import MyDelivery from './pages/myDelivery.js'
import WeddingWebsite from './pages/weddingWebsite.js'
import GoogleAds from './pages/googleAds.js'
import Test from './pages/deliveryFree.js'
import './assets/stylesheets.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">    
      <HashRouter>
          <Navigation/>
          <Routes basename="https://nataliaszlag.github.io/" >
            <Route exact path="/" element={<Main />}/>
            <Route path="/free" element={<Test />}/>
            <Route path="/#cards" element={<Main />}/>
            <Route path="/#About" element={<Main />}/>
            <Route path="/#contact" element={<Main />}/>
            <Route path="/accounting" element={<AccountingWebsite />}/>
            <Route path="/delivery" element={<MyDelivery />}/>
            <Route path="/wedding" element={<WeddingWebsite />}/>
            <Route path="/ads" element={<GoogleAds />}/>
          </Routes>
      </HashRouter> 
    </div>
  );
}

export default App;
