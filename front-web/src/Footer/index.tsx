import './style.css';
import {ReactComponent as Youtube} from './youtube.svg'
import {ReactComponent as Instagram} from './instagram.svg'
import {ReactComponent as Linkedin} from './linkedin.svg'

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="_new">
                   <Youtube/> 
                </a>
                <a href="https://www.linkedin.com/in/wilson-felipe-725538176/" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/wfelipe2011/" target="_new">
                    <Instagram/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;