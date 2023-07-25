import { createContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';

export const QuizContext = createContext([]);

const Main = () => {
    const { data } = useLoaderData();
    return (
        <QuizContext.Provider value={data}>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </QuizContext.Provider>
    );
};

export default Main;