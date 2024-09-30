import { useEffect } from 'react';
import Start from '../../assets/start-formula.jpg';
import MahindraCaar from '../../assets/mahindraCaar.jpg';
import MahindraCarF from '../../assets/mahindraCarF.jpg';
import Equipe from '../../assets/equipe.jpg';
import './Home.css';

const Home = () => {
    useEffect(() => {
        let count = 1;
        document.getElementById("radio1").checked = true;

        const intervalId = setInterval(() => {
            nextImage();
        }, 5000);

        function nextImage() {
            count++;
            if (count > 4) {
                count = 1;
            }
            console.log("Mudando para a imagem:", count);
            document.getElementById("radio" + count).checked = true;
        }

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez, após a montagem

    return (
        <>
            <section className="home">
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1" />
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />

                        <div className="slide first">
                            <img src={Start} alt="Imagem 1" />
                        </div>
                        <div className="slide">
                            <img src={MahindraCaar} alt="Imagem 1" />
                        </div>
                        <div className="slide">
                            <img src={MahindraCarF} alt="Imagem 1" />
                        </div>
                        <div className="slide">
                            <img src={Equipe} alt="Imagem 1" />
                        </div>

                        <div className="navigationAuto">
                            <div className="autoBtn1"></div>
                            <div className="autoBtn2"></div>
                            <div className="autoBtn3"></div>
                            <div className="autoBtn4"></div>
                        </div>
                    </div>
                    <div className="manualNavigation">
                        <label htmlFor="radio1" className="manualBtn"></label>
                        <label htmlFor="radio2" className="manualBtn"></label>
                        <label htmlFor="radio3" className="manualBtn"></label>
                        <label htmlFor="radio4" className="manualBtn"></label>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
