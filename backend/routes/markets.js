const { Router } = require("express");

const router = Router();

const marketList = [
  {
    id: 1,
    type: "food",
    items: 89,
    miles: 0.4,
  },
  {
    id: 2,
    type: "electronics",
    items: 23,
    miles: 0.7,
  },
  {
    id: 3,
    type: "beverages",
    items: 100,
    miles: 1.2,
  },
  {
    id: 4,
    type: "cleaning",
    items: 16,
    miles: 3.5,
  },
];

router.get("/", (req, res) => {
  console.log(req.query);

  const { miles } = req.query;


    const parsedMiles = parseInt(miles)

    if(miles && !isNaN(parsedMiles)) {
        const filteredMarkets = marketList.filter((m) => m.miles <= parsedMiles)
        res.send(filteredMarkets)
    }else{
        res.send(marketList)
    }

}
);

router.get("/:type", (req, res) => {
  const { type } = req.params;

  const marketType = marketList.find((t) => t.type === type);

  res.send(marketType);
});

router.post("/", (req, res) => {
  marketList.push(req.body);
  res.send(marketList);
});

module.exports = router;
