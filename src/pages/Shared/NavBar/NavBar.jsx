import navLogo from "../../../assets/icon/Frame 1.png";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Products</a>
      </li>
      <li tabIndex={0}>
        <a>Receipe</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

  return (
    <>
     <div className="w-full absolute z-30 px-24 py-4">
     <div className="navbar bg-opacity-30 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="btn btn-ghost normal-case text-xl">
            <img src="https://t4.ftcdn.net/jpg/06/62/29/25/360_F_662292591_3sFN882yT6tMslnKXwNPMlkrx1RNxzPv.jpg" className="w-32" alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
     </div>
    </>
  );
};

export default NavBar;
