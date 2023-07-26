import { useContext } from "react";
import { QuizContext } from "../../layout/Main";
import CartQuiz from "../CartQuiz/CartQuiz";

const AllQuiz = () => {
    const quizDatas = useContext(QuizContext);

    return (
        <div className="md:mt-20">
            <h1 className="text-4xl text-center mb-20">Learn what my Quiz can do for you<span className="text-btn-color">☺</span> </h1>
            <div className="grid place-items-center md:grid-cols-4  ">
                {
                    quizDatas.map(quizData => <CartQuiz key={quizData.id} quizData={quizData}></CartQuiz>)
                }
            </div>
        </div>
    );
};

export default AllQuiz;