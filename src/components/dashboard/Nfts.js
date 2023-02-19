import '../../assets/css/dashboard/Nfts.css';
import Button from "../include/Button"

import eyeverseLogo1 from '../../assets/img/new/eyeverse-logo1.gif';
import paradoxLogo from '../../assets/img/new/paradox-logo.png';
import nft1 from '../../assets/img/new/nft1.png';
import nft2 from '../../assets/img/new/nft2.png';
import nft3 from '../../assets/img/new/nft3.png';
import nft4 from '../../assets/img/new/nft4.png';
import paradox1 from '../../assets/img/new/paradox1.png';
import paradox2 from '../../assets/img/new/paradox2.png';
import paradox3 from '../../assets/img/new/paradox3.png';
import paradox4 from '../../assets/img/new/paradox4.png';

function Nfts () {
  return(
    <div className="inside-nfts">
      <div className='nfts-container'>
        <div className='eyeverse-part'>
          <div className='category-part'>
            <img src={eyeverseLogo1} alt="" />
            <br />
            <span className='category-text text-format'>Eyeverse</span>
          </div>
          <div className='element-container'>
            <div className='element'>
              <img src={nft1} alt="" className='nft-img' />
              <Button name="Collection"/>
            </div>
            <div className='element'>
              <img src={nft2} alt="" className='nft-img' />
              <Button name="Console"/>
            </div>
            <div className='element'>
              <img src={nft3} alt="" className='nft-img' />
              <Button name="Story"/>
            </div>
            <div className='element'>
              <img src={nft4} alt="" className='nft-img' />
              <Button name="FAQs"/>
            </div>
          </div>
        </div>
        <div className='paradox-part'>
          <div className='category-part'>
            <img src={paradoxLogo} alt="" />
            <br />
            <span className='category-text text-format'>Paradox</span>
          </div>
          <div className='element-container'>
            <div className='element'>
              <img src={paradox1} alt="" className='nft-img' />
              <Button name="Mint"/>
            </div>
            <div className='element'>
              <img src={paradox2} alt="" className='nft-img' />
              <Button name="Collection"/>
            </div>
            <div className='element'>
              <img src={paradox3} alt="" className='nft-img' />
              <Button name="Story "/>
            </div>
            <div className='element'>
              <img src={paradox4} alt="" className='nft-img' />
              <Button name="Hallway"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nfts;