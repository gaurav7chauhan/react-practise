import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-gray-800 border-gray-700 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
              className="mr-3 h-12 rounded"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-200 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 font-medium
               rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-colors"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-800
               font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-colors"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } duration-200 border-b border-gray-700 hover:bg-gray-700 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 transition-colors`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } duration-200 border-b border-gray-700 hover:bg-gray-700 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 transition-colors`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } duration-200 border-b border-gray-700 hover:bg-gray-700 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 transition-colors`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/github"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } duration-200 border-b border-gray-700 hover:bg-gray-700 
                    lg:hover:bg-transparent lg:border-0 hover:text-orange-500 lg:p-0 transition-colors`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
