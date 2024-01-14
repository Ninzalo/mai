import "./Equipment.css";
import Bookmark from "./Bookmark";
import React from "react";
import PropTypes from "prop-types";

import anycubic from "../../images/equipment/Anycubic.png";
import eos from "../../images/equipment/EOS.png";
import eosM270 from "../../images/equipment/EOS_M270.png";
import lasersys from "../../images/equipment/lasersys.png";
import phrozen from "../../images/equipment/phrozen.png";
import prusaBambu from "../../images/equipment/Prusa_Bambu.png";
import stereotech from "../../images/equipment/Stereotech.png";

import about__equipment from "../../images/about__equipment.png";

import leftArrow from "../../images/icons/left-arrow.png";
import rightArrow from "../../images/icons/right-arrow.png";

const MAX_VISIBILITY = 3;

const equipment = [
  {
    equipmentName: "EOS P395 (SLS-печать)",
    equipmentImg: eos,
    equipmentInnerText: (
      <>
        <p>Габариты камеры: 340х340х600 мм </p>
        <p>Высота слоя: от 100 мкм </p>
        <p>Минимальный размер печатаемых элементов: 400 мкм</p>
        <h3>Материал:</h3>
        <ul>
          <li>Полиамид PA2200</li>
          <li>Полимер на основе нейлона в форме белого порошка</li>
        </ul>
        <h3>Применение:</h3>
        <ul>
          <li>Изделия сложной геометрии;</li>
          <li>Функциональные прототипы;</li>
          <li>Корпусные изделия с высоким качеством поверхности.</li>
        </ul>
      </>
    ),
  },
  {
    equipmentName: "Original Prusa i3 Mk3 MMU2, Bambu Lab (FDM-печать)",
    equipmentImg: prusaBambu,
    equipmentInnerText: (
      <>
        <p>Габариты камеры: макс. 400х400х450 мм</p>
        <p>Высота слоя: 200 мкм</p>
        <p>Минимальный размер печатаемых элементов: 500 мкм</p>
        <h3>Материал:</h3>
        <ul>
          <li>Пластики ABS, PLA, ASA</li>
          <li>Материалы с наполнителями (в т.ч. Антипирены)</li>
        </ul>
        <h3>Применение:</h3>
        <ul>
          <li>Прототипы изделий;</li>
          <li>Макеты;</li>
          <li>Корпусные изделия, не требующие высокой точности исполнения.</li>
        </ul>
      </>
    ),
  },
  {
    equipmentName: "5D-принтер Stereotech 530 HYBRID (FDM-печать)",
    equipmentImg: stereotech,
    equipmentInnerText: (
      <>
        <p>Габариты камеры: макс. 330х330х250 мм </p>
        <p>Высота слоя: 200 мкм </p>
        <p>Минимальный размер печатаемых элементов: 500 мкм</p>
        <h3>Материал:</h3>
        <ul>
          <li>Пластики ABS, PLA, ASA</li>
          <li>Материалы с наполнителями (в т.ч. Антипирены)</li>
        </ul>
        <h3>Применение:</h3>
        <ul>
          <li>Прототипы изделий;</li>
          <li>Макеты;</li>
          <li>Корпусные изделия, не требующие высокой точности исполнения.</li>
        </ul>
      </>
    ),
  },
  {
    equipmentName: "Anycubic Photon M3 Max",
    equipmentImg: anycubic,
    equipmentInnerText: (
      <>
        <p>Габариты камеры: макс. 300х298х164 мм</p>
        <p>Высота слоя: от 10 мкм</p>
        <p>Минимальный размер печатаемых элементов: 100 мкм</p>
        <h3>Материал:</h3>
        <ul>
          <li>Фотополимерные смолы</li>
        </ul>
        <h3>Применение:</h3>
        <ul>
          <li>Точные изделия сложной геометрии;</li>
          <li>Прототипы высокого качества.</li>
          <li>Мастер-модели для точного литья;</li>
        </ul>
      </>
    ),
  },
  {
    equipmentName: "Phrozen Sonic Mega 8K",
    equipmentImg: phrozen,
    equipmentInnerText: (
      <>
        <p>Габариты камеры: 330х185х400 мм</p>
        <p>Высота слоя: от 10 мкм</p>
        <p>Минимальный размер печатаемых элементов: 100 мкм</p>
        <h3>Материал:</h3>
        <ul>
          <li>Фотополимерные смолы</li>
        </ul>
        <h3>Применение:</h3>
        <ul>
          <li>Точные изделия сложной геометрии;</li>
          <li>Прототипы высокого качества.</li>
          <li>Мастер-модели для точного литья;</li>
        </ul>
      </>
    ),
  },
  {
    equipmentName: "Лазерные системы M350",
    equipmentImg: lasersys,
    equipmentInnerText: (
      <>
        <p>Габариты камеры: 350x350x350 мм</p>
        <p>Высота слоя: от 20 мкм</p>
        <h3>Материал:</h3>
        <ul>
          <li>Стали (316L, 17-4PH. 12Х18Н10Т);</li>
          <li>Сплавы титана (Ti6Al4V, ВТ-14, ВТ-20);</li>
          <li>Сплавы никеля (Inconel 718/939/625);</li>
          <li>Сплавы алюминия (AlSi10Mg, AlSi9Cu3);</li>
          <li>Медные сплавы.</li>
        </ul>
        <h3>Применение:</h3>
        <ul>
          <li> Рабочие высоконагруженные изделия;</li>
          <li>
            Изделия со сложной внутренней геометрией, непригодные для
            производства традиционными методами.
          </li>
        </ul>
      </>
    ),
  },
  {
    equipmentName: "EOS M270",
    equipmentImg: eosM270,
    equipmentInnerText: (
      <>
        <p>Габариты камеры: 250х250х215 мм</p>
        <p>Высота слоя: от 10 мкм</p>
        <h3>Материал:</h3>
        <ul>
          <li>Стали (316L, 17-4PH. 12Х18Н10Т);</li>
          <li>Сплавы титана (Ti6Al4V, ВТ-14, ВТ-20);</li>
          <li>Сплавы никеля (Inconel 718/939/625);</li>
          <li>Сплавы алюминия (AlSi10Mg, AlSi9Cu3);</li>
          <li>Медные сплавы.</li>
        </ul>
        <h3>Применение:</h3>
        <ul>
          <li> Рабочие высоконагруженные изделия;</li>
          <li>
            Изделия со сложной внутренней геометрией, непригодные для
            производства традиционными методами.
          </li>
        </ul>
      </>
    ),
  },
  {
    equipmentName: "",
    equipmentImg: "images/equipment/",
    equipmentInnerText: <></>,
  },
  {
    equipmentName: "",
    equipmentImg: "images/equipment/",
    equipmentInnerText: <></>,
  },
];

const EquipmentCard = ({ equipmentName, equipmentImg, equipmentInnerText }) => (
  <div className="equipment-item">
    <h1 className="equipment-item__title">{equipmentName}</h1>
    <img src={equipmentImg} />
    <div className="equipment-item__inner-text">{equipmentInnerText}</div>
  </div>
);

EquipmentCard.propTypes = {
  equipmentName: PropTypes.string,
  equipmentImg: PropTypes.string,
  equipmentInnerText: PropTypes.node,
};

const Carousel = ({ children }) => {
  const [active, setActive] = React.useState(0);
  const count = React.Children.count(children);
  const [maxHeight, setMaxHeight] = React.useState(0);
  const refs = [...new Array(count)].map(() => React.useRef(null));
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    console.log(window.innerHeight);
    refs.forEach((ref) => {
      if (ref.current) {
        const currentHeight = ref.current.clientHeight;
        if (currentHeight > maxHeight) {
          setMaxHeight(currentHeight);
        }
      }
    });
  }, [refs, windowHeight]);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((i) => i - 1)}>
          <img src={leftArrow} />
        </button>
      )}
      <div
        className="carousel__placeholder"
        style={{ height: `${maxHeight}px` }}
      >
        <div className="carousel">
          {React.Children.map(children, (child, i) => (
            <div
              ref={refs[i]}
              className="card-container"
              style={{
                "--offset": (active - i) / 3,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                dispay:
                  Math.abs(active - i) >= MAX_VISIBILITY ? "none" : "flex",
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((i) => i + 1)}>
          <img src={rightArrow} />
        </button>
      )}
    </>
  );
};

// {React.Children.map(children, (child, i) => (
//   <div
//     className="card-container"
//     style={{
//       "--offset": (active - i) / 3,
//       "--direction": Math.sign(active - i),
//       "--abs-offset": Math.abs(active - i) / 3,
//       opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
//       display:
//         Math.abs(active - i) > MAX_VISIBILITY ? "none" : "flex",
//     }}
//   >
//     {child}
//   </div>
// ))}

Carousel.propTypes = {
  children: PropTypes.node,
};

const Equipment = () => {
  const equipmentEl = equipment
    .filter((equipment) => equipment.equipmentName && equipment.equipmentImg)
    .map((equipment, i) => (
      <EquipmentCard
        key={`equipment-card__${i}`}
        equipmentName={equipment.equipmentName}
        equipmentImg={equipment.equipmentImg}
        equipmentInnerText={equipment.equipmentInnerText}
      />
    ));

  return (
    <div className="equipment-container">
      <Bookmark logoImg={about__equipment} />
      <div className="equipment">
        <h1>Оборудование</h1>
        <div className="equipment__carousel">
          <Carousel>{equipmentEl}</Carousel>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
