import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Header from './components/Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Main></Main>,
      children: [
        { path: '/', element: <Header></Header> },

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

