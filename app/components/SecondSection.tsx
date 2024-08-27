import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import React from 'react'

function SecondSection() {
  return (
 <div className=' mt-5'>
   <BentoGrid className="p-4 bg-gray-100 dark:bg-gray-800 gap-6 mt-5 rounded-lg">
        <BentoGridItem
          title="Item 1"
          description="This is the description for item 1."
          icon={<span role="img" aria-label="icon">🔥</span>}
          
        />
        <BentoGridItem
          title="Item 2"
          description="This is the description for item 2."
          icon={<span role="img" aria-label="icon">✨</span>}
        />
        <BentoGridItem
          title="Item 3"
          description="This is the description for item 3."
          icon={<span role="img" aria-label="icon">🚀</span>}
        />
        <BentoGridItem
          header={<h3>Header Content</h3>}
          title="Header Item"
          description="This item has a header."
          icon={<span role="img" aria-label="icon">🌟</span>}
        //   footer={<p>Footer Content</p>}
        />
        <BentoGridItem
          title="Clickable Item"
          description="This item is clickable."
        //   onClick={() => alert("Item clicked!")}
          icon={<span role="img" aria-label="icon">👆</span>}
        />
        <BentoGridItem
        //   imageSrc="https://example.com/image.jpg"
          title="Image Item"
          description="This item has an image."
        />
      </BentoGrid>
 hy
 </div>
  )
}

export default SecondSection
