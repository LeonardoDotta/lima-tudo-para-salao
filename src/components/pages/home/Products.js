import Card from "./Card"

function Products() {
    return (
        <main className="container">
            <section className="products-container">
                <Card nome='Kit acabamentos andis' descricao='1 shaver andis, 1 máquina de acabamento andis, 
                                                              1 navalhete de aço,  1 tesoura fio laser,  
                                                              1 tesoura dentada, 
                                                              1 borrifador névoa,  
                                                              1 cartela de lâmina, 1 minoxidil'
                      preco='1.788,00' parcelas='12' preço2='149,00' id='img-1'/>

                <Card nome='Kit Tesouras' descricao='1 tesoura fio à laser, 1 tesoura dentada e 1 navalhete .......................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................' 
                      preco='399,00' parcelas='10' preço2='39,90' id='img-2'/>

                <Card nome='Kit Tesouras' descricao='1 tesoura fio à laser, 1 tesoura dentada e 1 navalhete .......................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................' 
                      preco='399,00' parcelas='10' preço2='39,90' id='img-3'/>

                <Card nome='Kit lizze extreme' descricao='1 Secador lizze 2400 Watts, 
                                                          1 chapinha lizze 480f,
                                                          1 bobliss lizze,
                                                          1 tesoura MQ fio navalha, 
                                                          1 tesoura dentada MQ,
                                                          1 pasta para limpar chapinha' 
                      preco='1.740,00' parcelas='12' preço2='145,00' id='img-4'/>
                      
                <Card nome='Ducha mágica' descricao='1 ducha mágica ..................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................
                ............................................................' 
                      preco='90,00' parcelas='10' preço2='9,00' id='img-5'/>

                <Card nome='Combo 1' descricao='1 galão de shampoo + 1 galão de condicionador + um pacote de toalha + 
                                                1 ducha mágica .......................
                                                ............................................................
                                                ............................................................
                                                ............................................................'
                                                 
                      preco='345,00' parcelas='10' preço2='34,50' id='img-6'/>

                <Card nome='Combo 2' descricao='3 escovas - De R$200,00 por' 
                      preco='156,00' parcelas='12' preço2='13,00' id='img-7'/>

                <Card nome='Combo 3' descricao='5 escovas - De R$350,00 por' 
                      preco='250,00' parcelas='12' preço2='20,80' id='img-8'/>

                <Card nome='Combo 4' descricao='3 escovas - De R$300,00 por' 
                      preco='199,00' parcelas='12' preço2='16,50' id='img-9'/>

                <Card nome='Esterelizador de escovas' descricao='1 esterelizador para escovas' preco='465,00' 
                      parcelas='12' preço2='38,75' id='img-10'/>
            </section>
        </main>
    )
}

export default Products
                    