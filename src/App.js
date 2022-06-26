import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Pages/Homepages/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Pages/Homepages/Homepage";
import ServicesPage from "./Components/Pages/ServicesPage/ServicesPage";
import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage";
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import ContactPage from './Components/Pages/ContactPage/ContactPage';
import SignIn from './Components/Pages/SigninPage/SignIn';
import SignUp from "./Components/Pages/SignupPage/SignUp";
import DoctorsPage from "./Components/Pages/DoctorsPage/DoctorsPage";
import Footer from "./Components/Pages/Homepages/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/home" element={<Homepage></Homepage>}></Route>
                <Route path="/services" element={<ServicesPage></ServicesPage>}></Route>
                <Route path="/doctors/:category" element={<DoctorsPage></DoctorsPage>}></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
                <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
                <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
                <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
