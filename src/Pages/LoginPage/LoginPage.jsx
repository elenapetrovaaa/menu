import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../../redux/user/userSlice';
import { routes } from '../../App';
import { loginUser } from "../../constants/usersDB";
import styles from'./LoginPage.module.scss';

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = loginUser({
            login,
            password
        })
    
        if (!user) {
            dispatch(setIsAuth(false))
            alert('Пользователь не найден. Зарегистрируйтесь.')
            return
        }
        if (user) {
            dispatch(setIsAuth(true))
            localStorage.setItem('login', login)
            localStorage.setItem('password', password)
            navigate(routes.menu)
            return
        }
    }

    return (
        <div className={styles.login}>

            <form className={styles.login__form} onSubmit={handleSubmit}>
                <div className={styles.login__link}>
                    <Link to={routes.register} className={styles.login__txt}>Зарегистрироваться</Link>
                </div>
                <h2 className={styles.login__title}>Вход</h2>


                <input className={styles.login__input} type="text" value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Логин" required={true} />

                <input type="password" className={styles.login__input} value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль" required={true} />

                <div className={styles.login__checkbox}>
                    <input className={styles.login__chbox} type="checkbox" id="checkbox" required />
                    <label className={styles.login__label} for="checkbox"
                    >Я согласен получать обновления на почту</label>
                </div>

                <button className={styles.login__button} type="submit">Войти</button>
            </form>
        </div>
    )
}

export default LoginPage;