import styles from './app.module.css';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

import Home from "../../pages/home/home";
import CreateType from "../../pages/create-type/create-type";
import EditType from "../../pages/edit-type/edit-type";
import NotFoundPage from "../../pages/not-found-page/not-found-page";

import { getData } from '../../utils/api';

const App = () => {
    // useEffect(()=> {
    //     getData()
    //         .then((res) => {
    //             console.log(res)
    //         })
    // }, []);

    return (
        <div className={ styles.app }>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path='/create-type' element={<CreateType />} />

                <Route path='/edit-type' element={<EditType />} />

                <Route path="*" element={<NotFoundPage />} />

            </Routes>    
        </div>

    );
  }
  
  export default App;