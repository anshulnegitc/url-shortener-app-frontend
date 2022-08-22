function Header() {
  return (
    <header className="bg-dark">
      <nav className="navbar navbar-expand-sm navbar-dark max-container mx-auto ff-Roboto-M">
        <img src="./link.png" className="me-3" alt="logo" />
        <span className="navbar-brand">Url Shortener</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a
                className="nav-link active ff-Roboto-R"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ cursor: "pointer" }}
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div className="modal-dialog">
            <div className="modal-content" style={{ borderRadius: "6px" }}>
              <div className="modal-header">
                <h5 className="modal-title ff-Roboto-SB" id="exampleModalLabel">
                  About Project
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="ff-Roboto-M" style={{ lineHeight: "1.8" }}>
                  It is an imitation of Url Shortener service.
                  <br />
                  Project only meet functional requirement
                  <span className="ff-Roboto-SB">
                    &nbsp;i.e generating short url and redirecting to long url.
                  </span>
                  <br />
                  Some analytics are stored based on IP address of user.
                  <br />
                  Technology Stack is as follows
                  <ul>
                    <li>
                      Frontend is build using&nbsp;
                      <span className="ff-Roboto-SB">ReactJs</span>.&nbsp;
                      <span className="ff-Roboto-SB">Bootstrap</span>&nbsp;is
                      used for layout.
                    </li>
                    <li>
                      Backend is build using&nbsp;
                      <span className="ff-Roboto-SB">NodeJs</span>.&nbsp;
                      <span className="ff-Roboto-SB">Redis OM Node</span>
                      &nbsp;is used as ORM.
                    </li>
                    <li>
                      <span className="ff-Roboto-SB">Redis</span>&nbsp;is used
                      as primary as well as caching database.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
