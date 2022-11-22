import React from "react";

const RowCards = ({ handlechange }) => {
  return (
    <div className="flex justify-end d-hidden">
      <div className="  " style={{ maxWidth: "200px" }}>
        <form
          className="container"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <div className="form-group my-5">
              <label className="text-white" htmlFor="disabledTextInput">
                Producto por filas ?
              </label>
              <select
                className="form-select"
                aria-label="rowCards"
                onChange={handlechange}
              >
                <option defaultValue value="" className="">
                  Selecciona
                </option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RowCards;
