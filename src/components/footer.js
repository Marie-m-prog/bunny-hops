import React from 'react';

const Footer = () => (
    <>
			<footer className='bg-gray-900 text-white p-4 text-sm bottom-0 w-full'>
					<div className='max-w-4xl mx-auto flex flex-col items-end'>
					<div>
							© {new Date().getFullYear()}, Created with
							{` `}
							<a href='https://www.gatsbyjs.org' className='py-2 hover:text-yellow-400'>Gatsby</a>
					</div>
					<a href='mailto:mariewmadsen@gmail.com' className='py-2 hover:text-yellow-400'>Contact</a>
					</div>
			</footer>
    </>
)

export default Footer;