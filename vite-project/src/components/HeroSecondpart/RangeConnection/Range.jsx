import Box from './Box'
import './Range.css'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Range = () => {
  return (
    <>
       <div className='Range-Container'>
            <div className='Empower'>
                 <h4>Empower</h4>
                  <h2>Unlock Your Potential with UNYN</h2>
                 <div className='txt'>
                 <span>At UNYN, we offer a range of impactful programs and events designed to empower young individuals. From mentorship programs to networking events and international collaborations, we provide the resources and support needed to help you thrive.</span>
                 </div>

            </div>

            <div className='List-grid'>
                  <Box 
                  icon={Diversity3Icon}
                  heading="Mentorship Programs"
                  para="Connect with experienced mentors who will guide you towards success."
                />

                <Box 
                  icon={Diversity3Icon}
                  heading="Networking Events"
                  para="Expand your network and forge valuable connections with like- minded individual."
                />


                <Box 
                  icon={Diversity3Icon}
                  heading="International Collaborations"
                  para="Gain global exposure and collaborate with students from different ocuntries."
                />
            </div>

            <div className='buttons'>
            <button className="button-22" role="button">Join</button> 
             <p className='pbtn'>Learn More </p>
        </div>


          <main className='potential'>
               <div className='left-t'>
                     <h3>Unlock Your Potential and Make a Lasting Impact with UNYN</h3>
                     <p>
                     Joining UNYN offers a unique opportunity for personal growth, professional development, and making a positive difference in the world. Our dynamic and impactful international student society is dedicated to nurturing the talents and potential of young individuals across colleges and universities worldwide. Through our diverse range of programs, events, and initiatives, we empower the youth today to create a brighter and more promising future for tomorrow.</p>

               </div>

               <div className='right-t'>
                  <img src='./Images/group.png'/>
               </div>
          </main>

          <main className='Testimonial'>
             <div className='test-text'>
                <h2>Member Testimonials</h2>
                <p>Here what our members have to say about their experience with UNYN</p>
             </div>
             <div className='test-img'>
                <img src='./Images/testimonial.png'/>
             </div>
          </main>

          <main className='join'>
               <div className='join-bar'>
                   <h2>Empowering Your Potential with UNYN </h2>
                   <p>Join UNYN and unlock endless opportunities for growth</p>
               </div>

               <div className='buttons-2'>
              
               <button className='f'>Join</button>
               <button  className='f f2'>get evolved</button>
    
               </div>
          </main>
       </div>
    </>
  )
}

export default Range
