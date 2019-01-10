import React from 'react';
import EditorCardsWrapper from './EditorCardsWrapper';
import Contributors from './Contributors';

import styles from './EditorsPage.module.scss';

import HeroImage from '../../assets/images/3pEditorsPageImage.jpg';

class EditorsPage extends React.Component {

  render() {
    return (
      <section className={styles.wrapper}>
        <div className={styles.hero}>
          <img src={HeroImage} alt={'Editors Page Hero'} />
          <h1 className={styles.pageTitle}>Editors</h1>
        </div>
        <div className={styles.editorsDescription}>
          <p>For over a decade, TriplePundit has reported on the intersection of people, planet and profit, believing business can be a force for good. We make the business case for corporate responsibility and sustainability, and the private sector's leadership to secure social justice and fair economic opportunities for all. The bottom line: Triple Pundit reports on the business of doing better.</p>
          <p>Triple Pundit provides conceptual context for a readership of CSR and sustainability professionals, C-suite executives, the corporate workforce, journalists, academics, activists, NGOs, and concerned citizens. A staff of expert writers contributes analysis, insights, and opinion on issues at the top of today&#39;s business agenda. Those issues include climate change, diversity and inclusion, socially responsible investment, employee engagement, corporate governance, and responsible supply chain management.</p></div>
        <EditorCardsWrapper/>
        <Contributors/>
      </section>
    )
  }
}

export default EditorsPage;