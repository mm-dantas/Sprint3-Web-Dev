import React from 'react';
import styles from './FormularioLogin.module.css';

const FormularioLogin = () => {
    return (
        <section className={styles.section}>
            <div className={styles.formulario}>
                <h1 className={styles.tituloForms}>Login</h1>
                <input className={styles.input} type="email" placeholder="Email" />
                <input className={styles.input} type="password" placeholder="Senha" />
                <button className={styles.botaoLogin}>
                    <h2 className={styles.botaoLoginTexto}>Login</h2>
                </button>
                <a className={styles.linkEsqueceuSenha} href="">Esqueceu sua senha?</a>
            </div>
        </section>
    )
}

export default FormularioLogin;
