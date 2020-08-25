import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const BeerPreview = ({data}) => (
  
    <div className='card w-64 m-4 rounded overflow-hidden transform hover:scale-105 hover:shadow-lg border-solid border border-gray-300'>
      <Link to={`/beer/${data.slug}`}>
        <Img className='w-full' fluid={data.image.fluid} alt='test'/>
        <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{data.recipe.data.RECIPES.RECIPE.NAME}</div>
          <p className='text-gray-700 text-base'>{data.recipe.data.RECIPES.RECIPE.STYLE.NAME}</p>
        </div>
      </Link>

  </div>
)

export default BeerPreview