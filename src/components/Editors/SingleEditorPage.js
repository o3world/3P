import React from 'react';
import EditorBio from './EditorBio';
import EditorStoriesWrapper from "./EditorStoriesWrapper"
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

const SingleEditorPage = (props) => {

        const editorId = props.match.params.id;
        return (
            <section>
                <Header />
              <EditorBio editorId={editorId}/>
              <EditorStoriesWrapper editorId={editorId}/>
                <Footer />
            </section>
        )
};

export default SingleEditorPage;