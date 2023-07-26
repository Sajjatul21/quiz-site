import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div>
                <h1 className="text-9xl mb-5">404</h1>
                <div className="grid place-items-center">
                    <Link to='/'>
                        <button className='bg-btn-color px-5 py-3 rounded-md font-bold mx-auto'>Go To Home</button>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Error;