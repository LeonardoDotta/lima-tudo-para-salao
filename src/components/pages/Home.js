import Products from '../Products'
import styles from './Home.module.css'

function Home({nome}) {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>{nome}</span></h1>
            <p>Conheça!</p>
            <Products />
        </section>
    )
}

export default Home