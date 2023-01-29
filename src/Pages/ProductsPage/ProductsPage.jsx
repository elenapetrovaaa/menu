import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { routes } from "../../App";
import { getAllGoods } from "../../constants/products";
import Card from '../../components/Card/Card';
import Header from "../../components/Header/Header";
import { loginUser } from "../../constants/usersDB";
import { setIsAuth } from "../../redux/user/userSlice";
import styles from './ProductsPage.module.scss';

function ProductsPage() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isAuth } = useSelector(state => state.user)
  const [cards, setCards] = useState([])


  useEffect(() => {
    const login = localStorage.getItem('login')
    const password = localStorage.getItem('password')
    if (login && password) {
        const user = loginUser({login: login, password})
        if (user) {
            dispatch(setIsAuth(true))
            const cardsDatabase = getAllGoods()
            setCards(cardsDatabase)
        }
    }
}, [])

  if (isAuth === false) {
    return (
      <div className={styles.start}>
        <div className={styles.startpage}>
          <h2 className={styles.startpage__title}>Меню не доступно</h2>
        <p className={styles.startpage__description}>Зарегистрируйтесь или авторизуйтесь</p>
          <button className={styles.startpage__button} onClick={() => navigate(routes.register)}>Регистрация</button>
          <button className={styles.startpage__button} onClick={() => navigate(routes.login)}>Вход</button>
        </div>
      </div>
    )
  }

  return (

    <main className={styles.menu}>
      <div className={styles.container}>
        <header className={styles.menu__header}>
          <div>
            <h1 className={styles.menu__title}>наша продукция</h1>
          </div>
          <Header />
        </header>

        <ul className={styles.menu__cards}>
          {cards.map(card => {
            return (
              <li key={card.id}>
                <Card
                  card={card}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  );
}

export default ProductsPage;
