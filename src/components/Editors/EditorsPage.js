import React from 'react';

import EditorCardsWrapper from './EditorCardsWrapper';

const EditorsPage = () => (
  <div>
    <div>
      <img src={''} alt={''}/>
      <h1>Editors</h1>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem perpetuam quis potest praestare sapienti? Quo tandem modo? Et quidem, inquit, vehementer errat; Duo Reges: constructio interrete. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tu quidem reddes; Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Indicant pueri, in quibus ut in speculis natura cernitur. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. His similes sunt omnes, qui virtuti student levantur vitiis, levantur erroribus, nisi forte censes Ti. Non quam nostram quidem, inquit Pomponius iocans;</p>
    <EditorCardsWrapper/>
    <div> {/* @TODO This is a static div, for now */}
      <h2>Contributors</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Hoc est non modo cor non habere, sed ne palatum quidem. At modo dixeras nihil in istis rebus esse, quod interesset. Commoda autem et incommoda in eo genere sunt, quae praeposita et reiecta diximus; Quamvis enim depravatae non sint, pravae tamen esse possunt. Sed quanta sit alias, nunc tantum possitne esse tanta. Duo Reges: constructio interrete. Ita graviter et severe voluptatem secrevit a bono.</p>
      <div>
        <div>Contributor1</div>
        <div>Contributor2</div>
        <div>Contributor3</div>
        <div>Contributor4</div>
      </div>
    </div>
  </div>
);

export default EditorsPage;