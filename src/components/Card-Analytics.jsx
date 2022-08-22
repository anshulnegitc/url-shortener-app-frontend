import { Fragment, memo, useContext } from "react";
import LayoutContext from "../store";

const View = (props) => {
  const { cardAnalytics } = props;
  const width =
    useContext(LayoutContext) <= (process.env.REACT_APP_MAX_WIDTH || 1000);
  if (width) {
    return cardAnalytics.map((card, index) => (
      <div
        key={card.id + index}
        className="my-2 d-flex justify-content-xxl-center justify-content-xl-center justify-content-lg-center justify-content-start"
      >
        <div className="d-flex">
          {card.name} :{" "}
          {new Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 3,
          }).format(card.count)}
        </div>
      </div>
    ));
  } else {
    return cardAnalytics.map((card, index) => (
      <div className="card border-0" key={card.id + index}>
        <div className="card-body">
          <h5 className="card-title ff-Roboto-M">{card.name}</h5>
          <div style={{ fontSize: "1.3rem" }} className="ff-Roboto-R">
            {new Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(card.count)}
          </div>
        </div>
      </div>
    ));
  }
};
function CardAnalytics(props) {
  const { cardAnalytics } = props;
  return (
    <Fragment>
      <View cardAnalytics={cardAnalytics} />
    </Fragment>
  );
}

export default memo(CardAnalytics);
