import React from 'react';
import EditorBio from './EditorBio';
import QueryHoc from "../Common/Query";
import * as EditorQueries from "./EditorsQueries";

const SingleEditorPage = (props) => {
    const editorId = {id: props.match.params.id};
    return(
        <div>
          <QueryHoc query={EditorQueries.SingleEditorDetails} variables={editorId} componentName={EditorBio} />
          {/* @TODO Add story masonry wrapper and tiles. */}
        </div>
    )
};

export default SingleEditorPage;