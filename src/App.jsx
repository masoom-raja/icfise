import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";

import Home from "./component/hero";
import About from "./component/about";
import Courses from "./component/courses/courses";
import AdminDashboard from "./Admin/adminDashboard";
import Login from "./component/login";
import ProtectedRoute from "./component/ProtectedRoutes";
// import Projects from "./components/Projects";
import Certificate from "./component/Certificate";
import Contact from "./component/contact";
import Dip_industrial from "./component/courses/courseblog/Dip_industrial&fire"
import Dip_construction from "./component/courses/courseblog/Dip_Construction&health";
import AdvanceDiploma from "./component/courses/courseblog/Advance_Dip_in_industry"
import Pg_Dip_fire from "./component/courses/courseblog/Pg_Dip_fire"
import Pg_Dip_industrial from "./component/courses/courseblog/Pg_Dip_industrial"
import IOSH from "./component/courses/courseblog/IOSH"
import ConfinedSpace from "./component/courses/courseblog/Confined_space"
import OSHA from "./component/courses/courseblog/OSHA"
import FirstAid from "./component/courses/courseblog/First_aid"
import BasicScaf from "./component/courses/courseblog/BasicScaffolding"







function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/courses"} component={Courses} />
       <Route path={"/certificate"} component={Certificate} />
      <Route path={"/contact"} component={Contact} />  
      <Route path={"/login"} component={Login} />  
      <ProtectedRoute path={"/adminDashboard"} component={AdminDashboard} /> 

      {/* courses_Blog */}
      <Route path={"/dip-industrial-fire"} component={Dip_industrial}/>
      <Route path={"/dip-construction-health"} component={Dip_construction}/>
      <Route path={"/advanceDiploma"} component={AdvanceDiploma}/>
      <Route path={"/pg_Dip_fire"} component={Pg_Dip_fire}/>
      <Route path={"/pg_Dip_industrial"} component={Pg_Dip_industrial}/>
      <Route path={"/iOSH"} component={IOSH}/>
      <Route path={"/oSHA"} component={OSHA}/>
      <Route path={"/confinedSpace"} component={ConfinedSpace}/>
      <Route path={"/firstAid"} component={FirstAid}/>
      <Route path={"/BasicScaf"} component={BasicScaf}/>



    </Switch>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  );
}

export default App;