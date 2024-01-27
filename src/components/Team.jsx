import "./Team.css";
import Bookmark from "./Bookmark";
import PropTypes from "prop-types";

import teamLogo from "../../images/team/team.png";

const teamMembersList = [
  {
    imgSrc: "",
    name: "Фио",
    position: "Должность",
    achievements: "Достижения",
  },
  {
    imgSrc: "",
    name: "Фио",
    position: "Должность",
    achievements: "Достижения",
  },
  {
    imgSrc: "",
    name: "Фио",
    position: "Должность",
    achievements: "Достижения",
  },
  {
    imgSrc: "",
    name: "Фио",
    position: "Должность",
    achievements: "Достижения",
  },
  {
    imgSrc: "",
    name: "Фио",
    position: "Должность",
    achievements: "Достижения",
  },
];

const TeamMember = ({ imgSrc, name, position, achievements }) => {
  return (
    <div className="team-member">
      <img src={imgSrc} alt="" style={{ width: "150px", height: "150px" }} />
      <h3>{name}</h3>
      <h4>{position}</h4>
      <p>{achievements}</p>
    </div>
  );
};

TeamMember.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  achievements: PropTypes.string,
};

const Team = () => {
  return (
    <div className="team-container">
      <Bookmark logoImg={teamLogo} />
      <div className="team-info">
        <h1 className="team-title">Команда</h1>
        <div className="team-members">
          {teamMembersList.map((member, index) => (
            <TeamMember
              key={`team-member-${index}`}
              imgSrc={member.imgSrc}
              name={member.name}
              position={member.position}
              achievements={member.achievements}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
