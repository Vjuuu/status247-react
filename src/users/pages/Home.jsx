import React from "react";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
const Home = () => {
  return (
    <div>
      
      

        <section className="banner position-relative mb-4">
          <img
            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt="Trending poster"
            className="img-fluid w-100"
          />
          <div className="banner-content position-absolute bottom-0 start-0 p-3 text-white">
            <h2 className="h4 mb-1">Trending Now</h2>
            <p className="mb-0">Creative Poster</p>
          </div>
        </section>

        <nav className="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <button
            className="nav-link active"
            id="trending-tab"
            data-bs-toggle="tab"
            data-bs-target="#trending"
            type="button"
            role="tab"
            aria-controls="trending"
            aria-selected="true"
          >
            <i className="fas fa-fire me-2"></i>Trending
          </button>
          <button
            className="nav-link"
            id="new-tab"
            data-bs-toggle="tab"
            data-bs-target="#new"
            type="button"
            role="tab"
            aria-controls="new"
            aria-selected="false"
          >
            <i className="fas fa-plus me-2"></i>New
          </button>
          <button
            className="nav-link"
            id="popular-tab"
            data-bs-toggle="tab"
            data-bs-target="#popular"
            type="button"
            role="tab"
            aria-controls="popular"
            aria-selected="false"
          >
            <i className="fas fa-star me-2"></i>Popular
          </button>
          {/* <button className="nav-link" id="seasonal-tab" data-bs-toggle="tab" data-bs-target="#seasonal" type="button" role="tab" aria-controls="seasonal" aria-selected="false">
                <i className="fas fa-calendar me-2"></i>Seasonal
            </button> */}
        </nav>

        <div className="tab-content p-3" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="trending"
            role="tabpanel"
            aria-labelledby="trending-tab"
          >
            <div className="mb-3">
              <label className="mb-3">Maharastra Hair Salon</label>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/salon/01.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/salon/02.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-3">Gandhi Jayanti</label>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/gandhiJayanti/2.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/gandhiJayanti/3.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/gandhiJayanti/4.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/gandhiJayanti/5.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <a href="/mobile-layout/gandhi_jayanti">
                      <div
                        className="card bg-light d-flex justify-content-center align-items-center"
                        style={{ height: "150px !important" }}
                      >
                        <p>View More</p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>

            <div className="mb-3">
              <label className="mb-3">Dashehra</label>
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/dasera/1 (1).png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/dasera/2.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/dasera/3.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card h-100 bg-dark text-white">
                      <img
                        src="assets/posters/dasera/4.png"
                        className="card-img-top btn-poster"
                        alt="Template 1"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <a href="/mobile-layout/dashehra">
                      <div
                        className="card bg-light d-flex justify-content-center align-items-center"
                        style={{ height: "150px !important" }}
                      >
                        <p>View More</p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <div className="swiper-pagination"></div> */}
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="new"
            role="tabpanel"
            aria-labelledby="new-tab"
          >
            New content
          </div>
          <div
            className="tab-pane fade"
            id="popular"
            role="tabpanel"
            aria-labelledby="popular-tab"
          >
            Popular content
          </div>
          {/* <div className="tab-pane fade" id="seasonal" role="tabpanel" aria-labelledby="seasonal-tab">Seasonal content</div> */}
        </div>

        <section className="popular-posters mb-4 p-3">
          <h3 className="h5 mb-3">Upcomming Festival</h3>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card bg-dark text-white">
                <img
                  src="assets/posters/dasera/1 (1).png"
                  className="card-img-top"
                  alt="Nature Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Dashehra</h5>
                  {/* <p className="card-text"></p> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-dark text-white">
                <img
                  src="assets/posters/dasera/2.png"
                  className="card-img-top"
                  alt="Tech Poster"
                />
                <div className="card-body">
                  <h5 className="card-title">Dashehra</h5>
                  {/* <p className="card-text"></p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        
      

      {/* Modal */}
      <div
        className="modal fade "
        id="loadPoster"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src=""
                alt=""
                id="posterPreview"
                className="img-fluid rounded mb-3"
              />
              {/* <h3 className="modal-title mb-3">Gandhi Jayanti</h3> */}
              <a
                href=""
                download=""
                id="btnPosterDownload"
                className="btn btn-primary w-100 rounded mb-4"
              >
                <i className="fa-solid fa-download me-2"></i>Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
