import React from 'react'
import './Equipment.css'
import eos from '../images/equipment/EOS.png'
import anycubic from '../images/equipment/Anycubic.png'
import eos_m270 from '../images/equipment/EOS_M270.png'
import lasersys from '../images/equipment/lasersys.png'
import phrozen from '../images/equipment/phrozen.png'
import prusa_bambu from '../images/equipment/Prusa_Bambu.png'
import stereotech from '../images/equipment/Stereotech.png'

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
  ]

  const equipmentEl = equipment.map((item) => (
    <div
      className='equipment-object'
      key={`${item.itemName}-${item.itemMaterial}`}
    >
      <div className='text-block'>
        <h2 className='equipment-name'>{item.itemName}</h2>
        <p className='equipment-description'>{item.itemDescription}</p>
        <p>Материал:</p>
        <p>{item.itemMaterial}</p>
        <p>Области применения:</p>
        <p>{item.itemUseCase}</p>
      </div>
      <img className='equipment-img' src={item.itemImg} />
    </div>
  ))

  return (
    <div className='equipment-container'>
      <div className='bookmark'></div>
      <div className='equipment'>
        <h1>Оборудование</h1>
        <div className='equipment-objects'>{equipmentEl}</div>
      </div>
    </div>
  )
}
