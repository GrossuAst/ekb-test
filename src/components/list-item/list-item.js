import styles from './list-item.module.css';

import { useState, useEffect } from 'react';

import Tooltip from '../tooltip/tooltip';

import QuestionMark from '../../images/question-mark.png';
import PenIcon from '../../images/pen.png';
import TrashIcon from '../../images/trash.png';

const ListItem = ({item, index, packsNumber, packageType, createdAt, isArchived, description}) => {
    const [isTooltipVisible, setVisible] = useState(false);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}.${month}.${year}`;
    };

    function showTooltip() {
        setVisible(true);
    };

    return (
        <tr className={styles.tr}>
            <td className={styles.td}>{ item ? index : '№' }</td>
            <td className={styles.td}>{ item ? packsNumber : 'Кол-во пачек' }</td>
            <td className={styles.td}>{ item ? packageType : 'Тип упаковки' }</td>
            <td className={styles.td}>{ item ? formatDate(createdAt) : 'Дата создания' }</td>
            <td className={styles.td}>{ !item ? 'Статус' : item && isArchived ? 'Архив' : 'Активно' }</td>
            <td className={`${styles.td} ${styles.tooltipCell}`}>
                {
                    item && 
                    <>
                        <Tooltip 
                            isTooltipVisible={ isTooltipVisible }
                            description={ description }
                            setVisible={ setVisible }
                        />
                        <img 
                            src={ QuestionMark } alt='Вопрос' className={ styles.icon }
                            onClick={ showTooltip }
                        />
                    </>
                }
            </td>
            <td className={styles.td}>
                {
                    item && 
                    <>
                        <img src={ PenIcon } alt='Карандаш' className={ styles.icon } /> 
                        <img src={ TrashIcon } alt='Урна' className={ styles.icon } />
                    </>
                }
            </td>
        </tr>
    )
};

export default ListItem;