import "./Partners.css";
import aeromax from "../../images/partners/aeromax.png";
import oak from "../../images/partners/oak.png";
import odk from "../../images/partners/odk.png";
import reshetnev from "../../images/partners/reshetnev.png";
import skoltech from "../../images/partners/skoltech.png";
import technospark from "../../images/partners/technospark.png";

export default function Partners() {
  const partners = [
    {
      partnerImg: aeromax,
    },
    {
      partnerImg: technospark,
    },
    {
      partnerImg: odk,
    },
    {
      partnerImg: reshetnev,
    },
    {
      partnerImg: skoltech,
    },
    {
      partnerImg: oak,
    },
  ];

  const partnersEl = partners.map((item, index) => (
    <div className="partners__item" key={`partner-img-${index}`}>
      <img
        style={{ width: "200px", height: "100px" }}
        src={item.partnerImg}
      ></img>
    </div>
  ));

  return (
    <div className="partners">
      <h1>Партнеры</h1>
      <div className="partners__container">{partnersEl}</div>
    </div>
  );
}
