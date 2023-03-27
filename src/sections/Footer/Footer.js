import "./Footer.css";
const Footer = () => {
  // let style;
  // if (props.position === "fixed") {
  //   style = "fixed";
  // } else if (props.position === "relative") {
  //   style = "relative";
  // }
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              Copyright © 2036 <a href="/#">Cyborg Gaming</a> Company. All
              rights reserved.
              <a
                href="https://templatemo.com"
                target="_blank"
                title="free CSS templates"
                rel="noreferrer"
              >
                TemplateMo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
