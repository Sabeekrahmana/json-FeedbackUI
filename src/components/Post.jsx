import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

const Post = () => {
    const status = 501
    const navigate = useNavigate()

    if( status === 404){
       return (<Navigate to='/notfound'/>
       )
    }
    // const params = useParams()


    const onClick = () =>{
        console.log('Bismillah');
        navigate('/about');
    }

  return (  
    <div>
        {/* <h1>Id {params.id} </h1>
        <h1>Name: {params.name} </h1> */}
        Post----New
        <button onClick={onClick}>Click Here</button>
        <Routes>
            <Route path='/show' element={<h2>Assalamu Alaikum</h2>}/>
        </Routes>
    </div>
  )
}

export default Post;