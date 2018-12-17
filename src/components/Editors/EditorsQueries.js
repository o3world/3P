import gql from 'graphql-tag';

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

const StoriesByEditor = gql`
    query stories($id:String!) {
        nodeQuery(filter: {
    conjunction: AND
    conditions: [{
      field: "type"
      value: "Story"
      operator: EQUAL
    }, {
        field: "uid"
        value: [$id]
      }]
  }) {
    entities {      
      ... on NodeStory {
        title
        nid
        field3pSpecialSeries {
            entity {
              ...on TaxonomyTermSpecialS{
                fieldSsCompanyName
              }
            }
        }
        entityOwner {
          name
        }
        entityUrl {
          path
        }        
        entityCreated        
        fieldFeaturedImageSquare {
          url
          width
          height
        }
        fieldFeaturedImageWide {
          url
          width
          height
        }
        fieldFeaturedImageTall {
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

export { SingleEditorDetails, StoriesByEditor };