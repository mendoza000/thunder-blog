import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed h-12 bg-slate-600 min-w-full flex justify-center items-center">
      <ul className="flex justify-between items-center">
        <li>
          <Link href={"/"}>
            <a>
              Home
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar