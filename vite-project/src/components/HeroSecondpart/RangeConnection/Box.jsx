
import Diversity3Icon from '@mui/icons-material/Diversity3';
import './Range.css'

const Box = ({heading,para}) => {
  return (
    <>
    <div className='box-1'>
             <div className="bg">
              <Diversity3Icon/>
             </div>
             <h2>{heading}</h2>
             <p>{para}</p>          
     </div>
    </>
  )
}

export default Box
