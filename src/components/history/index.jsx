import React from "react";
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
const History = () => {
  const [products, setProducts] = useState([]);
  //  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const url = "/users";
      const response = await api.get(url);
      const payload = [...response?.data];
      console.log(payload);
      setProducts(payload || []);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((item) => {
        return (
          <span key={item?.id}>
            <div className="grid grid-cols-1 justify-items-center gap-y-10 place-items-center h-32 bg-utama">
              <div class="group block mx-auto shadow-lg space-y-5 flex flex-col space-y-4 bg-white ring-2 ring-kedua rounded-lg text-center w-2/5 hover:bg-utama hover:ring-white p-2">
                <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-x-4 my-3 items-center text-slate-900 group-hover:text-white text-sm font-medium font-mono">
                  <div className="justify-items-start md:justify-items-center row-span-2 md:pl-5 ">
                    <AiFillCaretLeft />
                  </div>
                  <div className="col-span-1">{item?.username}</div>
                  <div className="col-span-1">Rp.{item?.id}</div>
                  <div className="text-center md:text-right row-span-2 md:pr-1">
                    {item?.name || "ga ada"}
                  </div>
                </div>
              </div>
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default History;
