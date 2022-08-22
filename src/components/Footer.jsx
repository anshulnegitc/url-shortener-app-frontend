import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const contact = [
    {
      icon: faDev,
      link: "https://dev.to/anshulnegitc",
    },
    {
      icon: faGithubSquare,
      link: "https://github.com/anshulnegitc",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/anshul-negi-01a3b6184/",
    },
    {
      icon: faTwitterSquare,
      link: "https://twitter.com/AnshulN86580177",
    },
  ];
  return (
    <footer className="max-container mx-auto w-100 mt-auto">
      <div className="d-flex flex-wrap justify-content-between py-4 border-top">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-12 d-flex justify-content-xxl-start justify-content-xl-start justify-content-lg-start justify-content-center">
          <span className="text-muted text-xxl-start text-xl-start text-lg-start text-center ff-Roboto-M">
            <strong className="ff-Roboto-SB">
              Category : MEAN/MERN Mavericks
            </strong>
            <br />
            Submitted to{" "}
            <strong className="ff-Roboto-SB">Redis Hackathon</strong>{" "}
            <br className="d-xxl-none d-xl-none d-lg-none d-block" />
            on <strong className="ff-Roboto-SB">DEV</strong> by{" "}
            <strong className="ff-Roboto-SB">Anshul Negi</strong>
          </span>
        </div>

        <ul className="nav col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 list-unstyled d-flex justify-content-xxl-end justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center  mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-3">
          {contact.map((c, index) => (
            <li className="ms-2" key={"contact" + index}>
              <a className="text-muted" href={c.link} target="_blank">
                <FontAwesomeIcon
                  icon={c.icon}
                  className="text-secondary me-3 cursor-pointer fs-3"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
