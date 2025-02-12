'use client';
import styles from "./page.module.css";
import Header from "../../components/Header";
import FooterContato from "../../components/FooterContato";

export default function Contato() {
    return (
        <div>
            <Header />
            <div className={styles.secaoContato}>

            <h1 className={styles.h1}>˙⋆ Fale conosco! ⋆˙</h1>

            <form className={styles.form}>
            
                <fieldset className={styles.fieldset}>

                    <legend className={styles.legend}> Entre em contato </legend>

                    <label className={styles.label} htmlFor="nome">♡ Nome:</label>
                    <input className={styles.input} type="text" id="idNome" name="nome" placeholder="Digite seu nome " required />
    
                    <label className={styles.label} htmlFor="email">♡ Email:</label>
                    <input className={styles.input} type="text" id="idEmail" name="email" placeholder="Digite seu email " required />

                    <label className={styles.label} htmlFor="telefone">♡ Telefone:</label>
                    <input className={styles.input} type="tel" id="idTelefone" name="telefone" placeholder="Digite seu telefone " required onInput={e => e.target.value = e.target.value.replace(/[^0-9]/g, '')} maxLength={15}/>
    
                    <label className={styles.label} htmlFor="mensagem">♡ Mensagem:</label>
                    <textarea className={styles.textarea} id="idMensagem" name="mensagem" placeholder="Digite uma mensagem aqui" required />
    
                    <button className={styles.button} type="submit">Entrar em contato</button>

                </fieldset>

            </form>

            </div>
            <FooterContato />
        </div>
    );
}