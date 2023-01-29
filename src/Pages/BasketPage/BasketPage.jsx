import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../../redux/basket/basketSlice'
import { useNavigate } from 'react-router-dom'
import LogoutButton from "../../components/LogoutButton/LogoutButton"
import ArrowButton from "../../components/ArrowButton/ArrowButton"
import styles from './BasketPage.module.scss'

function BasketPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { basketList, sum } = useSelector(state => state.basket)

    const handleClick = (card) => {
        dispatch(removeProduct(card))
    }

    const handleCard = (id) => {
        navigate('/goods' + '/' + id)
    }

    return (
        <div className={styles.basket}>
            <div className={styles.container}>

                <header className={styles.basket__header}>
                    <div className={styles.basket__left}>
                        <ArrowButton />
                        <h1>Корзина с выбранными товарами</h1>
                    </div>
                    <LogoutButton />
                </header>

                <main className={styles.basket__main}>
                    {basketList.length > 0 ?
                        <ul className={styles.basket__list}>
                            {basketList.map((x, index) =>
                                <li key={index} className={styles.basket__item}>
                                    <div className={styles.basket__description} onClick={() => handleCard(x.id)}>
                                        <img src={x.url} />
                                        <h3>{x.title}</h3>
                                    </div>

                                    <div className={styles.basket__action}>
                                        <span className={styles.basket__price}>{x.price}&nbsp;&#8381;</span>
                                        <button className={styles.basket__btn} onClick={() =>
                                            handleClick(x)}>x</button>
                                    </div>
                                </li>
                            )
                            }
                        </ul>
                        : <h5 className={styles.basket__note}>Корзина пуста</h5>
                    }
                </main>

                <footer className={styles.basket__footer}>
                    <h2 className={styles.basket__order}>Заказ на сумму: <span className={styles.basket__total}>{sum}&nbsp;&#8381;</span></h2>
                    <button className={styles.basket__button}>Оформить заказ</button>
                </footer>

            </div>
        </div>
    )
}

export default BasketPage;