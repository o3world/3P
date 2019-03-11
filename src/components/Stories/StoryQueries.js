import gql from 'graphql-tag';

const StoryByIdQuery = gql`
query story($id:String!) {
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
            categoryID: entityId
          }
        }
        sponsoredSeries: field3pSpecialSeries {
            entity {
              ...on TaxonomyTermSpecialS{
                sponsoredBy: fieldSsCompanyName
                seriesTitle: name
                entityUrl {
                  path
                }
              }
            }
        }
       author: entityOwner {
          authorID: uid
          name
          first: fieldFirstName
          last: fieldLastName
          isEditor: field3pEditor
          headshot: userPicture {
            url
          }
        }
        entityUrl {
          path
        }
        date: publishedAt {
          value
          publishedAtOrNow
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

const StoriesByCategory = gql`
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
        field: "field_primary_category"
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
          last:fieldLastName
          isEditor:field3pEditor
          authorID:uid
          bio:fieldUserBio {
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
            categoryID: entityId

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

const AllStoryQuery = gql`
query story {
    nodeQuery(
      limit: 100,
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
          first: fieldFirstName
          last: fieldLastName
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

const StoriesBySeriesId = gql`
query story($id: String!) {
    nodeQuery(
      limit: 100,
      filter:{
        conditions: [
          {field:"type", value:"story"},
          {field:"field_3p_special_series", value: [$id]}
        ]
      },
      sort: [{ field: "created" direction: ASC }]
    )
  {
    entities {
      ... on NodeStory {
        title
        id: nid
        entityUrl {
          path
        }
        sponsoredBy: field3pSpecialSeries {
          targetId
          entity {
            name
          }
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
        author: entityOwner {
          name
          first: fieldFirstName
          last: fieldLastName
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

const SingleCategoryTax = gql`
query TaxonomyTerm($id:String!){
    categories: taxonomyTermById(id: $id) {
    	id: tid
    	name
  		categoryID: entityId
	}
}
`;

export {AllStoryQuery, StoryByIdQuery, StoriesBySeriesId, StoriesByCategory, SingleCategoryTax};
