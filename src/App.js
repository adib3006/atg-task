import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home1 from './components/Home1';
import Home2 from './components/Home2';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home1></Home1>
    },
    {
      path:'/user',
      element:<Home2></Home2>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
