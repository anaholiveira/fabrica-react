import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            
            <Image className={styles.logo} src='/images/logosweetcandy.png' alt="Logo Sweet Candy" width={95} height={50}/>

            <p className={styles.cupcakeria}>Cupcakeria</p>

        </header>
    )
}