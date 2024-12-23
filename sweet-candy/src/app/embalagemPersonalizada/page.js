import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function embalagemPersonalizada() {
    return (
        <div>
            <Header />
            <div className={styles.telaFundo}>
            <h1 className={styles.h1}>Embalagem personalizada</h1>
            

            <div className={styles.mainContainer}>
                <div className={styles.selectContainer}>
                    <label className={styles.selectLabel} htmlFor="selectTamanho">Formatos</label>
                    <div id="selectTamanhoDiv" className={styles.selectBody}>
                        <select className={styles.select} name="embalagem" id="selectEmbalagem">
                            <option value="">Selecione uma opção</option>
                            <option value="caixinha">Caixinha</option>
                            <option value="piramide">Pirâmide</option>
                            <option value="coracao">Coração</option>
                        </select>
                        <div className={styles.selectIcon}>
                            <Image className={styles.img} src="/images/iconseta.png" alt="icon seta" width={18} height={18} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.button} type="submit">
                    <Link className={styles.link} href="/">Voltar</Link>
                </button>
            </div>

        </div>
        <Footer />
        </div>
    );
}