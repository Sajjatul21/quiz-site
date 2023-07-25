import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Statistic from './components/Statistic/Statistic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Main></Main>,
      children: [
        { path: '/', element: <Header></Header> },
        {
          path: '/quiz/:quizItem',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizItem}`),
          element: <Quiz></Quiz>
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>
        }

      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

