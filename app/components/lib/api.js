// lib/api.js
import { request, gql } from 'graphql-request';

const API_URL = process.env.WORDPRESS_GRAPHQL_URL;

export async function getPosts() {
  const query = gql`
    {
      posts {
        nodes {
          title
          slug
          excerpt
        }
      }
    }
  `;
  const data = await request(API_URL, query);
  return data.posts.nodes;
}
