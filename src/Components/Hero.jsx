export default function Hero() {
  return (
    <>
      <section className=" hero-mobile container d-flex justify-content-center align-items-center justify-content-between my-5">
        <div className="cap">
          <h1>
            Connecting the <br />
            <span>Right</span> People <br />
            with the
            <br />
            Right <span>Opportunities</span>
          </h1>
          <div className="hire-btn  ">
            <button type="button" className="btnh btn-login px-3 py-2 mt-3 me-3">
              <span className="btn-text">Find your next hire</span>
            </button>
            <button type="button" className="btnh px-3 py-2 mt-3 m-0">
              <span className="btn-text">Find your next job</span>
            </button>
          </div>
        </div>

        <img  className="hero-img" src="/Images/Frame.svg" />
      </section>
    </>
  );
}
