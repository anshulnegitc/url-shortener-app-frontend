import { memo, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
import LayoutContext from "../store";

function Expression(props) {
  const { exp, updateExpression } = props;
  const width =
    useContext(LayoutContext) <= (process.env.REACT_APP_MAX_WIDTH || 1000);
  return (
    <div className="card border-0">
      <div className="card-body">
        <ul
          className="list-unstyled ff-Roboto-SB"
          style={{ fontSize: width ? "1rem" : "1.4rem" }}
        >
          <li>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-primary me-3 cursor-pointer"
              onClick={() => updateExpression(exp.like.id)}
            />
            {exp.like.count}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-danger me-3 cursor-pointer"
              onClick={() => updateExpression(exp.heart.id)}
            />
            {exp.heart.count}
          </li>
          <li>
            <FontAwesomeIcon
              icon={faStar}
              className="text-warning me-3 cursor-pointer"
              onClick={() => updateExpression(exp.star.id)}
            />
            {exp.star.count}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(Expression);
