import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Welcome to...</span>
              <span>NerdPress</span>
            </h1>
            <h2>A blog platform for Nerds!</h2>
          </a>
        </Link>
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