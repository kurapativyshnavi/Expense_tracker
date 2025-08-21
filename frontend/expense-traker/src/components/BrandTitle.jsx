import React from 'react'

const BrandTitle = ({ size = 'text-2xl md:text-3xl', showUnderline = true }) => {
	return (
		<div className='pt-1'>
			<h1 className={`${size} font-semibold tracking-tight bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent`}>Expense Tracker</h1>
			{showUnderline && <div className='mt-1 h-1 w-24 bg-gradient-to-r from-purple-500 to-fuchsia-400 rounded-full'></div>}
		</div>
	)
}

export default BrandTitle
