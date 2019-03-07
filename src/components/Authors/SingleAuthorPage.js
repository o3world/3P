import React from 'react'
import AuthorBio from './AuthorBio'
import AuthorStoriesWrapper from './AuthorStoriesWrapper'
import PageTemplate from '../Common/PageTemplate'

const SingleAuthorPage = (props) => {

  const authorId = props.match.params.id;

  return (
      <PageTemplate>
        <AuthorBio authorId={authorId}/>
        <AuthorStoriesWrapper authorId={authorId}/>
      </PageTemplate>
  )
};

export default SingleAuthorPage;