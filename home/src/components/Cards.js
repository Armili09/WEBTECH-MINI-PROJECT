import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
function Cards() {
  return (
    <div className='cards'>
      <h2>No Collegewise office near you? No problem. At Collegewise, great college advice isn't confined to our physical offices. A meeting with your Collegewise counselor is just a click away.</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Check out which colleges provide your favorite course'
              label='Courses'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='How COVID-19 Impacts College Admissions'
              label='COVID-19'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;