import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-seo p-5 text-seo-yellow shadow-lg fixed top-0 right-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/">
            {/* <img
              src="/.png"
              alt="SEO Logo"
              className="h-[120px] w-[220px] mx-auto transition duration-300 ease-in-out hover:grayscale hover:brightness-105 hover:scale-105" /> */}
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="space-x-5">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-seo-blue p-3 rounded-md font-bold"
                : "cursor-pointer hover:text-l hover:font-bold hover:text-seo-bltr transition-all duration-300"
            }
          >
           Music Dashboard
          </NavLink>
          
          <NavLink
            to="/metadata"
            className={({ isActive }) =>
              isActive
                ? "bg-seo-blue p-3 rounded-md font-bold"
                : "cursor-pointer hover:text-l hover:font-bold hover:text-seo-bltr transition-all duration-300"
            }
          >
            Meta Data
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;