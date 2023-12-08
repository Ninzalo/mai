import React from 'react'
import './Projects.css'
import pr1 from '../images/projects/pr1.png'
import pr2 from '../images/projects/pr2.png'
import Bookmark from './Bookmark'
import projectsLogoImg from '../images/about__projects.png'

export default function Projects() {
  const projects = [
    {
      projectName: 'Модель самолета Ту-324 Aurus',
      projectImg: pr1,
      projectDescription:
        'Модель распечатана на SLS-установке EOS P395 из порошка полиамида PA 2200. Обработана и покрашена по специально изготовленным в лаборатории трафаретам в соответствии с дизайном заказчика.',
    },
    {
      projectName: 'Робот ЕВА',
      projectImg: pr2,
      projectDescription:
        'С нуля по референсам создали дизайн робота высотой 175 см в программном комплексе zBrush. Печатали из пластиковой нити PETG и жидкого фотополимера по технологиям FDM и SLA. Для достижения товарного вида проводили постобработку и покраску поверхности.',
    },
  ]

  const projectsEl = projects.map((project) => (
    <div className='project__card' key={project.projectName}>
      <img className='project__img' src={project.projectImg}></img>
      <div className='project__info'>
        <h3>{project.projectName}</h3>
        <p>{project.projectDescription}</p>
      </div>
    </div>
  ))

  return (
    <div className='projects-container'>
      <Bookmark logoImg={projectsLogoImg} />
      <div className='projects'>
        <h1>Проекты</h1>
        <div className='projects-list'>{projectsEl}</div>
      </div>
    </div>
  )
}
