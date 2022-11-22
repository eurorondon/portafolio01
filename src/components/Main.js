import React from "react";
import image1 from "../img/image1.png";

const Main = () => {
  return (
    <div style={{ background: "#F5F5F5" }}>
      <div className="container">
        <div className=" d-flex flex-column   flex-md-row ">
          <div className="col  d-flex flex-column justify-center align-items-center ">
            <h1>Bienvenido, lista de productos. Esperemos te guste</h1>
            <p className="p-main my-5">
              Cambiar la cantidad de tarjetas por filas por defecto, mostrar 4
              tarjetas en la fila. Representar: Imagen, titulo y marca.
              Opcional: Modal al darle clic a las tarjetas con galeria,
              paginacion.
            </p>
          </div>
          <div className="col main_background ">
            <div className="d-flex justify-content-center ">
              <img
                className="img-fluid"
                src={image1}
                alt=""
                style={{ maxHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
