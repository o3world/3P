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
    exact: false,
    component: SingleSeriesPage,
  },
  {
    path: '/editors',
    exact: false,
    component: EditorsPage,
  },
  {
    path: '/editor/:id/',
    exact: false,
    component: SingleEditorPage,
  },
  {
    path: '/the-feed',
    exact: false,
    component: TheFeedPage,
  },
  {
    path: '/stories',
    exact: false,
    component: StoriesPage,
  },
  {
    path: '/story/:year/:title/:id/',
    exact: false,
    component: SingleStoryPage,
  },
  {
    path: '/search/:searchterm',
    exact: false,
    component: SearchResult,
  },
  {
    path: '/author/:username/:id/',
    exact: false,
    component: SingleAuthorPage,
  }
];

export default routes;