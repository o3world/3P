import React from 'react';
import EditorBio from './EditorBio';
import EditorStoriesWrapper from "./EditorStoriesWrapper"

const SingleEditorPage = (props) => {

        const editorId = props.match.params.id;
        return (
            <section>
              <EditorBio editorId={editorId}/>
              <EditorStoriesWrapper editorId={editorId}/>
            </section>
        )
};

export default SingleEditorPage;