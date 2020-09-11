import React from 'react';

const Footer = () => (
	<>
		<footer className='bg-header-gray text-white p-4 text-sm bottom-0 w-full'>
			<div className='max-w-4xl mx-auto flex flex-col items-end'>
			<div>
				© {new Date().getFullYear()}
			</div>
			<a href='mailto:info@bunnyhops.com' className='py-2 hover:text-yellow-400'>Contact</a>
			</div>
		</footer>
	</>
)

export default Footer;