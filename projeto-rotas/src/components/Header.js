import {Link} from 'react-router-dom';


function Header1() {
    return (
      <>
      <div>
        <header className="header">
            <Link to='/harley' className='linkTo'>HARLEY</Link>
            <Link to='/suzuky' className="linkTo">SUZUKI</Link>
            <Link to='/honda' className="linkTo">HONDA</Link>
            <Link to='/yamaha' className="linkTo">YAMAHA</Link>
            <Link to='/lambreta' className="linkTo">LAMBRETA</Link>
        </header>
      </div>
      </>
    );
  }
  
  export default Header1;