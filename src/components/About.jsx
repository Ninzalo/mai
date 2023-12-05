import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about'>
      <div className='text-block'>
        <h1>О нас</h1>
        <p>
          Лаборатория АТ МАИ осуществляет проектирование , моделирование ,
          прототипирование, сканирование 3D- печать деталей различного
          назначения.
        </p>
        <p>
          Мы стремимся внедрить аддитивные технологии в производство деталей
          сложной геометрии в авиации, машиностроении и медицине.
        </p>
      </div>
      <div className='about-cards'>
        <div className='about-card'>
          <div className='card-img services-img'></div>
          <div className='text-block'>Компетенции</div>
        </div>
        <div className='about-card'>
          <div className='card-img equipment-img'></div>
          <div className='text-block'>Оборудование</div>
        </div>
        <div className='about-card'>
          <div className='card-img projects-img'></div>
          <div className='text-block'>Проекты</div>
        </div>
      </div>
    </div>
  )
}
