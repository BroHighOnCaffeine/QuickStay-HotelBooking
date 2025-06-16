import React from 'react'

// We will get these data from Props. {title , subTitle, align , font}

const Title = ({title , subTitle, align , font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align === "left" && "md:items-start md:text-left"}`}>
        {/* Why have we used className={``} with Backticks? And we've added "${}" so that we can enter the Template Literal*/}
        <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair" } `}>{title}</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title

// Now this Title Component will be used in the Featured Destinations