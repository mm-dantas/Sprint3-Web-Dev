import NomeTitulo from '../../assets/nome.png'
import Styles from './Header.module.css';


const Logo = () => {
    return (
        
            <div className={Styles.titulo}>
                <img src={NomeTitulo} alt="Logo do site" />
            </div>

        
    )
}

export default Logo