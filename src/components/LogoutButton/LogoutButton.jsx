import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setIsAuth } from "../../redux/user/userSlice"
import { routes } from "../../App"
import styles from './LogoutButton.module.scss'

const LogoutButton = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOut = () => {
        dispatch(setIsAuth(false))
        localStorage.removeItem('login')
        localStorage.removeItem('password')
        navigate(routes.login)
      }
    return (
        <button className={styles.logout__button} type="submit" onClick={logOut}>Выйти</button>
    )
}

export default LogoutButton;