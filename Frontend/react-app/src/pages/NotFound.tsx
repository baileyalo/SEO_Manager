import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[580px] text-center px-4 bg-gray-100">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Oops! Page Not Found</h2>
            <p className="text-gray-500 mb-8">
                The page you are looking for might have been removed or doesn’t exist.
            </p>
            <NavLink
                to="/"
                className="px-6 py-3 bg-reprisk-blue text-seo-yellow hover:bg-seo-bltr font-semibold cursor-pointer rounded-lg shadow-md transition"
            >
                Go Back Home
            </NavLink>
        </div>
    )
};

export default NotFound;