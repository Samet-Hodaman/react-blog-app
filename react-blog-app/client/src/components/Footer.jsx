import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
						<Link 
							to='/' 
							className='self-center whitespace-nowrap text-lg sm:text-lg font-semibold dark:text-white'>
            	<span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
								Samet's
							</span>
            	blog
        		</Link>
					</div>
					<div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3
					sm:gap-6'>
						<div>
							<Footer.Title title='About' />
							<Footer.LinkGroup col>
								<Footer.Link
									href='https://www.google.com'
									target='_blank' // open another page when it is clicked.
									rel='noopener noreferrer'
								>
									Google
								</Footer.Link>
								<Footer.Link
									href='/about'
									target='_blank' 
									rel='noopener noreferrer'
								>
									Samet's Blog
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						
						<div>
							<Footer.Title title='Follow us' />
							<Footer.LinkGroup col>
								<Footer.Link
									href='https://github.com/Samet-Hodaman'
									target='_blank'
									rel='noopener noreferrer'
								>
									Github
								</Footer.Link>
								<Footer.Link
									href='https://www.instagram.com/samethodaman/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Instagram
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title='Legal' />
							<Footer.LinkGroup col>
								<Footer.Link
									href='#'
								>
									Privacy Policy
								</Footer.Link>
								<Footer.Link
									href='#'
								>
									Terms and Conditions
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
        </div>
				<Footer.Divider />
				<div className='w-full sm:flex sm:items-center sm:justify-between'>
					<Footer.Copyright 
						href='#' 
						by="Samet's blog" 
						year={new Date().getFullYear()}
						/>
						<div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
							<Footer.Icon href='#' icon={BsFacebook}/>
							<Footer.Icon href='#' icon={BsInstagram}/>
							<Footer.Icon href='#' icon={BsTwitter}/>
							<Footer.Icon href='#' icon={BsGithub}/>
						</div>
				</div>
      </div>
    </Footer>
  )
}
