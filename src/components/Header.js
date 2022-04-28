import axios from 'axios';
import  {useEffect, useState}  from 'react';
import i18n from '../i18n/i18n';
import { useTranslation } from 'react-i18next';


function Header () {
  const { t } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/menu`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })

  },[])
  const arr = data.map((data, index) =>{
    return (<></>
    )
     
  })
  return (<>  <button type="button" class="btn btn-primary">Submit</button></>
//    <ul>
//      <li>
     
//      </li>
//     {arr}
//     <header>
//           <button className='btn btn-primary' type='button' onClick={() => changeLanguage('en')}>
//           {t('translation:en')}
//           </button>
//           <button className='btn btn-primary' type='button' onClick={() => changeLanguage('ar')}>
//           {t('translation:ar')}
//           </button >
//       </header>
// </ul>
          

  )
 
}

export default Header
