/* eslint-disable react/prop-types */
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const CartQuiz = ({ quizData }) => {
    const { id, name, logo, total } = quizData;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${id}`);
    };

    return (
        <div>
            <div className="w-64 bg-dark-blue  shadow-xl">
                <figure><img src={logo} alt="quiz" /></figure>
                <div className="pt-8 pb-4 px-4 mb-8">
                    <h2 className="card-title  flex justify-between">
                        {name}
                        <div className="text-xs">Total Quiz: {total}</div>
                    </h2>
                    <p className="my-5 text-sm">Learn quiz and improve you skill...</p>
                    <button onClick={handleNavigate} className="bg-btn-color mt-4  px-4 py-1 rounded font-medium flex items-center">
                        Start Quiz
                        <ArrowSmallRightIcon className="h-5 w-5 text-white font-bold ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartQuiz;