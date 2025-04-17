'use client';
import { useState } from "react";
import Image from "next/image";
import Headerpedido from "@/components/HeaderPedido";
import Footer from '@/components/Footer';
import styles from './page.module.css';
import Link from 'next/link';

export default function Pedido() {
  const [mensagem, setMensagem] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [pedido, setPedido] = useState({
    tamanho: "",
    recheio: "",
    cobertura: "",
    corCobertura: ""
  });

  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  const precoBase = 0.00;
  const precoTotal = (quantidade * precoBase).toFixed(2);

  const labels = {
    tamanho: "Tamanho",
    recheio: "Recheio",
    cobertura: "Cobertura",
    corCobertura: "Cor da Cobertura"
  };

  const resetSelect = () => {
    document.querySelectorAll("select").forEach(select => {
      select.value = "";
    });
    setPedido({ tamanho: "", recheio: "", cobertura: "", corCobertura: "" });
    setQuantidade(1);
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setPedido(prev => ({ ...prev, [name]: value }));
  };

  const adicionarAoCarrinho = (event) => {
    event.preventDefault();
    if (Object.values(pedido).some(value => value === "")) {
      alert("Não foi possível adicionar ao carrinho. Selecione todas as opções antes de continuar.");
      return;
    }
    setMensagem("Sua compra foi adicionada ao carrinho!");
    alert("Sua compra foi adicionada ao carrinho!");
    resetSelect();
  };

  return (
    <div>
      <Headerpedido />

      <div className={styles.telaFundo}>
        <Image
          className={styles.carrinho}
          src='/images/carrinho.png'
          alt='Carrinho'
          width={32}
          height={32}
          onClick={() => setMostrarCarrinho(!mostrarCarrinho)}
        />

        {mostrarCarrinho && (
          <>
            <div className={styles.overlay} onClick={() => setMostrarCarrinho(false)}></div>
            <div className={styles.detalhesCarrinho}>
              <h2 className={styles.h2}>Carrinho</h2>
              <div className={styles.detalhesDoCupcake}>
                {[1, 2, 3, 4].map((id) => (
                  <div key={id} className={styles.detalhesCupcakeCarrinho}>
                    <p className={styles.pCarrinho}><strong className={styles.strong}>ID:</strong> 0{id}</p>
                    <p className={styles.pCarrinho}><strong className={styles.strong}>Ingredientes:</strong> pequeno, brigadeiro, chantilly, rosa</p>
                    <p className={styles.pCarrinho}><strong className={styles.strong}>Quantidade:</strong> 02</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <h1 className={styles.h1}>Faça seu pedido</h1>
        <p className={styles.pIntroducao}>Monte seu cupcake fazendo uma escolha perfeita!</p>

        <div className={styles.mainContainer}>
          {Object.keys(pedido).map((item, index) => (
            <div key={index} className={styles.selectContainer}>
              <label className={styles.selectLabel} htmlFor={`select${item}`}>{labels[item]}</label>
              <div className={styles.selectBody}>
                <select className={styles.select} name={item} id={`select${item}`} onChange={handleSelectChange}>
                  <option value="">Escolha uma opção</option>
                  {item === "tamanho" && ["P (pequeno) R$5,00", "M (médio) R$8,00", "G (grande) R$10,00"].map(opt =>
                    <option key={opt} value={opt}>{opt}</option>)}
                  {item === "recheio" && ["Brigadeiro R$2,00", "Doce de leite R$2,00", "Leite Ninho R$3,00", "Nutella R$4,00", "Nenhum R$0,00"].map(opt =>
                    <option key={opt} value={opt}>{opt}</option>)}
                  {item === "cobertura" && ["Glacê R$2,00", "Chantilly R$3,00", "Merengue R$3,00"].map(opt =>
                    <option key={opt} value={opt}>{opt}</option>)}
                  {item === "corCobertura" && ["Roxo R$1,00", "Lilás R$1,00", "Rosa R$1,00", "Azul R$1,00", "Azul Claro R$1,00", "Verde Menta R$1,00", "Branco R$0,00"].map(opt =>
                    <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <div className={styles.selectIcon}>
                  <Image className={styles.img} src="/images/iconseta.png" alt="icon seta" width={18} height={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.resumoContainer}>
          <div className={styles.resumoPedido}>
            <h2 className={styles.resumoTitulo}>Resumo do Pedido</h2>
            {Object.keys(pedido).map((item, index) => (
              <p key={index}><strong>{labels[item]}:</strong> {pedido[item] || ""}</p>
            ))}
          </div>
          <div className={styles.quantidadeContainer}>
            <label className={styles.quantidadeLabel} htmlFor="quantidade">Quantidade:</label>
            <input
              type="number"
              id="quantidade"
              min="1"
              max="300"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              className={styles.quantidadeInput}
            />
            <p className={styles.precoTotal}>Total: R$ {precoTotal}</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.button} type="button" onClick={resetSelect}>
            <Link className={styles.link} href="/">Cancelar opções</Link>
          </button>
          <button className={styles.button} type="submit">
            <Link className={styles.link} href="/checkout">Finalizar pedido</Link>
          </button>
          <button className={styles.button} type="button" onClick={adicionarAoCarrinho}>
            <Link className={styles.link} href="/">Adicionar ao carrinho</Link>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}