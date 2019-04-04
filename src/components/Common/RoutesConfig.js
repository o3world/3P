import Home from "../Home/Home"
import SponsoredSeriesAll from "../SponsoredSeries/SponsoredSeriesAll"
import SingleSeriesPage from "../SponsoredSeries/SingleSeriesPage"
import EditorsPage from "../Editors/EditorsPage"
import SingleEditorPage from "../Editors/SingleEditorPage"
import TheFeedPage from "../Feed/TheFeedPage"
import StoriesPage from "../Stories/StoriesPage"
import SingleStoryPage from "../Stories/SingleStoryPage"
import SearchResult from "../Search/SearchResults"
import SingleAuthorPage from "../Authors/SingleAuthorPage"
import SingleCategoryPage from "../Category/SingleCategoryPage"
import the404 from '../404/404'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/sponsored-series',
    exact: true,
    component: SponsoredSeriesAll,
  },
  {
    path: '/sponsored-series/:id/',
    component: SingleSeriesPage,
  },
  {
    path: '/editors',
    component: EditorsPage,
  },
  {
    path: '/editor/:id/',
    component: SingleEditorPage,
  },
  {
    path: '/the-feed',
    component: TheFeedPage,
  },
  {
    path: '/stories',
    component: StoriesPage,
  },
  {
    path: '/story/:year/:title/:id/',
    exact: true,
    component: SingleStoryPage,
  },
  {
    path: '/search/:searchterm',
    component: SearchResult,
  },
  {
    path: '/author/:username/:id/',
    component: SingleAuthorPage,
  },
  {
    path: '/category/:cat/:id/',
    component: SingleCategoryPage,
  },
  {
    component: the404,
  },
];

export default routes;