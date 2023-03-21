import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>NALEO</span></h1>
            <p>Conheça um pouco da nossa história!</p>
        </section>
    )
}

export default Home