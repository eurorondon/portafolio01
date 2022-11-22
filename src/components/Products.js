import React from "react";

const Products = ({ rowCards, currentPost, setModal, galeriaHandle }) => {
  return (
    <div className="row ">
      <div className="col-lg-12 col-md-12 article  ">
        <div className={`      grid   grid-cols-${rowCards} gap-2 `}>
          {/* grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 */}
          {currentPost.map((product) => (
            <button key={product.id} onClick={() => galeriaHandle(product.id)}>
              <div className=" " key={product.id}>
                <div className="border-product">
                  <div className="shopBack img-card">
                    <img src={product.images[0]} alt={product.title} />
                  </div>

                  <div className="shoptext">
                    <p>{product.title}</p>

                    <h3>${product.price}</h3>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
