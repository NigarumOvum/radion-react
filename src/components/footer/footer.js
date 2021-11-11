import PLogo from '../media/images/p-logo2.png';
import './footer.scss';
import Gradient from 'rgt';

function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-container'>
        <div className='footer-left-info'>
          <img src={PLogo} alt='Logo' />
          <p>
            <Gradient dir="left-to-right" from="#00DFD8" to="#007CF0">
            Developed|Designed by <a href="https://www.neighbordevcr.com"> NeighborDev CR </a>{new Date().getFullYear()}
                        </Gradient>
         </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;