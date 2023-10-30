
import './Navbar.css'

const Navbar = () => {
  return (
   <>
      <div className='navbar'>
          <div className='container'>
            <div className='logo'>
              <h1>UNYN</h1>
            </div>
                <div className='wrapper'>
                        <ul className='wrapper'>
                       <li>About Us</li>  
                       <li>Services</li>
                       <li>Events</li>  
                       <li>More</li>   
                              
                            </ul>
                            <button className="button-21" role="button">Contact Us</button>
                </div>
 
          </div>
      </div>
   </>
  )
}

export default Navbar
