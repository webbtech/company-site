import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title='Home | Webbtech'>
    <main className='bg-gray-800  overflow-hidden'>
      <div className='pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            {/* left cell */}
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
              <div className='lg:py-20'>
                <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl'>
                  <span className='md:block'>Web services for your </span>
                  <span className='md:block text-gray-500'>online business</span>
                </h1>
                <p className='text-base text-gray-300 mt-3 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  We provide consulting and development services to help you build and grow your online business.
                </p>

                <p className='text-gray-300 mt-3 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  At Webbtech we work hard to stay up-to-date on the latest technologies required to build your next
                  SaaS product, web or mobile application, or eCommerce solution.
                </p>

                <p className='text-gray-300 mt-3 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  <Link href='/services'>
                    <a className='basic-link text-xl'>
                      Our Services<span aria-hidden='true'> &rarr;</span>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
            {/* right cell */}
            <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
                {/* eslint-disable-next-line */}
                <img
                  className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Layout>
)

export default IndexPage
