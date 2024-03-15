import styles from './button.module.css';
import { Link } from 'react-router-dom';

const Button = ({children, path}) => {
    
    return (
        <Link to={path} className={ styles.button }>
            {children}
        </Link>
    )
};

export default Button;