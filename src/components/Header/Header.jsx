import { useNavigate } from "react-router-dom"
import { routes } from "../../App"
import { useSelector } from "react-redux"
import LogoutButton from "../LogoutButton/LogoutButton"
import styles from './Header.module.scss'

const Header = () => {
    const navigate = useNavigate()

    const { basketList, sum } = useSelector(state => state.basket)
    
    return (
        <div className={styles.header}>
            <p className={styles.header__qty}>
              <span>{basketList.length}</span>&nbsp;товара
              на сумму <span>{sum}</span>&nbsp;&#8381;
            </p>
            <button className={styles.header__icon}
              onClick={() => navigate(routes.cart)}>
              <img src="/images/1.svg" alt="Корзина"></img>
            </button>
            <LogoutButton/>
            </div>
    )
}

export default Header;