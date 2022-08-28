import { Fragment, useState, memo, useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import copy from "copy-to-clipboard";
import api from "../api";
import LayoutContext from "../store";

const Icon = memo(() => <FontAwesomeIcon icon={faCopy} />);

function GenerateLink(props) {
  const width =
    useContext(LayoutContext) <= (process.env.REACT_APP_MAX_WIDTH || 1000);

  const [longUrl, setLongUrl] = useState("");
  const prevLongUrl = useRef("");
  const [shortUrl, setShortUrl] = useState("");
  const [loader, setLoader] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (prevLongUrl.current === longUrl) {
      alert("Paste new Link!");
    } else {
      setLoader(true);
      api.createShortUrl(longUrl).then((res) => {
        prevLongUrl.current = longUrl;
        setShortUrl(process.env.REACT_APP_BASE_URL + res.data.data.shortUrl);
      });
      props.incrLinkGen();
      setLoader(false);
    }
  };

  return (
    <Fragment>
      <form onSubmit={submit}>
        <div className={width ? "input-group" : "input-group input-group-lg"}>
          <input
            type="text"
            className="form-control ff-Roboto-R"
            placeholder="Paste your link here..."
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          {loader ? (
            <button
              className="btn btn-outline-secondary"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm  me-3 ff-Roboto-R"
                role="status"
                aria-hidden="true"
              ></span>
              Generating...
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-secondary ff-Roboto-R"
              disabled={!longUrl.length}
            >
              Generate
            </button>
          )}
        </div>
      </form>
      <div className="d-flex justify-content-center mt-3">
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-10 col-12">
          <div className={width ? "input-group" : "input-group input-group-lg"}>
            <input
              type="text"
              className="form-control"
              value={shortUrl}
              readOnly
              placeholder="Short Url"
            />
            <button
              type="submit"
              className="btn btn-outline-secondary ff-Roboto-M"
              onClick={() => copy(shortUrl)}
            >
              <Icon />
            </button>
          </div>
          <div className="form-text text-muted text-center ff-Roboto-SB">
            Link is valid for 30mins.
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(GenerateLink);
