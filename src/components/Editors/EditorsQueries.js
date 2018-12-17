import gql from 'graphql-tag';

const AllEditorsQueries = gql`
    query story {
    nodeQuery(
      filter:{
        conditions: [
          {field:"type", value:"story"},          
          {field:"uid", value:"176", operator:EQUAL}
        ]
      }
    )
  {
      entities{
        ... on NodeStory{
          entityId
          title
          changed
          entityOwner {
            name
          }          
          field3pSpecialSeries{
            entity{
              ...on TaxonomyTermSpecialS{
                fieldSsCompanyName
              }
            }
          }
          fieldFeaturedImageTall{ 
            url
            width
            height
          }
          uid{
            entity{
              ... on User{
                name
                uid
              }
            }
          }
          
        }
      }
    }
}
`;

const SingleEditorDetails = gql`
  query editors($id:String!) {
  userById(id:$id){
 	fieldFirstName
    fieldLastName
    userPicture {
        url
    }
    fieldUserBio {
        processed
    }
    roles {
        targetId
    }
  }  
}`;


const Contributors = gql`
  query {
    userQuery(filter: {
      conditions: [
        { field: "roles", value: "editor" },
      ]
    }) {
      entities {
    ...on User {
          uid
          name
          fieldFirstName
          fieldLastName
          userPicture {
            url
          }
        }
      }
    }
  }`;

export { AllEditorsQueries, SingleEditorDetails, Contributors };