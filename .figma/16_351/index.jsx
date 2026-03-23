import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.perfilOportunidadesS}>
      <div className={styles.autoWrapper2}>
        <img src="../image/mn35dzhh-iw5t8tq.png" className={styles.image1} />
        <div className={styles.group16}>
          <div className={styles.rectangle17}>
            <img
              src="../image/mn35dzhi-wrwtfcg.png"
              className={styles.editPencil}
            />
            <p className={styles.editarPerfil}>Editar perfil</p>
          </div>
          <div className={styles.autoWrapper}>
            <img src="../image/mn35dzhi-9iyruzp.png" className={styles.profile} />
            <p className={styles.nomeDoEstudante}>Nome do Estudante</p>
          </div>
        </div>
      </div>
      <div className={styles.rectangle15}>
        <p className={styles.oportunidadesSalvas}>Oportunidades Salvas</p>
      </div>
      <div className={styles.frame1}>
        <div className={styles.group2}>
          <img src="../image/mn35dzhh-notvonk.png" className={styles.image2} />
          <div className={styles.autoWrapper5}>
            <div className={styles.autoWrapper3}>
              <p className={styles.a22082026}>22/08/2026</p>
              <p className={styles.workshop}>Workshop</p>
            </div>
            <div className={styles.autoWrapper4}>
              <p className={styles.introduOAoPython}>Introdução ao Python</p>
              <p className={styles.aprendaLGicaDeProgra}>
                Aprenda lógica de programação do zero com a linguagem mais usada.
              </p>
              <img
                src="../image/mn35dzhi-98yl7nr.png"
                className={styles.bookmark}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.barraDeNavegaO}>
        <div className={styles.home} />
        <div className={styles.home3}>
          <p className={styles.home2} />
        </div>
        <div className={styles.home} />
        <div className={styles.home} />
        <div className={styles.home3}>
          <p className={styles.home2} />
        </div>
        <div className={styles.group8}>
          <img src="../image/mn35dzhh-wxaxuqf.png" className={styles.person} />
          <div className={styles.group7}>
            <div className={styles.autoWrapper6}>
              <img
                src="../image/mn35dzhh-yqo6u4e.png"
                className={styles.homePage}
              />
              <p className={styles.home4}>Home</p>
            </div>
            <div className={styles.autoWrapper7}>
              <img
                src="../image/mn35dzhh-wgxg2o6.png"
                className={styles.googleWebSearch}
              />
              <p className={styles.buscar}>Buscar</p>
            </div>
            <div className={styles.autoWrapper8}>
              <img
                src="../image/mn35dzhh-14ro77t.png"
                className={styles.homePage}
              />
              <p className={styles.salvos}>Salvos</p>
            </div>
            <p className={styles.perfil}>Perfil</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
