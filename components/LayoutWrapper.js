import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useState, useEffect } from 'react'
import ReactGA from 'react-ga'
import { XMarkIcon } from '@heroicons/react/20/solid'


const LayoutWrapper = ({ children }, props) => {
  /* const location = props.location.pathname
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize('G-5FB80KJR26')
      setInitialized(true)
    }
  }, [])

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search)
    }
  }, [initialized, location])*/

  return (
    
    <SectionContainer>
      <div className="">
            <p className=" font-semibold text-center text-black text rounded-lg underline" style={{ textDecoration: 'underline', paddingTop: '10px'}}>
            <a
              href="https://usegravity.app/?ref=reactshark"
              target='_blank'
            >
            How I got to $10,000 per month with this Node.js boilerplate  
            </a>
            </p>
        </div>
      <div className="flex flex-col justify-between h-screen pt-2.5 ">
      
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="ReactShark">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' && (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">ReactShark</div>
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
