import { Routes, Route } from "react-router-dom";

import Home from "../../pages/home/home";
import CreateType from "../../pages/create-type/create-type";
import EditType from "../../pages/edit-type/edit-type";
import NotFoundPage from "../../pages/not-found-page/not-found-page";

const App = () => {
    return (
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path='/create-type' element={<CreateType />} />

        <Route path='/edit-type' element={<EditType />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    );
  }
  
  export default App;