import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Страница не найдена</h1>
            <Link to="/">Вернитесь на главную</Link>
        </div>
    );
};

export default NotFoundPage;