/* eslint-disable react/prop-types */
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from "react-toastify";
import Option from "../Option/Option";
import { useState } from 'react';

const Question = ({ questionSection }) => {
    const [correct, setCorrect] = useState(false);
    const { id, question, options, correctAnswer } = questionSection;
    const handleCorrectAnswer = (event) => {
        {
            correctAnswer === event ? toast("Success", { autoClose: 500 }) : toast("Try Again", { autoClose: 500 });
        }
    };

    return (
        <div className=" w-2/4 bg-dark-blue shadow-xl mt-10 px-10 py-4 border border-gray-500 rounded-md">
            <div className='grid  grid-cols-[11fr,1fr] item'>
                <h1 className="text-lg font-bold mb-8 ">{question}</h1>
                <EyeIcon onClick={() => setCorrect(!correct)} className={`w-4 h-4 ml-6 mt-2 cursor-pointer ${correct === true && 'text-btn-color'}`} />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-4 ">
                {
                    options.map((option, ind) => <Option key={ind} id={id} option={option} handleCorrectAnswer={handleCorrectAnswer}
                        correct={correct}
                    ></Option>)
                }
            </div>
            <p>
                {
                    correct === true && <span className='text-btn-color '>Answer: {correctAnswer}</span>
                }
            </p>
        </div>
    );
};

export default Question;