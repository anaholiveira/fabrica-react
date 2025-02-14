import styles from "./page.module.css";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Area() {
    return (
        <div>
            <Header />
            <div className={styles.telaFundo}>

                <h1 className={styles.h1}>Área Administrativa</h1>
            
                <div className={styles.opc}>
                    <button className={styles.buttons}>
                        <Link className={styles.links} href="/cadastrarFuncionario">Cadastrar funcionário</Link>
                    </button>
                    
                    <button className={styles.buttons}>
                        <Link className={styles.links} href="/realizarPagamentos">Realizar Pagamento do funcionário</Link>
                    </button>
                            
                    <button className={styles.buttons}>
                        <Link className={styles.links} href="/cadastrarTamanhos">Cadastrar Tamanho</Link>
                    </button>
    
                    <button className={styles.buttons}>
                        <Link className={styles.links} href="/cadastrarIngredientes">Cadastrar Ingredientes</Link>
                    </button>
                            
                    <button className={styles.buttons}>
                        <Link className={styles.links} href="/relatorio">Emitir relatório</Link>
                    </button>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}