
import './Hero.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Heropage = () => {
  return (
    <>
     <div className='hero-container'>
         <div className='left-div'>
             <h1>Empowering Youth for a Brighter Future</h1>
             <p> United Youth Network (UNYN) is a dynamic and impactful
             international student society committed to nurturing the talents and potential of young individuals across colleges and universities of different countries. Join us today to be a part of our mission to create a brighter and more promising future.
             Join
             Learn More</p>

             <div className='buttons'>
                 <button className="button-22" role="button">Join</button> 
                  <p className='pbtn'>Learn More</p>
             </div>
         </div>

         <div className='right'>
            <img src='./Images/hero.png'/>
              <div className='texts'>
              <h3>Empower the Youth Today</h3>
              <h4>Unlock Your Potential and Make a Diffrence</h4>
              </div>

            <div className='arrows'>
                <MoreHorizIcon className='dot'/>
                <div className='direction-arrow'>
                    <ArrowCircleLeftOutlinedIcon className='l'/>
                    <ArrowCircleRightOutlinedIcon className='r'/>

                </div>
            </div>
         </div>
     </div>
    </>
  )
}

export default Heropage
