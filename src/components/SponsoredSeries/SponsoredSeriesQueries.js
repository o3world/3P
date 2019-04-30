import gql from 'graphql-tag';

const AllSponsoredSeriesQuery = gql`
 query sponsoredSeries {
  taxonomyTermQuery(
    limit: 100,
    filter: {
      conditions: [
        {field: "vid", value: "special_s"},
        {field: "field_enabled", value: "1"}
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
        tileImage: fieldSsFeaturedImage {
          derivative(style: RATIO23) {
            width
            height
            url
          }
        }
      }
    }
  }
}
`;

const FeaturedSponsoredSeriesQuery = gql`
 query sponsoredSeries {
  taxonomyTermQuery(filter: {
      conditions: [
        {field: "vid", value: "special_s"},
        {field: "field_enabled", value: "1"}
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
        heroImage: fieldSsHeroImage {
          derivative(style: RATIO83) {
            width
            height
            url
          }
        }
      }
    }
  }
}
`;

const SingleSeriesQuery = gql`
query TaxonomyTerm($id:String!){
    series: taxonomyTermById(id: $id) {
    	id: tid
    	name
        description {
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
          derivative(style: RATIO43) {
            width
            height
            url
          }
        }
      }
	}
}
`;

export {AllSponsoredSeriesQuery, FeaturedSponsoredSeriesQuery, SingleSeriesQuery };
