import logo from './logo.svg';
import './App.css';
import './Deusdete.css'

function App() {
  return (
    
   
    <div>
        <header>
            <h1>Deusdete Store</h1>
        </header>
        <main className="container">
            <section className="products-container">
                <div className="card">
                    <div className="product-image" id="img-1"></div>
                    <h3>Produto 1</h3>
                    <p>Descrição 1</p>
                    <p>R$ <span className="bold">100,00</span></p>
                    <a href="#" className="btn">Comprar</a>
                </div>
                <div className="card">
                    <div className="product-image" id="img-2"></div>
                    <h3>Produto 2</h3>
                    <p>Descrição 2</p>
                    <p>R$ <span className="bold">100,00</span></p>
                    <a href="#" className="btn">Comprar</a>
                </div>
                <div className="card">
                    <div className="product-image" id="img-3"></div>
                    <h3>Produto 3</h3>
                    <p>Descrição 3</p>
                    <p>R$ <span className="bold">100,00</span></p>
                    <a href="#" className="btn">Comprar</a>
                </div>
                <div className="card">
                    <div className="product-image" id="img-4"></div>
                    <h3>Produto 4</h3>
                    <p>Descrição 4</p>
                    <p>R$ <span className="bold">100,00</span></p>
                    <a href="#" className="btn">Comprar</a>
                </div>
                <div className="card">
                    <div className="product-image" id="img-5"></div>
                    <h3>Produto 5</h3>
                    <p>Descrição 5</p>
                    <p>R$ <span className="bold">100,00</span></p>
                    <a href="#" className="btn">Comprar</a>
                </div>
                <div className="card">
                    <div className="product-image" id="img-6"></div>
                    <h3>Produto 6</h3>
                    <p>Descrição 6</p>
                    <p>R$ <span className="bold">100,00</span></p>
                    <a href="#" className="btn">Comprar</a>
                </div>
            </section>
        </main>
        <footer>
            <p>
                <span className="bold">Deusdete Store</span>
                &copy; 2023
            </p>
        </footer>
    </div>
   
  );
}

export default App;
