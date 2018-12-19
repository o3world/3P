import gql from 'graphql-tag';

const StoryByIdQuery = gql`query story($id:String!) { 
  nodeQuery(
    filter: {
      conditions: [        
        {field: "nid", value: $id, operator: EQUAL},        
      ]},
  ) 
  {    
    entities {
      ... on NodeStory {
        title
        id: nid
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
        imageWide: fieldFeaturedImageTall {
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
        id: nid
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

const StoriesBySeriesId = gql`
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
        id: nid
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
export {AllStoryQuery, StoryByIdQuery, StoriesBySeriesId};
