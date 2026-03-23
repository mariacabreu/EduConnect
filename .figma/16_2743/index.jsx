import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
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
  );
}

export default Component;
