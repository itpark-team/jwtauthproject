import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import LocalStorageWorker from "../../store/LocalStorageWorker";
import UserApiWorker from "../api/UserApiWorker";

const UserPage = () => {

    let localStorageWorker = new LocalStorageWorker();
    let userApiWorker = new UserApiWorker();

    let navigate = useNavigate();

    let [userData, setUserData] = useState({
        "name": "",
        "description": ""
    });

    const loadUserData = () => {
        let token = localStorageWorker.getToken();

        userApiWorker.getUser(token).then(
            response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const logout = () => {
        localStorageWorker.deleteToken();
        navigate("/");
    }

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <div>
            <h1>User zone</h1>
            <div>data: {userData.name} | {userData.description}</div>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserPage;