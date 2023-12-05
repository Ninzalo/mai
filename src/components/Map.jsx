import React from 'react'
import './Map.css'
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps'

export default function MapsComponent() {
  return (
    <div className='maps-component'>
      <div className='info-block'>
        <h1>Карта</h1>
        <p>г. Москва, Ленинградское ш., владение 5</p>
        <p>Руководитель: </p>
        <p>Телефон: </p>
        <p>Почта: </p>
      </div>
      <div className='map-block'>
        <YMaps>
          <Map
            width='100%'
            height='500px'
            defaultState={{
              center: [55.810942, 37.503707],
              zoom: 17,
            }}
          >
            <Placemark geometry={[55.810942, 37.503707]} />
            <ZoomControl options={{ float: 'right' }} />
          </Map>
        </YMaps>
      </div>
    </div>
  )
}
