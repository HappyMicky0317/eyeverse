import '../../assets/css/dashboard/Tools.css';
import Button from '../../components/include/Button'
import eyeLogo from '../../assets/img/new/eye-logo.png'

function Tools() {
  return(
    <div className="inside-tools">
      <div>
        <div className='category-part'>
          <img src={eyeLogo} alt="" />
          <br />
          <span className='category-text text-format'>Tools & Utilities</span>
        </div>
        <div className='tool-main-container'>
          <div className='tool-container'>
            <div className='sub-tool-container'>
              <h1 className='text-format'>Marketplace</h1>
              <Button name="Browse" />
            </div>
            <div className='sub-tool-container' style={{marginTop:"50px"}}>
              <h1 className='text-format'>Extension</h1>
              <Button name="Download" />
            </div>
          </div>
          <div className='console-container'>
            <h1 className='text-format console-text'>Console</h1>
            <h1 className='text-format console-text'>Over 20+ Tools & Utilities For Holders</h1>
            <Button name="Launch Console" />
          </div>
          <div className='tool-container'>
            <div className='sub-tool-container'>
              <h1 className='text-format'>Bot</h1>
              <Button name="Try" />
            </div>
            <div className='sub-tool-container' style={{marginTop:"50px"}}>
              <h1 className='text-format'>Builder</h1>
              <Button name="Explore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools;