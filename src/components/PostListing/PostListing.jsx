import React from 'react';
import PropTypes from 'prop-types';
import Link from '@/components/shared/Link';

class PostListing extends React.Component {
  getPostList() {
    const { postEdges } = this.props;
    return postEdges.map(({ node }) => ({
      path: node.fields.slug,
      tags: node.frontmatter.tags,
      cover: node.frontmatter.cover,
      title: node.frontmatter.title,
      date: node.fields.date,
      excerpt: node.excerpt,
      timeToRead: node.timeToRead,
    }));
  }

  render() {
    return (
      <div>
        {/* Your post list here. */
          this.getPostList().map((post) => (
            <Link to={post.path} key={post.title}>
              <h1>{post.title}</h1>
            </Link>
          ))
        }
      </div>
    );
  }
}

PostListing.propTypes = {
  postEdges: PropTypes.array.isRequired,
};

export default PostListing;
