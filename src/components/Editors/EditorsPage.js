import React from 'react';
import EditorCardsWrapper from './EditorCardsWrapper';

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
        <p className={styles.editorsDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem perpetuam quis potest praestare sapienti? Quo tandem modo? Et quidem, inquit, vehementer errat; Duo Reges: constructio interrete. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tu quidem reddes; Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Indicant pueri, in quibus ut in speculis natura cernitur. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. His similes sunt omnes, qui virtuti student levantur vitiis, levantur erroribus, nisi forte censes Ti. Non quam nostram quidem, inquit Pomponius iocans;</p>
        <EditorCardsWrapper/>
      </section>
    )
  }
}

export default EditorsPage;