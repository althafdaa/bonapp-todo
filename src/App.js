import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className='w-full md:w-96 lg:w-[600px] mx-auto px-2 py-6'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
