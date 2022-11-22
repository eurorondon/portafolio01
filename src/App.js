import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Paginations from "./components/Paginations.js";
import Products from "./components/Products";
import RowCards from "./components/RowCards";
import Superior from "./components/Superior";

const App = () => {
  const [products, setProducts] = useState([]);
  const [rowCards, setRowCards] = useState("4");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [modal, setModal] = useState(false);
  const [id_product, setId_product] = useState("");

  const galeria = products[id_product];
  // console.log(first);

  function handlechange(e) {
    setRowCards(e.target.value);
  }

  const galeriaHandle = (id) => {
    setModal(true);
    setId_product(id);
  };

  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      if (res) {
        setProducts(res.data.products);
      }
    };
    getdata();
  }, []);

  useEffect(() => {
    setPostsPerPage(rowCards * 2);
    setCurrentPage(1);
  }, [rowCards]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = products.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Navbar />
      <Main />
      <Modal modal={modal} setModal={setModal}>
        {id_product && (
          <div className="grid grid-cols-3 gap-2">
            {products[id_product].images.map((foto) => (
              <di>
                <div className="">
                  <img src={foto} alt="" />
                </div>
              </di>
            ))}
          </div>
        )}
      </Modal>

      <div className="container  pb-5">
        <div className="">
          <RowCards handlechange={handlechange} />
          <Products
            currentPost={currentPost}
            rowCards={rowCards}
            setModal={setModal}
            galeriaHandle={galeriaHandle}
          />
        </div>
        <Paginations
          totalPost={products.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default App;
