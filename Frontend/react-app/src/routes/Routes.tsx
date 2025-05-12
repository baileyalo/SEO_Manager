import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MusicSEODashboard from "../pages/MusicSEODashboard";
import NotFound from "../pages/NotFound";
import Navbar from "../components/NavBar";
import MusicMetaData from "../pages/MusicMetaData";


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/metadata" element={<MusicMetaData />} />
                <Route path="/dashboard" element={<MusicSEODashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;