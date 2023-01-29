import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/basket/basketSlice';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useMemo } from 'react';
import styles from './Card.module.scss';

const Card = ({ card }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { url, description, title, price, weight, quantity, id } = card

    const handleBtn = (e) => {
        e.stopPropagation()
        let item = {...card, idx: uuidv4()}
        dispatch(addProduct(item))
    }

    const handleCard = () => navigate(`/goods/${id}`)

    const aString = useMemo(() => weight ? `${weight} гр.` : `${quantity} шт.`,[quantity, weight])

    return (
        <div className={styles.card} onClick={handleCard}>
            <div className={styles.card__top}>
                <img src={url} alt="" />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.card__footer}>
                <div>
                    <span className={styles.card__price}>{price}&nbsp;&#8381;</span>
                    <span className={styles.card__weight}>/{aString}</span>
                </div>
                <button onClick={handleBtn} className={styles.card__btn}>&#43;</button>
            </div>

        </div>
    );
}

export default Card;