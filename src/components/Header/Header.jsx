import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="text-center">
            <div className="flex gap-6 justify-center my-10 text-blue-600">
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
        </div>
    );
};

export default Header;