import styles from './home.module.css';
import Main from '../../components/main/main';
import Title from '../../components/title/title';
import Button from '../../components/button/button';
import ListItem from '../../components/list-item/list-item';
import { useEffect, useState } from 'react';
import { getData } from '../../utils/api';

const Home = () => {
    const [data, setData] = useState([]);

    function sortDataByDate(data) {
        const sortedData = [...data];
        sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return sortedData;
    };

    useEffect(() => {
        getData()
            .then((res) => {
                const sortedData = sortDataByDate(res);
                console.log(sortedData);
                setData(sortedData);
            })
            .catch((err) => {})
    }, []);

    return (
        <Main>
            <div className={ styles.buttonPace }>
                <Title />
                <Button path='/create-type' >Создать тип продукции</Button>
            </div>
            <table className={styles.table}>
                <tbody>
                    <ListItem />
                    {
                        data.map((item, index) => (
                            <ListItem 
                                key={ item.id }
                                item={ item }
                                index={ index + 1 }
                                packsNumber={ item.packsNumber }
                                packageType={ item.packageType }
                                createdAt={ item.createdAt }
                                isArchived={ item.isArchived }
                                description={ item.description }
                            />
                        ))
                    }
                </tbody>
            </table>
        </Main>
    )
}

export default Home;