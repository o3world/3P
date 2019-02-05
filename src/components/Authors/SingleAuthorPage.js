import React from 'react'
import AuthorBio from './AuthorBio'
import AuthorStoriesWrapper from './AuthorStoriesWrapper'
import Header from '../Header/Header'
import Footer from "../Footer/Footer"

const SingleAuthorPage = (props) => {

        const authorId = props.match.params.id;

        return (
            <section>
                <Header />
              <AuthorBio authorId={authorId}/>
              <AuthorStoriesWrapper authorId={authorId}/>
                <Footer />
            </section>
        )
};

export default SingleAuthorPage;