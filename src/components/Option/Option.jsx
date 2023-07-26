
const Option = ({ id, option, handleCorrectAnswer }) => {
    const handleClick = () => {
        handleCorrectAnswer(option);
    };

    return (
        <div>
            <div onClick={handleClick} >
                <label className=" border border-sky-800 rounded p-2 w-full cursor-pointer flex items-center">
                    <input type="radio" name={id} className="mr-2" />
                    <p>{option}</p>
                </label>
            </div>

        </div>
    );
};

export default Option;