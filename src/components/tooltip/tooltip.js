import styles from './tooltip.module.css';
import { useEffect } from 'react';

const Tooltip = ({isTooltipVisible, description, setVisible}) => {
    function handleCloseTooltip() {
        setVisible(false)
    };

    return (
        <div className={ `${styles.tooltip} ${isTooltipVisible && styles.tooltipVisible}` }>
            <button className={ styles.button } onClick={ handleCloseTooltip } ></button>
            <p className={ styles.description }>
                { description ? description : 'Нет описания' }
            </p>
        </div>
    )
};

export default Tooltip;