import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <h1 className="text-2xl font-bold text-blue-600">
        <Link to="/">Deployee</Link>
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/deployments">Deployments</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
