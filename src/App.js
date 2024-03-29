import React from "react";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/homepage/HomePage";
import CoursesPage from "./pages/coursespage/CoursesPage";
import CourseDetails from "./pages/coursedetailspage/CourseDetails";
import CertificatesPage from "./pages/certificatespage/CertificatesPage";
import CertificateDetails from "./pages/certificatedetailspage/CertificateDetails";
import Login from "./pages/loginpage/Login";
import Signup from "./pages/signuppage/Signup";
import ToDoListPage from './pages/to-do-list-page/toDoListPage';
//App.js is our main root component in the components tree
//creating our first component 

const App=() => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}  />
                <Route path="/courses" element={<CoursesPage />}/>
                <Route path="/certifications" element={<CertificatesPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/course-details/:id" element={<CourseDetails/>} />
                <Route path="/certif-details/:id" element={<CertificateDetails/>}/>
                <Route path="/todolist" element={<ToDoListPage />}/>
            </Routes>
        </div>
    )
}

export default App;

//routes mean sublinks in web dev , each route shows a component , for this we need a library : React router
//each page of the website has a route
//routing is done on the top level
//route component is enclosed inside routes component
//static route config = page path + element (component to render in that path)
//dynamic routes are created for pages that get their data dynamically 
//dyanmic routes get a path with a special ID 
//we can see our dependencies in pacakge.json
//we can see all the libraries that are required by our project under node_modules