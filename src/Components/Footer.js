import React from "react";
import { Link } from "react-router-dom";
const DownPage = () => {
  return (
    <>
    <div className="container-fluid mt-5">
  <footer className="bg-light">
    <div className="container mt-5">
      <div className="row py-4">
        <div className="col-md-4 text-center text-md-start">
          <p className="mb-0 text-muted">&copy; 2023-24 Project Blaze</p>
        </div>
        <div className="col-md-4 text-center">
          <Link to="/" className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-dark text-decoration-none">
            <img src="/images/Brand.png" width="140" alt="Project Blaze Logo"/>
          </Link>
        </div>
        <div className="col-md-4 text-center text-md-end">
          <ul className="nav justify-content-center justify-content-md-end">
            <li className="nav-item">
              <Link to="/disclaimer" className="nav-link px-2 text-muted">Disclaimer</Link>
            </li>
            <li className="nav-item">
              <Link to="/tac" className="nav-link px-2 text-muted">Terms&amp;Conditions</Link>
            </li>
            <li className="nav-item">
              <Link to="/privacypolicy" className="nav-link px-2 text-muted">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="text-center my-4">
        <p className="text-muted mb-0">Made with &hearts; by <a href="https://www.linkedin.com/in/mrtechnostart/" className="text-danger text-decoration-none fw-bold" target={"_blank"} rel="noreferrer">MrTechnoStart</a></p>
      </div>
    </div>
  </footer>
</div>

    </>
  );
};

export default DownPage;
