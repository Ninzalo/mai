import React from 'react'
import './About.css'
import servicesImg from '../images/about__services.png'
import equipmentImg from '../images/about__equipment.png'
import projectsImg from '../images/about__projects.png'

export default function About() {
  const cards = [
    {
      cardName: 'Компетенции',
      cardImg: servicesImg,
      cardText: '',
    },
    {
      cardName: 'Оборудование',
      cardImg: equipmentImg,
      cardText: '',
    },
    {
      cardName: 'Проекты',
      cardImg: projectsImg,
      cardText: '',
    },
  ]

  const cardEls = cards.map((item) => (
    <div className='about-card' key={`about-card-${item.cardName}`}>
      <img
        style={{ width: '150px', height: '150px' }}
        className='card-img'
        src={item.cardImg}
      />
      <div className='text-block'>{item.cardName}</div>
    </div>
  ))

  return (
    <div className='about'>
      <div className='text-block'>
        <h1>О нас</h1>
        <p>
          Лаборатория АТ МАИ осуществляет проектирование , моделирование ,
          прототипирование, сканирование 3D- печать деталей различного
          назначения. <br />
          Мы стремимся внедрить аддитивные технологии в производство деталей
          сложной геометрии в авиации, машиностроении и медицине.
        </p>
      </div>
      <div className='about-cards'>{cardEls}</div>
    </div>
  )
}

// <div className='about-card'>
//   <div className='card-img services-img'></div>
//   <div className='text-block'>Компетенции</div>
// </div>
// <div className='about-card'>
//   <div className='card-img equipment-img'></div>
//   <div className='text-block'>Оборудование</div>
// </div>
// <div className='about-card'>
//   <div className='card-img projects-img'></div>
//   <div className='text-block'>Проекты</div>
// </div>
