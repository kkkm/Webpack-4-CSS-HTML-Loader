import React from 'react';

const Home = () => {

    return (
        <div>
        <div>This is First SSR !</div>
        <button type="button" className="btn btn-primary" onClick={()=>console.log("This is for Onclick")}>This is First SSR !</button>
        </div>
    )
}

export default Home;