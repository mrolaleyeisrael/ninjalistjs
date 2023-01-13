import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<h1>HomePage</h1>
			<p className={styles.text}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae
				impedit, praesentium corporis cum excepturi porro quas repudiandae,
				earum dolore dolor sapiente doloremque iusto ut voluptatum ex veniam,
				enim harum.
			</p>
			<p className={styles.text}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae
				impedit, praesentium corporis cum excepturi porro quas repudiandae,
				earum dolore dolor sapiente doloremque iusto ut voluptatum ex veniam,
				enim harum.
			</p>
			<Link legacyBehavior href='/ninjas'>
				<a className={styles.btn}>See Ninja List</a>
			</Link>
		</div>
	);
}
