import React from 'react';
import Tour from './Tour';

const Tours=({ tours, setRemoveTour })=>{
    return (<>
        <article className={'title'} >
            <h2>Our Tours</h2>
            <div className={'underline'} ></div>
            <div>
                {tours.map((tour)=>{
                    return (
                           <Tour key ={tour.id} {...tour} setRemoveTour={setRemoveTour}></Tour>
                    )})}
            </div>
        </article>
    </>);
};

export default Tours;
