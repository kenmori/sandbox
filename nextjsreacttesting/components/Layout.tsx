import Head from 'next/head'
import Link from 'next/link'

interface Title {
  title: string
}

export const Layout: React.FC<Title> = ({ children, title= "Nextjs"}) => {
  return (
    <div className="flex">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
      <nav className="bg-gray-800 w-screen">
        <div className="flex items-center pl-8 h-14">
          <div className="flex space-x-4">
            <Link href="/">
              <a data-testid="home-nav" href="" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Home
              </a>
            </Link>
            <Link href="/blog-page">
              <a data-testid="blog-nav" href="" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Blog
              </a>
            </Link>
            <Link href="/comment">
              <a data-testid="home-nav" href="" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Home
              </a>
            </Link>
            <Link href="/context">
              <a data-testid="home-nav" href="" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Context
              </a>
            </Link>
            <Link href="/todos">
              <a data-testid="home-nav" href="" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Home
              </a>
            </Link>
          </div>
        </div>
      </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
        </main>
        <footer>
          footer
        </footer>
    </div>
  )
}