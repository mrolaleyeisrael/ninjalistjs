import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<Link href="/" className='logo'>
				<Image src='/logo.png' alt="logo" width={128} height={77} />
			</Link>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<Link href='/ninjas'>Ninja Listings</Link>
		</nav>
	);
};

export default Navbar;
