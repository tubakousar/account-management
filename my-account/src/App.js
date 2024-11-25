// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Signuppage from "./Components/Signuppage";
import Loginpage from "./Components/Loginpage";
import Adminhomepage from "./Components/Adminhomepage";
import Customersignuppage from "./Components/Customersignuppage";
import Suppliersignuppage from "./Components/Suppliersignuppage";
import Customerhomepage from "./Components/Customerhomepage";
import Supplierhomepage from "./Components/Supplierhomepage";
import CustSuplidetails from "./Components/CustSuplidetails";
import Protectedroute from "./Components/Protectedroute";
// import CustSuplidetails from './Components/CustSuplidetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/loginpage" element={<Loginpage />} />

          <Route
            path="/adminhomepage"
            element={
              <Protectedroute>
                <Adminhomepage />
              </Protectedroute>
            }
          />

          <Route
            path="/customersignuppage"
            element={
              <Protectedroute>
                <Customersignuppage />
              </Protectedroute>
            }
          />
          <Route
            path="/supliersignuppage"
            element={
              <Protectedroute>
                <Suppliersignuppage />
              </Protectedroute>
            }
          />
          <Route
            path="/customerhomepage"
            element={
              <Protectedroute>
                <Customerhomepage />
              </Protectedroute>
            }
          />
          <Route
            path="/supplierhomepage"
            element={
              <Protectedroute>
                <Supplierhomepage />
              </Protectedroute>
            }
          />
          <Route path="/custsuplidetails/:id" element={<CustSuplidetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
