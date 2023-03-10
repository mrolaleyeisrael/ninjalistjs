import Link from "next/link";
import styles from "../../styles/Jobs.module.css";

export const getStaticProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	return {
		props: { ninjas: data },
	};
};

const Ninjas = ({ ninjas }) => {
	return (
		<div>
			<h1>Ninja Listings</h1>
			{ninjas.map((ninja) => (
				<Link legacyBehavior href={"/ninjas/" + ninja.id} key={ninja.id}>
					<a className={styles.single}>
						<h3>{ninja.name}</h3>
					</a>
				</Link>
			))}
		</div>
	);
};

export default Ninjas;
