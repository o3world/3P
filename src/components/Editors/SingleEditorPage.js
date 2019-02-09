import React from 'react'
import EditorBio from './EditorBio'
import EditorStoriesWrapper from "./EditorStoriesWrapper"
import PageTemplate from '../Common/PageTemplate'

const SingleEditorPage = (props) => {

  const editorId = props.match.params.id;
  return (
    <PageTemplate>
      <EditorBio editorId={editorId}/>
      <EditorStoriesWrapper editorId={editorId}/>
    </PageTemplate>
  )
};

export default SingleEditorPage;