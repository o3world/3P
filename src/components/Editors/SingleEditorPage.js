import React, {Component} from 'react';
import EditorBio from './EditorBio';
import QueryHoc from "../Common/Query";
import * as EditorQueries from "./EditorsQueries";
import EditorStoriesWrapper from "./EditorStoriesWrapper"

class SingleEditorPage extends Component {

    clickHandler = (e, id, title = "") => {
        this.props.history.push({ pathname: "/story/" + id + "/" + title, state: { id: id } });
    };

    render () {
        const editorId = {id: this.props.match.params.id};
        return (
            <div>
                <QueryHoc query={EditorQueries.SingleEditorDetails} variables={editorId} componentName={EditorBio}/>
                {/* @TODO Add story masonry wrapper and tiles. */}
                <QueryHoc query={EditorQueries.StoriesByEditor} variables={editorId}
                          componentName={EditorStoriesWrapper} additional={{ "click": (e, id, title) => this.clickHandler(e, id, title) }}/>
            </div>
        )
    }

}


export default SingleEditorPage;