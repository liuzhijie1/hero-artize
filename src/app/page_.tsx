import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-12'>
      {/* Header */}
      <header className='w-full'>
        <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
          {/* Logo */}
          <div className='text-xl font-bold text-gray-900'>
            <Image
              src='/Artzie..png'
              alt='Artzie Logo'
              width={100}
              height={24}
              priority
            />
          </div>

          {/* Navigation Menu */}
          <nav className='flex space-x-4'>
            <a href='#' className='text-gray-800 hover:text-gray-600 p-4'>
              Market
            </a>
            <a href='#' className='text-gray-800 hover:text-gray-600 p-4'>
              How it works
            </a>
            <a href='#' className='text-gray-800 hover:text-gray-600 p-4'>
              Galerry
            </a>
            <a href='#' className='text-gray-800 hover:text-gray-600 p-4'>
              About
            </a>
          </nav>

          {/* Sign Up / Sign In */}
          <div className='flex space-x-4'>
            <a href='#' className='px-4 py-2  hover:bg-blue-700 text-white '>
              Sign Up
            </a>
            <a
              href='#'
              className='px-4 py-2 bg-red-600 hover:bg-gray-700 text-white rounded-lg'
            >
              Sign In
            </a>
          </div>
        </div>
      </header>
      <div className='flex flex-col md:flex-row'>
        {/* 左侧内容 */}
        <div className='md:w-3/5 w-full  p-8  '>
          <h1 className='text-3xl font-bold text-gray-900'>Left Side Content</h1>
          <p className='text-gray-700 mt-4'>
            This is the left side content which takes up 60% of the width on medium
            to large screens.
          </p>
        </div>

        {/* 右侧内容 */}
        <div className='md:w-2/5 w-full 0 p-8  mt-8 md:mt-0 md:ml-8'>
          <h2 className='text-2xl font-bold text-gray-900'>Right Side Content</h2>
          <p className='text-gray-700 mt-4'>
            This is the right side content which takes up 40% of the width on medium
            to large screens.
          </p>
        </div>
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'></div>
    </main>
  );
}
