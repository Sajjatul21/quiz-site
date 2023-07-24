import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4 sticky top-0 bg-slate-800 w-full border-b-2 border-gray-500 ">
            <h1 className="text-3xl font-bold">.Quiz</h1>
            <nav>
                <Link className="mr-5" to='/'>Topics</Link>
                <Link className="mr-5" to='/statistic'>Statistic</Link>
                <Link className="mr-5" to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Navbar;