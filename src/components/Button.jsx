
import styles from './Button.module.css'
import logo from './icon-dice.svg'

const Button = ({onClick}) =>{
    
    return(
        <button onClick={onClick} className={styles.button}>
            <img src={logo} alt="logo"/>
        </button>
    )
}

export default Button