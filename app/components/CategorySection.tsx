import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'
import { InfiniteMovingCards } from './infinite-moving-cards'

function CategorySection({category}:{category:Category[]}) {
    console.log(category)
  return (
    <div>
          <div className=' rounded-3xl h-14'>
        <h1 className='font-bold text-3xl p-10 mt-10 text-center'data-aos="zoom-in">Top Category</h1>
        {category && category.length > 0 ? (
          <div className="h-[24rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden rounded-3xl pb-10"data-aos="zoom-in">
            <InfiniteMovingCards
              items={category}
              direction="right"
              speed="slow"
              data-aos="zoom-in"
            />
          </div>
        ) : (
          <span>No category</span>
        )}

        </div> 
  
    </div>
  )
}

export default CategorySection
