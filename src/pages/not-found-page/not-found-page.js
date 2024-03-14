import styles from './not-found-page.module.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <p>
                Такой страницы не существует
            </p>
            <Link to='/'>
                На главную
            </Link>
        </>
    )
};

export default NotFoundPage;