const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
exports.__esModule = true;
exports.default = Index;
exports.pageQuery = void 0;
const _react = _interopRequireDefault(require('react'));
const _gatsby = require('gatsby');
const _IndexPage = _interopRequireDefault(
  require('@/components/pages/IndexPage'),
);

function Index({
  data: {
    latestEvent: {
      nodes: [latestEvent],
    },
  },
}) {
  return _react.default.createElement(_IndexPage.default, {
    event: latestEvent,
  });
}

const pageQuery = (0, _gatsby.graphql)`query LatestEvent {
  latestEvent: allIoEventsYaml(sort: {date: DESC}, limit: 1) {
    totalCount
    nodes {
      id
      title
      description
      formattedDate: date(formatString: "dddd DD MMMM YYYY, [à] LT", locale: "fr")
      date
      event_url
      talks {
        title
        description
        authors {
          id
          name
          website
        }
      }
      location {
        id
        name
        address
        url
        facebook
        description
        map
      }
    }
  }
}`;

exports.pageQuery = pageQuery;
