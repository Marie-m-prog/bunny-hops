import React, { Component } from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({data}) => {
    return (
        <div>
            <h1>{data.beer.recipeInfo.name}</h1>
            <p>Beer info</p>
        </div>
    )
}

export default BlogPost

export const pageQuery = graphql`
    query ($slug: String!){
        beer: contentfulBeer(slug: {eq: $slug}) {
            slug
            batchSize
            fermentables
            recipeInfo {
                alcohol
                name
                type
            }
        }
    }
`