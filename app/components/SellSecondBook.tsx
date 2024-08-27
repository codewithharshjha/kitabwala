import Image from 'next/image'
import React from 'react'

function SellSecondBook() {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Donate</h2>
    <p className="mb-12 text-lg text-gray-500">For Better World.</p>
    <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row ">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2 ">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg ">
                        <div className="flex items-center -mt-1 hadow-[0px_16px_16px_0px_#0000004d] transition duration-500 group-hover:scale-105">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Donate Book </h3>
                        </div>
                        
                        <p className="mb-2 text-gray-600">Donate Books, Change Lives: Your gently used books can light up the minds of those in need.

Support Education: Help underprivileged children and adults gain knowledge and escape poverty through the power of reading.

Share Your Love of Reading: Donate books today and inspire a lifelong love of learning in someone less fortunate.

</p>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                        <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Help Other</h3>
                        </div>
                        
                        <p className="mb-2 text-gray-600">Extend a Hand: Your small act of kindness can make a big difference in the lives of those in need.

Fight Poverty: Together, we can provide essential resources and support to lift people out of poverty.

Show Compassion: Help the less fortunate by donating food, clothing, or funds to make their lives better.

Be the Change: Your support can bring hope and opportunities to those struggling to make ends meet.

Make an </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                        <Image unoptimized width={300}height={300} src={'/book6.jpg'}className=' object-cover rounded-t-xl'alt='image'/>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                        <Image unoptimized width={300}height={300} src={'/poorbaby.jpg'}className=' object-cover rounded-t-xl'alt='image'/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                    <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div className="flex items-center -mt-1">
                        <Image unoptimized width={300}height={300} src={'/book5.jpg'}className=' object-cover rounded-t-xl'alt='image'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default SellSecondBook
