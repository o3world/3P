import React from 'react';
import EditorSocial from './EditorSocial'
import QueryHoc from "../Common/Query";
import * as EditorQueries from "./EditorsQueries";

const EditorDetails = (props) => {
    const editorId = {id: props.match.params.id};
    return(
        <div>
            <div>
                <img src={''} alt={''}/>
                <h1>Editors</h1>
                <div>
                    <QueryHoc query={EditorQueries.SingleEditorSocialDetails} variables={editorId} componentName={EditorSocial} />
                </div>
                <div>
                    Stories written by John Howell
                </div>
            </div>
        </div>
    )
}

export default EditorDetails;