import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  const version = process.env.REACT_APP_VERSION || "1.0.0"; // Fallback version
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4">
      <div className="flex flex-col md:flex-row md:space-x-3 space-y-1 md:space-y-0 items-center justify-center text-seo-blue text-xs">
        <p>
          <NavLink to="/" target="_blank" className="hover:underline">
            Disclaimer
          </NavLink>
        </p>
        <span className="hidden md:inline">|</span>
        <p>A_Creations® is a registered trademark of A_Creations</p>
        <span className="hidden md:inline">|</span>
        <p>Version: {version}</p>
        <span className="hidden md:inline">|</span>
        <p>© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;