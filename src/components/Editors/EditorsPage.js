import React from 'react';
import EditorCardsWrapper from './EditorCardsWrapper';
import Contributors from './Contributors';
import * as EditorQueries from "./EditorsQueries";
import QueryHoc from "../Common/Query";

class EditorsPage extends React.Component {

  clickHandler = (e, id, title = "") => {
    console.log('click-------->',id,title);
    this.props.history.push({ pathname: "/editors/" + id + "/" + title, state: { id: id } });
  };


  render() {
    return (
      <div>
        <div>
          <img src={''} alt={''} />
          <h1>Editors</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Istam voluptatem perpetuam quis potest praestare sapienti? Quo tandem modo? Et quidem, inquit, vehementer errat; Duo Reges: constructio interrete. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tu quidem reddes; Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Indicant pueri, in quibus ut in speculis natura cernitur. Expressa vero in iis aetatibus, quae iam confirmatae sunt. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. His similes sunt omnes, qui virtuti student levantur vitiis, levantur erroribus, nisi forte censes Ti. Non quam nostram quidem, inquit Pomponius iocans;</p>
        {/* @TODO This is dummy text, for now */}
        <QueryHoc query={EditorQueries.Contributors} variables={{}} componentName={EditorCardsWrapper} additional={{ "click": (e, id, title) => this.clickHandler(e, id, title) }} />
        <div>
          <QueryHoc query={EditorQueries.Contributors} variables={{}} componentName={Contributors} additional={{ "click": (e, id, title) => this.clickHandler(e, id, title)}} />
        </div>
      </div>
    )
  }
}

export default EditorsPage;