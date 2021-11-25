import Gradient from 'rgt';
import PLogo from '../media/images/p-logo2.png';
import './footer.scss';

function Footer() {
    return (
        <footer id='footer'>
            <div className="footer__title">
                <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
                    Contribuciones
                </Gradient>
            </div>
            <a href={'https://buy.stripe.com/test_eVa8AyaSSffC9Ow288'}>
            <button
                style={{
                    background: 'linear-grcadient(#00DFD8, #007CF0)', color: 'white',
                    border: "1px dashed purple", padding: '10px', marginBottom: '15px',
                    opacity: '0.8', borderRadius: "50%"
                }}>
                Donar
            </button>
            </a>
            <div className="footer__title">
                <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
                    Contactame
                </Gradient>
            </div>
            <div className="footer-social">
                <a href={'https://www.instagram.com/neighbordevcr/'}>
                    <img src="https://img.icons8.com/plasticine/100/000000/instagram-new--v2.png"
                        alt=""
                        style={{ width: "100%" }}
                    /></a>
                <a href={'https://www.facebook.com/NeighborDevCR'}>
                    <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-facebook-social-media-justicon-flat-justicon.png"
                        alt=""
                        style={{ width: "100%" }}
                    /></a>
                <a href={'https://www.linkedin.com/in/bfpr131095/'}>
                    <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png"
                        alt=""
                        style={{ width: "100%" }}
                    /></a>


            </div>
            <div className='footer-container'>
                <div className='footer-left-info'>
                    <img src={PLogo} alt='Logo' />
                    <p>
                        <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
                            Designed & Developed by <a href="https://www.neighbordevcr.com">NeighborDev CR @Copyright</a>{new Date().getFullYear()}
                        </Gradient>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;