import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header text-center mt-5">
            <h1>PARQUEADERO SOFKA - ANJUL</h1>
          </div>
          <div className="carousel slide container" id="carousel-649708">
            <ol className="carousel-indicators">
              <li
                data-slide-to="0"
                data-target="#carousel-649708"
                className="active"
              ></li>
              <li data-slide-to="1" data-target="#carousel-649708"></li>
              <li data-slide-to="2" data-target="#carousel-649708"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap First"
                  src="https://www.carroya.com/noticias/sites/default/files/entradillas/432916874parqueadero-tips-cy.jpg"
                />
                <div className="carousel-caption">
                  <h4>Te esperamos</h4>
                  <p>
                    Recogida en el aeropuerto gratis
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap Second"
                  src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg"
                />
                <div className="carousel-caption">
                  <h4>Covierte en un cliente premium</h4>
                  <p>
                    Obtienes una lavada gratis al mes
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  alt="Carousel Bootstrap Third"
                  src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg"
                />
                <div className="carousel-caption">
                  <h4>Abiertos 24/7</h4>
                  <p>
                    Llegues a la hora que llegues siempre estaremos abiertos
                  </p>
                </div>
              </div>
            </div>{" "}
            <a
              className="carousel-control-prev"
              href="#carousel-649708"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>{" "}
              <span className="sr-only">Previous</span>
            </a>{" "}
            <a
              className="carousel-control-next"
              href="#carousel-649708"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>{" "}
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <h2>Apasionados</h2>
            <p>
              Amamos lo que hacemos es por eso que su veh??culo est?? en las
              mejores manos, lo puede dejar con toda la confianza del mundo.
            </p>
            <p>
              <a className="btn" href="#">
                View details ??
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Responsables</h2>
            <p>
              Llevamos m??s de 20 a??os en el mercado y si algo nos caracteriza es
              la responsabilidad, nuestros clientes nos avalan.
            </p>
            <p>
              <a className="btn" href="#">
                View details ??
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>C??modas Instalaciones</h2>
            <p>
              Contamos con un espacio amplio para cerca de 1000 veh??culos y cada
              uno con el espacio suficiente.
            </p>
            <p>
              <a className="btn" href="#">
                View details ??
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
