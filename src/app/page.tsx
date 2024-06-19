import Image from "next/image";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between '>
      <header className='absolute inset-x-0 top-0 z-50 '>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image
                src='/Artzie..png'
                alt='Artzie Logo'
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
              Market
            </a>
            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
              How it works
            </a>
            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
              Galerry
            </a>
            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
              About
            </a>
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>

        <div className='lg:hidden' role='dialog' aria-modal='true'>
          <div className='fixed inset-0 z-50'></div>
          <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
              >
                <span className='sr-only'>Close menu</span>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Product
                  </a>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Features
                  </a>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Marketplace
                  </a>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Company
                  </a>
                </div>
                <div className='py-6'>
                  <a
                    href='#'
                    className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='flex flex-col md:flex-row w-full'>
        {/* 左侧内容 */}
        <div className='md:w-3/5 w-full'>
          <div className='relative isolate px-6 pt-14 lg:px-8'>
            <div
              className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
              aria-hidden='true'
            ></div>
            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
              <div className='text-left'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                  The largest NFT market with exceptional items on the bid
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  Collectible and non-fungible tokens in your hands.
                </p>
                <div className='mt-10 flex items-center  gap-x-6'>
                  <a
                    href='#'
                    className='rounded-md  bg-red-500 px-3.5 py-2.5 text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs md:max-w-md lg:max-w-lg'
                  >
                    Expore
                  </a>
                  <a
                    href='#'
                    className='text-sm font-semibold leading-6 text-gray-900'
                  >
                    Learn more <span aria-hidden='true'>→</span>
                  </a>
                </div>
                <div className='max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg'>
                  <h1 className='text-2xl font-bold text-gray-900 mb-6'>
                    Featured Artwork
                  </h1>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex justify-center'>
                      <img
                        src='/01.png'
                        alt='Artwork 1'
                        className='rounded-lg shadow-md'
                      />
                    </div>
                    <div className='flex justify-center'>
                      <img
                        src='/02.png'
                        alt='Artwork 2'
                        className='rounded-lg shadow-md'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
              aria-hidden='true'
            ></div>
          </div>
        </div>

        {/* 右侧内容 */}
        <div
          className='md:w-2/5 w-full bg-center bg-no-repeat bg-contain'
          style={{ backgroundImage: "url('/image.png')" }}
        >
          <div style={{ height: "850px" }}></div>
          
          <div className='max-w-4xl w-full p-6 '>
            <div className='flex items-center justify-left'>
              {/* 第一行 */}
              <div className='flex items-center px-4'>
                <div className='text-2xl font-bold text-red-500 w-1/3 mr-5'>
                  50K:
                </div>
                <div className='text-lg text-gray-900 w-2/3 text-white'>
                  Artwork.
                </div>
              </div>
              {/* 第二行 */}
              <div className='flex items-center px-4'>
                <div className='text-2xl font-bold text-red-500 w-1/3  mr-5'>
                  30K:
                </div>
                <div className='text-lg text-gray-900 w-2/3 text-white'>Artist.</div>
              </div>
              {/* 第三行 */}
              <div className='flex items-center px-4'>
                <div className='text-2xl font-bold text-red-500 w-1/3  mr-5'>
                  20K:
                </div>
                <div className='text-lg text-gray-900 w-2/3 text-white'>
                  Auction.
                </div>
              </div>
              {/* 可以继续添加更多行 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
