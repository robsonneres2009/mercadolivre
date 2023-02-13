import { useState, createContext } from "react";
import axios from "axios";

export const ContextAPI = createContext(null);

export default function Context({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = (query) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/items?q=${query}`)
        .then((resp) => {
          setLoading(false);
          setCategories(resp.data.categories);
          resolve(resp.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  const getDetailsProduct = (id) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/items/${id}`)
        .then((resp) => {
          setLoading(false);
          resolve(resp.data);
        })
        .catch((err) => {
          setLoading(false);
          reject(err);
        });
    });
  };

  return (
    <ContextAPI.Provider
      data-testid="context"
      value={{
        products,
        setProducts,
        query,
        setQuery,
        getProducts,
        getDetailsProduct,
        loading,
        categories,
        setCategories,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
}
