import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from './image.module.css'
import BackgroundImage from 'gatsby-background-image'

const Image = ({siteTitle, headerText}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSiteMetadata {
        edges {
          node {
            headerImage {
              fluid(maxWidth: 1920) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  const imageData = data.allContentfulSiteMetadata.edges[0].node.headerImage.fluid;
  return (
    <div className={`${styles.hero}`}>
      <BackgroundImage
        Tag='section'
        className={styles.heroImage} 
        fluid={imageData} 
      >
        <div className={`${styles.heroDetails}`}>
          <h3 className={styles.heroHeadline}>{`Welcome to ${siteTitle}`}</h3>
          <p>{headerText}</p>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Image
