import './style.css';
import {ReactComponent as Main} from './main.svg'
function Home(){
    return(
        <div className="home-container">
            <div className="home-content">
                <div className="home-action">
                    <h1 className="home-title">Faça seu pedido <br/> 
                    que entregamos<br/> pra você!!!</h1>
                     <h3>Escolha o seu pedido e em poucos minutos<br/>
                     levaremos na sua porta</h3>
                     <button className="home-btn-order"><a href="orders" className="home-btn">FAZER PEDIDO</a></button>
                </div>
                <div className="home-image svg">
                    <Main />
                </div>

            </div>
        </div>
    )
}

export default Home;