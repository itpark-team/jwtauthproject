import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/open_pages/MainPage";
import AuthPage from "./components/open_pages/AuthPage";
import NotFoundPage from "./components/open_pages/NotFoundPage";
import UserPage from "./components/secure_pages/UserPage";
import SecureLayout from "./components/secure_pages/SecureLayout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>

            <Route path="/secure" element={<SecureLayout/>}>
                <Route path="user" element={<UserPage/>}/>
            </Route>

        </Routes>
    );
};

export default App;