import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.perfilInscriEs}>
      <div className={styles.autoWrapper2}>
        <img src="../image/mn35dzgy-obf1smb.png" className={styles.image1} />
        <div className={styles.group16}>
          <div className={styles.rectangle17}>
            <img
              src="../image/mn35dzgy-o59wd35.png"
              className={styles.editPencil}
            />
            <p className={styles.editarPerfil}>Editar perfil</p>
          </div>
          <div className={styles.autoWrapper}>
            <img src="../image/mn35dzgy-ykejvc5.png" className={styles.profile} />
            <p className={styles.nomeDoEstudante}>Nome do Estudante</p>
          </div>
        </div>
      </div>
      <div className={styles.rectangle15}>
        <p className={styles.inscriEs}>Inscrições</p>
      </div>
      <div className={styles.frame2}>
        <div className={styles.rectangle16}>
          <p className={styles.oportunidadesVisuali}>
            Oportunidades&nbsp;&nbsp;visualizadas: <br />
            <br />
            10
          </p>
        </div>
        <p className={styles.oportunidadesInscrit}>
          Oportunidades Inscritas: <br />
          <br />1
        </p>
      </div>
      <div className={styles.frame1}>
        <div className={styles.group2}>
          <p className={styles.introduOAoPython}>Introdução ao Python</p>
          <div className={styles.autoWrapper5}>
            <img src="../image/mn35dzgy-xo5939i.png" className={styles.image2} />
            <div className={styles.autoWrapper4}>
              <div className={styles.autoWrapper3}>
                <p className={styles.a22082026}>22/08/2026</p>
                <p className={styles.workshop}>Workshop</p>
              </div>
              <p className={styles.aprendaLGicaDeProgra}>
                Aprenda lógica de programação do zero com a linguagem mais usada.
              </p>
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
          <img src="../image/mn35dzgy-2n4205u.png" className={styles.person} />
          <div className={styles.group7}>
            <div className={styles.autoWrapper6}>
              <img
                src="../image/mn35dzgy-kh9c8o0.png"
                className={styles.homePage}
              />
              <p className={styles.home4}>Home</p>
            </div>
            <div className={styles.autoWrapper7}>
              <img
                src="../image/mn35dzgy-do87pk0.png"
                className={styles.googleWebSearch}
              />
              <p className={styles.buscar}>Buscar</p>
            </div>
            <div className={styles.autoWrapper8}>
              <img
                src="../image/mn35dzgy-9iw1p6k.png"
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
