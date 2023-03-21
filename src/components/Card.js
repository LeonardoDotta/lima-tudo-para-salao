function Card({nome, descricao, preco, id}) {
    return (
        <div className="card">
            <div className="product-image" id={id}></div>
            <h3>{nome}</h3>
            <p>{descricao}</p>
            <p>R$ <span className="bold">{preco}</span></p>
            <a href="/whatsapp" className="btn">Comprar</a>
        </div>
    )
}

export default Card
                    