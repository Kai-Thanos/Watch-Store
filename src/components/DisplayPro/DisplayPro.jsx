import './DisplayPro.css'

import WatchItem from '../WatchItems/WatchItem'
import { product_list } from '../../assets/assets'
import Contact from '../Contact/Contact'


const DisplayPro = ({category}) => { //From Home.jsx

  return (
    <>
      <div className='display-pro'>
          {product_list.map((item, index)=>{
              if(category==="All" || category===item.category){
                  return <WatchItem key={index} id={item._id} name={item.name} price={item.price} img={item.img}/>
              }
          })}
      </div>
      <Contact/>
    </>
  )
}

export default DisplayPro
