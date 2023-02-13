// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default function handler(req, res) {
  const { query, method } = req;

  switch (method) {
    case "GET":
      axios
        .get(`https://api.mercadolibre.com/items/${query.id}`)
        .then((resp) => {
          let data = resp.data;

          axios
            .get(`https://api.mercadolibre.com/items/${query.id}/description`)
            .then((resp2) => {
              data.description = resp2.data;
              const response = {
                author: {
                  name: "",
                  lastname: "",
                },
                item: {
                  id: data.id,
                  title: data.title,
                  price: {
                    currency: data.currency_id,
                    amount: data.price,
                    decimals: 0,
                  },
                  picture: data.pictures[0].url,
                  condition: data.condition,
                  free_shipping: data.shipping.free_shipping,
                  sold_quantity: data.sold_quantity,
                  description: data.description.plain_text,
                },
              };
              res.status(200).json(response);
            });
        })
        .catch(() => {
          res.status(400).json(err);
        });
      break;

    default:
      break;
  }
}
