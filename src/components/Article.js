import React, { useEffect, useState } from 'react'
import SkeletonArticle from './Skeletons/SkeletonArticle';
import {Row, Col} from 'react-bootstrap'


const Article = () => {

 const [articles,setArticles] = useState(null);

 useEffect (() => {
   
     setTimeout ( async () => {

        const res = await fetch ('https://jsonplaceholder.typicode.com/photos');
        const data = await res.json();
        setArticles(data);
     }, 5000)


 } )

  return (
    <div className="article">
      <h2 className='text-center'>Photo Album</h2>
    <Row>
      <Col sm = {6} className="justify-content-center m-auto">
    {articles && articles.map(article => (
     <div className='article' key = {article.id}>
       {/* <div className='all-photos' style={{display:'row'}}>
          
         
         
     </div> */}
<div class="container">
  <div class="row">
    <div class="col-sm">
      <div className='photo-img'><img src={article.thumbnailUrl } alt='' /></div>
    </div>
    <div class="col-sm">
      <div className='photo-titl'><h4>{ article.title }</h4></div>
    </div>    
  </div>
</div>

</div>
    ))}

{!articles && [1,2,3,4,5].map((n) => <SkeletonArticle key={n} />)}
</Col>
</Row>
    </div>

    
  )
}

export default Article