import "./Partners.css";

export default function Partners() {
  const partners = [
    {
      partnerImg: "images/partners/aeromax.png",
    },
    {
      partnerImg: "images/partners/technospark.png",
    },
    {
      partnerImg: "images/partners/odk.png",
    },
    {
      partnerImg: "images/partners/reshetnev.png",
    },
    {
      partnerImg: "images/partners/skoltech.png",
    },
    {
      partnerImg: "images/partners/oak.png",
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
