import { useNavigate } from 'react-router-dom';
import styles from './ArrowButton.module.scss'

const ArrowButton = () => {
    const navigate = useNavigate()

    return (
        <button className={styles.arrow__button}
            onClick={() => navigate(-1)}>
            <img src="/images/arrow-left.svg" alt="Назад"></img>
        </button>
    )
}

export default ArrowButton;