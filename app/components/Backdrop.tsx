"use client";

// @ts-expect-error The package does not provide proper TypeScript declarations
import GridLines from '@mezh-hq/react-gridlines';

const Backdrop = () => {
  return (
    <div
    className='
    w-[100vw] h-[100vh] 
    bg-[#F5F5F5]
    -z-10
    fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>

        <GridLines 
        cellWidth={100} 
        strokeWidth={1}
        className='
        w-full h-full
        opacity-50
        ' />

        <div
        className='
        w-[750px] h-[300px]
        bg-red-200/60
        max-lg:opacity-50
        blur-[150px]
        
        absolute -top-[100px] -left-[150px]
        ' />

        <div
        className='
        w-[700px] h-[350px]
        max-lg:opacity-50
        bg-yellow-200/20
        blur-[150px]
        
        absolute -bottom-[25px] left-[35vw]
        ' />

        <div
        className='
        w-[500px] h-[500px]
        max-lg:opacity-50
        bg-pink-400/20
        blur-[150px]
        
        absolute -top-[50px] -right-[25px]
        ' />

        <div
        className='
        w-[400px] h-[400px]
        max-lg:opacity-50
        bg-blue-500/10
        blur-[150px]

        
        absolute -bottom-[50px] -right-[50px]
        ' />

        <h3
        className='
        absolute -bottom-[35px] -left-[20px]
        text-8xl font-accent uppercase opacity-20'>
          Mt. Dev
        </h3>

    </div>
  )
}

export default Backdrop