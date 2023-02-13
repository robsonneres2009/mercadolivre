// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function handler(req, res) {
  const { query, method } = req;

  switch (method) {
    case "GET":
      axios
        .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then((resp) => {
          const data = resp.data;

          //Mapping and structe categories
          let categories = [];

          const available_filters = data?.available_filters.filter(
            (item) => item.id === "category"
          )[0].values;
          available_filters.map((item) => {
            categories.push(item.name);
          });
          //

          const response = {
            author: {
              name: "",
              lastname: "",
            },
            categories: categories,
            items: data.results,
          };

          res.status(200).json(response);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      break;

    default:
      break;
  }
}
