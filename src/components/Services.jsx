import React from 'react'
import './Services.css'

export default function Services() {
  return (
    <div className='services'>
      <div className='bookmark'></div>
      <div className='text-area'>
        <h1>Компетенции</h1>
        <p>Лаборатория занимается:</p>
        <ul className='list'>
          <li className='list-item'>3D-сканированием;</li>
          <li className='list-item'>3D- печатью (SLM,SLS,FDM,DLP);</li>
          <li className='list-item'>Моделированием;</li>
          <li className='list-item'>Прототипированием;</li>
          <li className='list-item'>
            Консалтингом в области аддитивных технологий;
          </li>
          <li className='list-item'>Проведением испытаний прототипов.</li>
        </ul>
      </div>
    </div>
  )
}
