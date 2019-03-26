import gql from 'graphql-tag';

const SingleAuthorBioQuery = gql`
  query editors($id:String!) {
  userById(id:$id){
 	  first: fieldFirstName
    last: fieldLastName
    name
    headshot: userPicture {
        url
    }
    bio: fieldUserBio {
        processed
    }
    roles {
        targetId
    }
        email: fieldPublicEmailAddress
     twitterUsername: fieldTwitterUsername
      instagramUsername: fieldInstagramUsername
        linkedinUsername: fieldLinkedinUsername
      jobTitle: fieldJobTitle
  }
}`;

const StoriesByAuthor = gql`
    query stories($id:String!) {
        nodeQuery(
    limit: 100,
    filter: {
    conjunction: AND
    conditions: [{
      field: "type"
      value: "Story"
      operator: EQUAL
    }, {
        field: "uid"
        value: [$id]
      }]
  },
  sort: [{ field: "created" direction: DESC }]
) {
    entities {
      ... on NodeStory {
        title
        id: nid
        sponsoredBy: field3pSpecialSeries {
            entity {
              ...on TaxonomyTermSpecialS{
                company: fieldSsCompanyName
              }
            }
        }
        author: entityOwner {
          name
          first: fieldFirstName
          last: fieldLastName
          isEditor: field3pEditor
          bio: fieldUserBio {
            value
            format
            processed
          }
        }
        entityUrl {
          path
        }
        date: publishedAt {
          value
          publishedAtOrNow
        }
        category: fieldPrimaryCategory {
          entity {
            name
          }
        }
        squareImage: fieldFeaturedImageSquare {
          url
          width
          height
        }
        wideImage: fieldFeaturedImageWide {
          url
          width
          height
        }
        tallImage: fieldFeaturedImageTall {
          url
          width
          height
        }
        body: fieldContent {
          text: processed
        }
      }
    }
  }
    }
`;

const EditorsQuery = gql`
query editors{
  userQuery(filter: {
    conditions: [
      { field: "field_3p_editor", value: "1" },
    ]
  }) {
    entities {
  ...on User {
        id: uid
        name
        firstName: fieldFirstName
        lastName:fieldLastName
        headshot: userPicture {
          url
        }
        email: fieldPublicEmailAddress
        twitterUsername: fieldTwitterUsername
        instagramUsername: fieldInstagramUsername
        linkedinUsername: fieldLinkedinUsername
        jobTitle: fieldJobTitle
      }
    }
  }
}
`;

export { SingleAuthorBioQuery, StoriesByAuthor, EditorsQuery };
