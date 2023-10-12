import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/social">Social</Link>
    </nav>
  )
}