import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './image.module.css'
import BackgroundImage from 'gatsby-background-image'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "radovan-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imageData = data.placeholderImage.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag='section'
      className={styles.heroImage} 
      fluid={imageData} 
    >
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>Welcome to Bunnyhops</h3>
        <p>We sell handcrafted beer in Stockholm.</p>
      </div>
    </BackgroundImage>
  )
}

export default Image
