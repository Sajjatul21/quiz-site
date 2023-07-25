import { useLoaderData } from "react-router-dom";
import QuestionSection from "../QuestionSection/QuestionSection";

const Quiz = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;
    return (
        <div className=" mt-20">
            <h1 className="text-4xl text-center font-bold mb-8">Quiz of <span className="text-btn-color">{name}</span></h1>
            <div className="flex flex-col items-center justify-center">
                {
                    questions.map(questionSection => <QuestionSection key={questionSection.id} questionSection={questionSection}></QuestionSection>)
                }
            </div>
        </div>
    );
};

export default Quiz;