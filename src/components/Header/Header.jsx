import { useRef } from 'react';
import img from '../../assets/headerImg.webp';
import AllQuiz from '../AllQuiz/AllQuiz';
const Header = () => {

    const quizRef = useRef(null);
    const handleStartQuiz = () => {
        if (quizRef.current) {
            quizRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='mt-20 md:ml-20 md:mr-20 mx-4 my:10 '>
            <div className=' grid  md:grid-cols-2 md:gap-x-6 place-items-center'>
                <div className=''>
                    <h1 className='text-4xl mb-6'>🎯 Test Your Knowledge!🧠 </h1>
                    <h3 className='text-2xl mb-3'>Welcome to our Fun and Challenging Quiz Section </h3>
                    <p className='mb-6'>Explore our exciting collection of quizzes and put your expertise to the test. Are you ready to show off your smarts and have a blast along the way? Let`s dive in and see how much you know!</p>

                    <button onClick={handleStartQuiz} className='bg-btn-color px-5 py-3 rounded-md font-bold '>Let's Start</button>
                </div>
                <div className='my-20'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div ref={quizRef}>
                <AllQuiz></AllQuiz>
            </div>
        </div>
    );
};

export default Header;