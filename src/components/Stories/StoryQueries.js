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
        seo_title: fieldSeoTitle
        seo_description: fieldDescription
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
          bio: fieldUserBio {
            processed
          }
          instagram: fieldInstagramUsername
          twitter: fieldTwitterUsername
          email: fieldPublicEmailAddress
          linkedin: fieldLinkedinUsername
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
          value
        }
      }

    }
  }
}
`;

const StoriesByCategory = gql`
query stories($categoryId: String!, $storyId: [String] = "", $limit: Int = 100) {
        nodeQuery(
    limit: $limit,
    filter: {
    conjunction: AND
    conditions: [{
      field: "type"
      value: "Story"
      operator: EQUAL
    }, {
        field: "field_primary_category"
        value: [$categoryId]
      },
    {
      field: "nid",
      value: $storyId,
      operator: NOT_EQUAL
    }]
  },
  sort: [{ field: "published_at" direction: DESC }]
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
      sort: [{ field: "published_at" direction: DESC }]
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
      sort: [{ field: "published_at" direction: DESC }]
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

const StoriesByDates = gql`
query story($startDate: [String], $endDate:[String]) {
  nodeQuery(
    limit: 100,
    filter:{
      conditions: [
        {field:"type", value:"story"},
        {field:"published_at", value:$startDate, operator:GREATER_THAN_OR_EQUAL},
        {field:"published_at", value:$endDate, operator:SMALLER_THAN}
      ]
    },
    sort: [{ field: "published_at" direction: ASC }]
  )
  {
    entities {
      ... on NodeStory {
        title
        id: nid
        entityUrl {
          path
        }
        date: publishedAt {
          value
        }
      }
    }
  }
}
`;

export {AllStoryQuery, StoryByIdQuery, StoriesBySeriesId, StoriesByCategory, SingleCategoryTax, StoriesByDates};
