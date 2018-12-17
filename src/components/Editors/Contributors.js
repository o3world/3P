import React from 'react';
import _ from 'lodash';


class Contributors extends React.Component {
    render() {
        let data = this.props.data.userQuery.entities
        let chunk = data.length / 3;
        let arr = _.chunk(data, chunk);
        let contributors;

        contributors = arr.map(list => {
            return (
                <div>
                    <ul>
                        {
                            list.map((obj, index) => {
                                return (
                                    <li key={index}>
                                        <h5>{obj.name}</h5>
                                        <span></span> {/* @TODO This is a static span, for now */}
                                        {/* Why we need roles here ? Instead we can use users Designation */}
                                    </li>
                                )

                            })
                        }
                    </ul>
                </div>
            )
        })

        return (
            <div>
                <h2>Contributors</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Hoc est non modo cor non habere, sed ne palatum quidem. At modo dixeras nihil in istis rebus esse, quod interesset. Commoda autem et incommoda in eo genere sunt, quae praeposita et reiecta diximus; Quamvis enim depravatae non sint, pravae tamen esse possunt. Sed quanta sit alias, nunc tantum possitne esse tanta. Duo Reges: constructio interrete. Ita graviter et severe voluptatem secrevit a bono.</p>
                  {/* @TODO This is a dummy text, for now */}
                {contributors}
            </div>
        )
    }
}

export default Contributors;