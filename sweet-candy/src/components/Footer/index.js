import Link from "next/link";
import styles from './Footer.module.css';
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.todasAsInformacoesFooter}>
                <div className={styles.cardFooter}>
                    <p className={styles.informacaoFooter}>Entre em contato</p>

                    <div className={styles.displayInformacao}>
                        <Image className={styles.iconesFooter} src="/images/telefone.jpeg" alt="Telefone:" width={25} height={25} />
                        <p className={styles.miniInformacao}>+ 55 (99) 9999-9999</p>
                    </div>

                    <div className={styles.displayInformacao}>
                        <Image className={styles.iconesFooter} src="/images/gmail.jpeg" alt="E-mail: " width={25} height={25} />
                        <p className={styles.miniInformacao}>sweetcandycupcakeria@gmail.com</p>
                    </div>
                </div>

                <div className={styles.cardFooter}>
                    <p className={styles.informacaoFooter}>Nossas redes sociais</p>
                    <div className={styles.displayInformacao}>
                        <Image className={styles.iconesFooter} src="/images/insta.jpeg" alt="Instagram: " width={25} height={25} />
                        <Link className={styles.instagram} href="https://www.instagram.com/cupcakeriacandy/" target="_blank">@cupcakeriacandy</Link>
                    </div>
                    <div className={styles.displayInformacao}>
                        <Image className={styles.iconesFooter} src="/images/facebook.jpg" alt="Facebook: " width={25} height={25} />
                        <span className={styles.facebook}>@cupcakeriacandy</span>
                    </div>
                </div>
            </div>

            <p className={styles.direitosfooter}>©2024 Sweet Candy Todos os direitos reservados.</p>
        </div>
    );
}