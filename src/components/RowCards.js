import React from "react";

const RowCards = ({ handlechange }) => {
  return (
    <div className="flex justify-end">
      <div className=" mb-5 " style={{ maxWidth: "200px" }}>
        <form
          className="container"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <div className="form-group">
              <label htmlFor="disabledTextInput">Producto por filas ?</label>
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
