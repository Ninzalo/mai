import React from 'react'
import './Equipment.css'
import eos from '../images/equipment/EOS.png'
import anycubic from '../images/equipment/Anycubic.png'
import eos_m270 from '../images/equipment/EOS_M270.png'
import lasersys from '../images/equipment/lasersys.png'
import phrozen from '../images/equipment/phrozen.png'
import prusa_bambu from '../images/equipment/Prusa_Bambu.png'
import stereotech from '../images/equipment/Stereotech.png'
import Bookmark from './Bookmark'
import equipmentLogoImg from '../images/about__equipment.png'

export default function Equipment() {
  const equipment = [
    {
      itemName: 'EOS P395',
      itemImg: eos,
      itemMaterial: `Полиамид PA2200
Полимер на основе нейлона в форме белого порошка`,
      itemDescription: `Габариты камеры: 340х340х600 мм
Высота слоя: от 100 мкм
Минимальный размер печатаемых элементов: 400 мкм`,
      itemUseCase: `Изделия сложной геометрии;
Функциональные прототипы;
Корпусные изделия с высоким качеством поверхности.`,
    },
    {
      itemName: 'Original Prusa i3 Mk3 MMU2, Bambu Lab',
      itemImg: prusa_bambu,
      itemMaterial: `Пластики ABS, PLA, ASA
Материалы с наполнителями (в т.ч. Антипирены`,
      itemDescription: `Габариты камеры: макс. 400х400х450 мм
Высота слоя:  200 мкм
Минимальный размер печатаемых элементов: 500 мкм`,
      itemUseCase: `Прототипы изделий;
Макеты;
Корпусные изделия, не требующие высокой точности исполнения.`,
    },
    {
      itemName: '5D-принтер Stereotech 530 HYBRID',
      itemImg: stereotech,
      itemMaterial: `Пластики ABS, PLA, ASA
Материалы с наполнителями (в т.ч. Антипирены)`,
      itemDescription: `Габариты камеры: макс. 330х330х250 мм 
Высота слоя: 200 мкм 
Минимальный размер печатаемых элементов: 500 мкм`,
      itemUseCase: `Прототипы изделий;
Макеты;
Корпусные изделия, не требующие высокой точности исполнения.`,
    },
    {
      itemName: 'Anycubic Photon M3 Max',
      itemImg: anycubic,
      itemMaterial: `Фотополимерные смолы`,
      itemDescription: `макс. габариты камеры:
300х298х164 мм
Высота слоя: от 10 мкм
Минимальный размер печатаемых
элементов: 100 мкм`,
      itemUseCase: `Точные изделия сложной геометрии;
Мастер-модели для точного литья;
Прототипы высокого качества.`,
    },
    {
      itemName: 'Phrozen Sonic Mega 8K',
      itemImg: phrozen,
      itemMaterial: `Фотополимерные смолы`,
      itemDescription: `Габариты камеры: 330х185х400 мм
Высота слоя: от 10 мкм
Минимальный размер печатаемых элементов: 100`,
      itemUseCase: `Точные изделия сложной геометрии;
Мастер-модели для точного литья;
Прототипы высокого качества.`,
    },
    {
      itemName: 'Лазерные системы M350',
      itemImg: lasersys,
      itemMaterial: `Стали (316L, 17-4PH. 12Х18Н10Т);
Сплавы титана (Ti6Al4V, ВТ-14, ВТ-20);
Сплавы никеля (Inconel 718/939/625);
Сплавы алюминия (AlSi10Mg, AlSi9Cu3);
Медные сплавы.`,
      itemDescription: `Габариты камеры: 350x350x350 мм
Высота слоя: от 20 мкм`,
      itemUseCase: `Рабочие высоконагруженные изделия;
Изделия со сложной внутренней геометрией, непригодные для производства традиционными методами.`,
    },
    {
      itemName: 'EOS M270',
      itemImg: eos_m270,
      itemMaterial: `Стали (316L, 17-4PH. 12Х18Н10Т);
Сплавы титана (Ti6Al4V, ВТ-14, ВТ-20);
Сплавы никеля (Inconel 718/939/625);
Сплавы алюминия (AlSi10Mg, AlSi9Cu3);
Медные сплавы.`,
      itemDescription: `Габариты камеры: 250х250х215 мм
Высота слоя: от 10 мкм`,
      itemUseCase: `Рабочие высоконагруженные изделия;
Изделия со сложной внутренней геометрией, непригодные для производства традиционными методами.`,
    },
    {
      itemName: 'Координатно-измерительная машина FARO ARM EDGE',
      itemImg: '',
      itemMaterial: ``,
      itemDescription: `Контактный щуп FARO
Оптический излучатель Kreon Zephyr 50
Габариты объекта: до 1.2 м
Точность: от 30 мкм`,
      itemUseCase: ``,
    },
    {
      itemName: '3D-сканер RangeVision Spectrum',
      itemImg: '',
      itemMaterial: ``,
      itemDescription: `Две промышленные камеры для более точного определения 3D точки и 3 области сканирования
Габариты объекта: до 3 м
Точность: от 40 мкм`,
      itemUseCase: ``,
    },
    {
      itemName: 'Портативный оптический сканер FARO Focus 3D',
      itemImg: '',
      itemMaterial: ``,
      itemDescription: `Лазерный сканер с высокой скоростью обработки данных и высокой эффективностью
Габариты объекта: до 10 м
Точность: от 100 мкм на 4 метра`,
      itemUseCase: ``,
    },
    {
      itemName: ' Scanform L5',
      itemImg: '',
      itemMaterial: ``,
      itemDescription: `Ручной 3D-сканер, работающий по технологии триангуляции лазерной сетки
Габариты объекта: до 4 м
Точность: до 40 мкм`,
      itemUseCase: ``,
    },
  ]

  const equipmentEl = equipment.map((item) => (
    <div
      className='equipment-object'
      key={`equipment-object-${item.itemName}-${item.itemMaterial}`}
    >
      <div className='text-block'>
        <h2 className='equipment-name'>{item.itemName}</h2>
        {item.itemDescription && (
          <p className='equipment-description'>{item.itemDescription}</p>
        )}
        {item.itemMaterial && (
          <p>
            Материал: <br />
            {item.itemMaterial}
          </p>
        )}
        {item.itemUseCase && (
          <p>
            Области применения: <br />
            {item.itemUseCase}
          </p>
        )}
      </div>
      <img className='equipment-img' src={item.itemImg} />
    </div>
  ))

  return (
    <div className='equipment-container'>
      <Bookmark logoImg={equipmentLogoImg} />
      <div className='equipment'>
        <h1>Оборудование</h1>
        <div className='equipment-objects'>{equipmentEl}</div>
      </div>
    </div>
  )
}
