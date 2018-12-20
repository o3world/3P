import gql from 'graphql-tag';

const StoryByIdQuery = gql`query story($id:String!) { 
  nodeQuery(
    filter: {
      conditions: [        
        {field: "nid", value: [$id], operator: EQUAL},        
      ]},
  ) 
  {    
    entities {
      ... on NodeStory {
        title
        id: nid
        category: fieldPrimaryCategory {
          entity {
            name
          }
        }
        sponsoredSeries: field3pSpecialSeries {
            entity {
              ...on TaxonomyTermSpecialS{
                fieldSsCompanyName
              }
            }
        }
       author: entityOwner {
          name
          first: fieldFirstName
          last: fieldLastName
          headshot: userPicture {
            url
          }
        }
        entityUrl {
          path
        }        
        date: entityCreated        
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
}`;

const AllStoryQuery = gql`
query story {
    nodeQuery(
      filter:{
        conditions: [
          {field:"type", value:"story"},
        ]
      },
      sort: [{ field: "created" direction: DESC }]
    )
  {    
    entities {
      ... on NodeStory {
        title
        id: nid
        sponsoredBy: field3pSpecialSeries {
          targetId
          entity {
            name
          }
        }
        author: entityOwner {
          name
        }
        entityUrl {
          path
        }        
        date: entityCreated   
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
}`;

const StoriesBySeriesId = gql`
query story($id: String!) {
    nodeQuery(
      filter:{
        conditions: [
          {field:"type", value:"story"},
          {field:"field_3p_special_series", value: [$id]}
        ]
      }
    )
  {    
    entities {
      ... on NodeStory {
        title
        id: nid
        sponsoredBy: field3pSpecialSeries {
          targetId
          entity {
            name
          }
        }     
        date: entityCreated        
        squareImage: fieldFeaturedImageSquare {
          url
          width
          height
        }
        author: entityOwner {
          name
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
      }
      
    }
  }  
}
`;
export {AllStoryQuery, StoryByIdQuery, StoriesBySeriesId};
