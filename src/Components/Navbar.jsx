export default function Navbar() {
  return (
    <nav className="container d-flex justify-content-center justify-content-between mt-3  align-items-center">
      <div className="logo d-flex align-items-center">
        <h1>
          Hire<span>Swift</span>
        </h1>
      </div>

      <div className="d-flex align-items-center">
        <h6 className="btnh rounded">
          <a className="text-green" href="#">
            Discover
          </a>
        </h6>
        <h6 className="btnh rounded">
          <a className="text-green" href="#">
            For Candidates
          </a>
        </h6>
        <h6 className="btnh rounded">
          <a className="text-green" href="#">
            For Companies
          </a>
        </h6>
        <div className="login">
          <button type="button" className="btnh px-3 py-3 m-1">
            <span className="btn-text">Login</span>
          </button>
          <button type="button" className="btnh px-3 py-3 m-1">
            <span className="btn-text">Sign up</span>
          </button>
        </div>
        <i className="menu-btn ri-menu-3-line"></i>
      </div>
    </nav>
  );
}
