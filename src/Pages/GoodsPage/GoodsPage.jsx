import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addProduct } from '../../redux/basket/basketSlice';
import { useDispatch } from 'react-redux';
import { getGood } from "../../constants/products";
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/Header/Header';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import styles from './GoodsPage.module.scss'

const GoodsPage = () => {
    const dispatch = useDispatch()

    const { id } = useParams()
    const [good, setGood] = useState()

    useEffect(() => {
        if (id) {
            const goodById = getGood(id)
            setGood(goodById)
        }
    }, [id])

    if (!good) {
        return (
            <div>Loading...</div>
        )
    }

    const handleClick = () => {
        const goodWithUniqId = { ...good, idx: uuidv4() }
        dispatch(addProduct(goodWithUniqId))
    }

    return (
        <div className={styles.goods}>
            <div className={styles.container}>
                <header className={styles.goods__header}>
                    <ArrowButton />
                    <Header />
                </header>

                <ul className={styles.goods__main}>
                    <img src={good.url} alt="" />
                    <div className={styles.goods__card}>
                        <h2 className={styles.goods__title}>{good.title}</h2>
                        <p className={styles.goods__decription}>{good.description}</p>

                        <div className={styles.goods__footer}>
                            <div className={styles.goods__order}>
                                <span className={styles.goods__price}>{good.price}&nbsp;&#8381;</span>
                                <span className={styles.goods__weight}>&nbsp;/{good.weight ? `${good.weight} гр.` : `${good.quantity} шт.`} </span>
                            </div>
                            <button className={styles.goods__btn} onClick={handleClick}>В корзину</button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default GoodsPage;