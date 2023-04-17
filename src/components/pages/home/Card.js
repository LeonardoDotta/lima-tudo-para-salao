function Card({nome, descricao, preco, preço2, parcelas, id}) {
    return (
        <div className="card">
            <div className="product-image" id={id}></div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>R$ <span className="bold">{preco}</span> ou em até <span className="bold">
                {parcelas}</span> de R$ <span className="bold">{preço2}</span></p>
            <a href="/whatsapp" className="btn">Comprar</a>
        </div>
    )
}

export default Card
                    