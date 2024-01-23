
import './App.css';
import Login from './Login';
import Cleaning from './components/Cleaning/Cleaning';
import Cooking from './components/Cooking/Cooking';
import Customer from './components/Customer Service/Customer';
import Dashboard from './components/Dashboard/Dashboard';
import Forgot from './components/Forgot Password/Forgot';
import Garden from './components/Garden/Garden';
import Location from './components/Location/Location';
import Navbar from './components/Navbar';
import Nurses from './components/Nurses/Nurses';
import Party from './components/Party Staff/Party';
import Signup from './components/SignUp/Signup';
import Teachers from './components/Teachers/Teachers';
import Welcome from './components/Welcome/Welcome';
import CustomRouter from './CustomRouter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <Cleaning/>  */}
        {/* <Garden/> */}
        {/* <Cooking/> */}
        {/* <Nurses/> */}
        {/* <Party/> */}
        {/* <Teachers/> */}
        {/* <Customer/> */}
        {/* <Location/> */}
        {/* <Welcome/> */}
        {/* <Forgot/> */}
        {/* <Dashboard/> */}
        <CustomRouter />
    

    </div>
  );
}

export default App;
