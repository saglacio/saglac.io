"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
(exports.default = Index);
(exports.pageQuery = void 0);
var _react = _interopRequireDefault(require("react"));
var _gatsby = require("gatsby");
var _IndexPage = _interopRequireDefault(require("./src/components/pages/IndexPage"));

function Index(
  {
    data: {
      latestEvent: {
        nodes: [latestEvent],
      },
    },
  }
) {
  return _react.default.createElement(_IndexPage.default, {
    event: latestEvent
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
