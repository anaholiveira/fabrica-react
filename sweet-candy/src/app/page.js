'use client';
import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Headerpedido from "../components/HeaderPedido";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Pedido() {

  useEffect(() => {
    const redirecionarPagina = () => {
      const select = document.getElementById("selectEmbalagem");
      const opcaoSelecionada = select.value;
  
      if (opcaoSelecionada && opcaoSelecionada !== "padrao") {
        window.location.href = opcaoSelecionada;
      }
    };
  
    const selectEmbalagem = document.getElementById("selectEmbalagem");
    if (selectEmbalagem) {
      selectEmbalagem.addEventListener("change", redirecionarPagina);
    }
  
    return () => {
      if (selectEmbalagem) {
        selectEmbalagem.removeEventListener("change", redirecionarPagina);
      }
    };
  }, []);

  const resetSelect = () => {
    document.querySelectorAll("select").forEach(select => {
      select.value = "";
    });
  };

  return (
    <div>
      <Headerpedido />
      <div className={styles.telaFundo}>
        <h1 className={styles.h1}>Faça seu pedido</h1>
        
        <p className={styles.pIntroducao}>Monte o cupcake do seu jeito e faça uma escolha perfeita! </p>

          <div className={styles.mainContainer}>
            <div className={styles.selectContainer}>
              <label className={styles.selectLabel} htmlFor="selectTamanho">Tamanho</label>
                <div id="selectTamanhoDiv" className={styles.selectBody}>
                  <select className={styles.select} name="tamanho" id="selectTamanho">
                    <option value="">Escolha uma opção</option>
                    <option value="p">P (pequeno)</option>
                    <option value="m">M (médio)</option>
                    <option value="g">G (grande)</option>
                  </select>
                  <div className={styles.selectIcon}>
                    <Image className={styles.img} src="/images/iconseta.png" alt="icon seta" width={18} height={18} />
                  </div>
                </div>
            </div>
        
          <div className={styles.selectContainer}>
            <label className={styles.selectLabel} htmlFor="selectRecheio">Recheio</label>
              <div id="selectRecheioDiv" className={styles.selectBody}>
                <select className={styles.select} name="recheio" id="selectRecheio">
                  <option value="">Escolha uma opção</option>
                  <option value="brigadeiro">Brigadeiro</option>
                  <option value="doce de leite">Doce de leite</option>
                  <option value="leite ninho">Leite Ninho</option>
                  <option value="nutella">Nutella</option>
                  <option value="beijinho">Beijinho</option>
                  <option value="geleia de morango">Geleia de morango</option>
                  <option value="nenhum">Nenhum</option>
                </select>
                <div className={styles.selectIcon}>
                  <Image className={styles.img} src="/images/iconseta.png" alt="icon seta" width={18} height={18} />
                </div>
              </div>
          </div>
        
          <div className={styles.selectContainer}>
            <label className={styles.selectLabel} htmlFor="selectCobertura">Cobertura</label>
              <div id="selectCoberturaDiv" className={styles.selectBody}>
                <select className={styles.select} name="cobertura" id="selectCobertura">
                  <option value="">Escolha uma opção</option>
                  <option value="glacê">Glacê</option>
                  <option value="chantilly">Chantilly</option>
                  <option value="merengue">Merengue</option>
                  <option value="ganache">Ganache</option>
                  <option value="cobertura de brigadeiro">Brigadeiro</option>
                  <option value="nenhum">Nenhum</option>
                </select>
                <div className={styles.selectIcon}>
                  <Image className={styles.img} src="/images/iconseta.png" alt="icon seta" width={18} height={18} />
                </div>
              </div>
          </div>
        
          <div className={styles.selectContainer}>
            <label className={styles.selectLabel} htmlFor="selectCorCobertura">Cor da Cobertura</label>
              <div id="selectCorCoberturaDiv" className={styles.selectBody}>
                <select className={styles.select} name="cor cobertura" id="selectCorCobertura">
                  <option value="">Escolha uma opção</option>
                  <option value="roxo">Roxo</option>
                  <option value="lilás">Lilás</option>
                  <option value="rosa">Rosa</option>
                  <option value="azul">Azul</option>
                  <option value="azul claro">Azul Claro</option>
                  <option value="branco">Branco</option>
                  <option value="verde menta">Verde Menta</option>
                  <option value="nenhum">Nenhum</option>
                </select>
                <div className={styles.selectIcon}>
                  <Image className={styles.img} src="/images/iconseta.png" alt="icon seta" width={18} height={18} />
                </div>
              </div>
          </div>
        
          <div className={styles.selectContainer}>
            <label className={styles.selectLabel} htmlFor="selectEmbalagem">Embalagem</label>
              <div id="selectEmbalagemDiv" className={styles.selectBody}>
                <select className={styles.select} name="embalagem" id="selectEmbalagem">
                  <option value="">Escolha uma opção</option>
                  <option value="padrao">Padrão</option>
                  <option value="/embalagemPersonalizada">Personalizada</option>
                  <option value="/eventos">Para eventos</option>
                </select>
                <div className={styles.selectIcon}>
                  <Image className={styles.img} src="/images/iconseta.png" alt="icon seta" width={18} height={18} />
                </div>
              </div>
          </div>
        
          </div>

          <div className={styles.buttons}>
            <button className={styles.button} type="button" onClick={resetSelect}>
              <Link className={styles.link} href="/">Cancelar</Link>
            </button>
            <button className={styles.button} type="submit">
              <Link className={styles.link} href="/checkout">Finalizar pedido</Link>
            </button>
            <button className={styles.button} type="button" onClick={resetSelect}>
              <Link className={styles.link} href="/">Carrinho</Link>
            </button>
          </div>

      </div>

      <Footer />
    </div>
  );
}