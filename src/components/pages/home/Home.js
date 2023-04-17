import Products from './Products'
import styles from './Home.module.css'

function Home({nome}) {
    return (
        <section className={styles.home_container}>
            <h1>Seja bem-vindo(a)!</h1>
            <p>𝙰𝚚𝚞𝚒 𝚟𝚘𝚌ê 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚊 𝚊 𝚖𝚊𝚒𝚘𝚛 𝚟𝚊𝚛𝚒𝚎𝚍𝚊𝚍𝚎 𝚍𝚎 𝚙𝚛𝚘𝚍𝚞𝚝𝚘𝚜, 𝚎𝚚𝚞𝚒𝚙𝚊𝚖𝚎𝚗𝚝𝚘𝚜, 
                𝚞𝚝𝚎𝚗𝚜í𝚕𝚒𝚘𝚜 𝚎 𝚖𝚘𝚟é𝚒𝚜 𝚙𝚊𝚛𝚊 𝚘 𝚜𝚎𝚞 𝚗𝚎𝚐ó𝚌𝚒𝚘!
                𝙵𝚊ç𝚊 𝚓á 𝚜𝚎𝚞 𝚙𝚎𝚍𝚒𝚍𝚘 👇🏼   
            </p>
            <Products />
        </section>
    )
}

export default Home