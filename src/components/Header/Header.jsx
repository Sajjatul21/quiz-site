import img from '../../assets/headerImg.webp';
import AllQuiz from '../AllQuiz/AllQuiz';
const Header = () => {
    return (
        <div className='mt-20 ml-20 mr-20'>
            <div className=' grid grid-cols-2 gap-x-6 place-items-center'>
                <div className=''>
                    <h1 className='text-4xl mb-6'>🎯 Test Your Knowledge!🧠 </h1>
                    <h3 className='text-2xl mb-3'>Welcome to our Fun and Challenging Quiz Section </h3>
                    <p className='mb-6'>Explore our exciting collection of quizzes and put your expertise to the test. Are you ready to show off your smarts and have a blast along the way? Let`s dive in and see how much you know!</p>

                    <button className='bg-btn-color px-5 py-3 rounded-md font-bold'>Start Quiz</button>
                </div>
                <div >
                    <img src={img} alt="" />
                </div>
            </div>
            <AllQuiz></AllQuiz>
        </div>
    );
};

export default Header;