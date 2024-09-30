import React, { useState } from 'react';
import Transmissao from '../../assets/transmissao-ao-vivo.png';
import Pista from '../../assets/pista.png';
import Grafico from '../../assets/grafico-estatistico.png';
import Computador from '../../assets/computador.png';
import Recompensa from '../../assets/recompensa.png';
import Ingresso from '../../assets/ingressos.png';

import './Informacoes.css';

const Informacoes = () => {
    const [showExtra, setShowExtra] = useState(false);

    const handleShowMore = () => {
        setShowExtra(!showExtra); 
    };

    return (
        <section className="segunda-section">
            <article className="box-assuntos">
                <div className="box-circulos">
                    <div className="item">
                        <div className="circulo">
                            <img src={Transmissao} alt="" />
                        </div>
                        <h3 className="nomes-circulos">E- Racing Streaming</h3>
                        <div className={`coluna-info ${showExtra ? 'show' : ''}`}>
                            <p className="coluna-info__texto">
                                Veja nossas corridas de uma forma mais divertida!
                            </p>
                            <img src={Computador} alt="" />
                            <p className="coluna-info__texto">
                                Agora você pode assistir à Fórmula E junto do seu Streamer Favorito!
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="circulo">
                            <img src={Pista} alt="" />
                        </div>
                        <h3 className="nomes-circulos">Últimas Corridas</h3>
                        <div className={`coluna-info ${showExtra ? 'show' : ''}`}>
                            <p className="coluna-info__texto">
                                Verifique as estatísticas e os detalhes das últimas corridas do campeonato
                            </p>
                            <img src={Grafico} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="circulo">
                            <img src={Recompensa} alt="" />
                        </div>
                        <h3 className="nomes-circulos">Recompensas</h3>
                        <div className={`coluna-info ${showExtra ? 'show' : ''}`}>
                            <p className="coluna-info__texto">
                                Fique em primeiro nos rankings dos jogos e quizzes para ganhar ingressos das corridas!
                            </p>
                            <img src={Ingresso} alt="" />
                            <p className="coluna-info__texto">
                                Compartilhe o site com os seus amigos e ganhe prêmios exclusivos da Fórmula E!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box-detalhes"></div>
                <div className="box-button-saiba-mais">
                    <button className="button-saiba-mais" onClick={handleShowMore}>
                        <h2 className="text-saiba-mais">
                            {showExtra ? 'Mostrar Menos' : 'Saiba Mais'}
                        </h2>
                    </button>
                </div>
            </article>
        </section>
    );
};

export default Informacoes;
