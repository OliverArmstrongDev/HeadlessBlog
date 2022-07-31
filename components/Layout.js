import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
          <a>
            <h1>
              <span>Welcome to...</span>
              <span>Headless Blog</span>
            </h1>
            <h2>A mock blog platform built using Next.js and a Headless CMS</h2>
            <div className="subcontent">
            <p className='blurb'>Any changes made in the backend (Contentful) are updated in the front end automatically using ISR (incremental Static Regeneration). It also has an auto redirect after 3 seconds for a 404 not found page.</p>
            </div>
          </a>
       
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p><a href='https://oliverarmstrongdev.com'>Copyright © 2022 Oliver Armstrong.</a></p>
      </footer>
    </div>
  )
}