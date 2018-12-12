import gql from 'graphql-tag';

const AllSponsoredSeriesQuery = gql`
 query sponsoredSeries {
  taxonomyTermQuery(filter: {
      conditions: [
        {field: "vid", value: "special_s"},
      ]},
      sort: [
        {field: "field_featured_series", direction: DESC},
        {field: "changed", direction: DESC} 
    ]
  ) {
    entities {
      ... on TaxonomyTerm {
        name
        tid
        description {
          text: processed
        }
      }
      ... on TaxonomyTermSpecialS {
        featured: fieldFeaturedSeries
        company: fieldSsCompanyName
        logo: fieldSeriesImage {
          targetId
          alt
          title
          width
          height
          url
        }
        link: fieldLogoLink {
          uri
        }
        mainImage: fieldSsFeaturedImage {
          derivative(style: RATIO_3_4) {
            width
            height
            url
          }
        }
        heroImage: fieldSsHeroImage {
          targetId
          alt
          title
          width
          height
          url
        }
      }
    }
  }
}`;

const FeaturedSponsoredSeriesQuery = gql`
 query sponsoredSeries {
  taxonomyTermQuery(filter: {
      conditions: [
        {field: "vid", value: "special_s"},
      ]},
      sort: [
        {field: "field_featured_series", direction: DESC},
        {field: "changed", direction: DESC} 
    ]
  ) {
    entities {
      ... on TaxonomyTerm {
        name
        tid
        description {
          text: processed
        }
      }
      ... on TaxonomyTermSpecialS {
        featured: fieldFeaturedSeries
        company: fieldSsCompanyName
        logo: fieldSeriesImage {
          targetId
          alt
          title
          width
          height
          url
        }
        link: fieldLogoLink {
          uri
        }
        mainImage: fieldSsFeaturedImage {
          derivative(style: RATIO_3_4) {
            width
            height
            url
          }
        }
        heroImage: fieldSsHeroImage {
          targetId
          alt
          title
          width
          height
          url
        }
      }
    }
  }
}`;

const StoryDetailsById = gql`query story { 
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

const AllStory = gql`
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
export {AllSponsoredSeriesQuery, FeaturedSponsoredSeriesQuery, AllStory, StoryDetailsById};