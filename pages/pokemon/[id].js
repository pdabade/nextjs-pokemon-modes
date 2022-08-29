import Head from 'next/head'
import Link from 'next/link';
import styles from '../../styles/Details.module.css'

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`);

    return {
        props: {
            pokemon: await res.json()
        }
    }
}

export default function Details({ pokemon }) {
//     const {
//         query: { id },
//     } = useRouter();

//     const [pokemon, setPokemon] = useState(null);

//   useEffect(() => {
//     async function getPokemon() {
//       const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`);
//       setPokemon(await res.json());
//     }

//     if(id) {
//         getPokemon();
//     }
    
//   });

//   if(!pokemon) {
//     return null;
//   }

    return (
        <div>
        <div>
            <Head>
                <title>{pokemon.name}</title>
            </Head>
            <Link href="/">
                <a>Back to Home</a>
            </Link>
        </div>
        <div className={styles.layout}>
            <div>
                <img className={styles.picture} 
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                alt={pokemon.name.english}
                />
            </div>
            <div>
                <div className={styles.name}>{pokemon.name}</div>
                <div className={styles.type}>{pokemon.type.join(", ")}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemon.stats.map(({name, value}) => (
                            <tr key={name}>
                                <td className={styles.attribute}>{name}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
    
    
    // <div>{JSON.stringify(pokemon)}</div>;
}