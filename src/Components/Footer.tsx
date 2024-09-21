import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function Footer (){


    return (

        <footer>

            <div>

                <div>

                    <h3>About us</h3>
                    <p>
                    A Compselects é dedicada a publicar obras de qualidade que inspiram, educam e entretêm. Com uma paixão pela literatura e um compromisso com a excelência, buscamos trazer novas vozes e histórias ao mundo.
                    </p>

                </div>

                <div>

                    <h3>Nossos serviços</h3>
                    <ul>

                        <li>
                            Publicação de Livros: Trabalhamos com autores para transformar manuscritos em livros publicados.
                        </li>

                        <li>
                            Edição e Revisão: Oferecemos serviços profissionais de edição e revisão para garantir a qualidade das obras.
                        </li>

                        <li>
                            Distribuição: Distribuímos nossos livros em várias plataformas e livrarias, tanto físicas quanto digitais
                        </li>

                    </ul>

                </div>

                <div>
                    <h3>Fique conectado</h3>

                    <ul className="links">

                        <li>

                            <a href="https://www.facebook.com" target="_blank" >
                                <FaFacebook className="logo"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank">
                                <FaSquareInstagram/>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.twitter.com" target="_blank">
                                <FaXTwitter/>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com" target="_blank">
                                <FaYoutube/>
                            </a>
                        </li>

                    </ul>


                </div>

            </div>

        </footer>

    )

}