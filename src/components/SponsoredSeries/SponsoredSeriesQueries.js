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

const SingleSeriesQuery = gql`query TaxonomyTerm($id:String!) 
{ 
    taxonomyTermById(id: $id) {
    	tid
    	name
        description{
          processed
        }
  		entityId
  		entityType
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
}`;

export {AllSponsoredSeriesQuery, FeaturedSponsoredSeriesQuery, SingleSeriesQuery};