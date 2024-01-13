import PropTypes from "prop-types";
import "./Bookmark.css";

export default function Bookmark(props) {
  return (
    <div className="bookmark">
      {props.logoImg && (
        <img
          style={{ width: "55px", height: "55px" }}
          className="bookmark-logo"
          src={props.logoImg}
        />
      )}
    </div>
  );
}

Bookmark.propTypes = {
  logoImg: PropTypes.string,
};
