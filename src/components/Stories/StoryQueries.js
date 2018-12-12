import gql from 'graphql-tag';

const StoryByIdQuery = gql`query story { 
  nodeQuery(
    filter: {
      conditions: [        
        {field: "nid", value: "10376", operator: EQUAL},        
      ]},
  ) 
  {    
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
}`;
const AllStoryQuery = gql`
query story {
    nodeQuery(
      filter:{
        conditions: [
          {field:"type", value:"story"},
        ]
      }
    )
  {    
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
}`;

export {AllStoryQuery, StoryByIdQuery};
