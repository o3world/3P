import React, {Component} from 'react';
import EditorBio from './EditorBio';
import QueryHoc from "../Common/Query";
import * as EditorQueries from "./EditorsQueries";
import EditorStoriesWrapper from "./EditorStoriesWrapper"

class SingleEditorPage extends Component {

    render () {
        const editorId = {id: this.props.match.params.id};
        return (
            <section>
                <QueryHoc query={EditorQueries.SingleEditorDetails} variables={editorId} componentName={EditorBio}/>
                {/* @TODO Add story masonry wrapper and tiles. */}
                <QueryHoc query={EditorQueries.StoriesByEditor} variables={editorId} componentName={EditorStoriesWrapper}/>
            </section>
        )
    }

}


export default SingleEditorPage;