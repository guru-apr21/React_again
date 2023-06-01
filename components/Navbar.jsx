import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
