import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FallBackComponent from './components/Fallback';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Lazy loading components
const ProfileSettings = React.lazy(() => import("./screens/ProfileSetting"));
const Cvs = React.lazy(() => import("./screens/CVS"));

// Lazy loading components
const Home = React.lazy(() => import("./screens/Home"));
const PricingPlan = React.lazy(() => import("./screens/Pricing"));
/*const JobCvPreview = React.lazy(() => import("./screens/Preview1"));
const EducationCvPreview = React.lazy(() => import("./screens/Preview2"));*/
const EditCv = React.lazy(() => import("./screens/EditCv"));
const Preview = React.lazy(() => import("./screens/Preview"));
const Template = React.lazy(() => import("./screens/Template"));
const Form = React.lazy(() => import("./screens/CvForm"));
const Login = React.lazy(() => import("./screens/Login"));
const Signup = React.lazy(() => import("./screens/Signup"));
const Help = React.lazy(() => import("./screens/Help")); // New component


function App() {
  const [activeTab, setActiveTab] = React.useState('myCVs');

  

  return (
    <div className="App">
      <Suspense fallback={<FallBackComponent />}>
        <div className="d-flex">
          
          <div className="content-area">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/editcv/:id' element={<EditCv  />} />
              <Route path='/template' element={<Template />} />
              <Route path='/form/:id' element={<Form />} />
              
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/preview/:id' element={<Preview />} />
              <Route path='/profilesetting' element={<ProfileSettings/>} /> 
              <Route path='/cvs' element={<Cvs />} /> 
              <Route path='/pricing' element={<PricingPlan />} /> 
            </Routes>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
