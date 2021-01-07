function StepHeader(){
    return(
        <header className="orders-steps-container">
            <div className="orders-steps-content">
            <h1 className="steps-title">Siga as<br />
            etapas</h1>
            <ul className="steps-items">
                <li>
                    <span className="steps-number">1</span>
                    Selecione os produtos e a localização.
                </li>
                <li>
                    <span className="steps-number">2</span>
                     Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                </li>
            </ul>
            </div>
        </header>
    )
}

export default StepHeader;