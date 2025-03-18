import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image className='navbar-image' src="https://images.static.dragonaere.com/logos/transparent/orange.png" alt={'Dragonaere Logo'} width={64} height={64} />
      </Link>
    </nav>
  )
}
