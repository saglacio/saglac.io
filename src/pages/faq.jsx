import React from 'react';
import { graphql } from 'gatsby';
import FAQPage from '@/components/pages/FAQPage';

export default function FAQ({
  data: {
    allFaqYaml: { nodes },
  },
}) {
  return <FAQPage sections={nodes} />;
}

export const pageQuery = graphql`
  query FAQData {
    allFaqYaml {
      nodes {
        header
        questions {
          slug
          question
          answer
        }
      }
    }
  }
`;
