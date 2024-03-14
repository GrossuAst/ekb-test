import styles from './title.module.css';
import {useLocation} from 'react-router-dom'

const Title = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isEditTypePage = location.pathname === '/edit-type';
    const isCreateTypePage = location.pathname === '/create-type';

    return (
        <h1 className={styles.title}>
            { 
            isHomePage ? 'Список выпускаемой продукции' : 
            isEditTypePage ? 'Редактирование типа продукции' : 
            isCreateTypePage ? 'Создание типа продукции' : 
            'Такой страницы нет'
            }
        </h1>
    )
};

export default Title;