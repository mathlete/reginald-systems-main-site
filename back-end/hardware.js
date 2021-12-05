const express = require("express");
const router = express.Router();

const ram=[{
  'rid': 1,
  name: "2Gb of RAM",
  price: 1.99
},
{
  'rid': 2,
  name: "4Gb of RAM",
  price: 3.99
},
{
  'rid': 3,
  name: "8Gb of RAM",
  price: 8.99
}]

const hdd=[{
  'hid': 1,
  name: "256Gb of Storage",
  price: 2.99
},
{
  'hid': 2,
  name: "512Gb of Storage",
  price: 5.99
},
{
  'hid': 3,
  name: "1Tb of Storage",
  price: 11.99
},
{
  'hid': 4,
  name: "2Tb of Storage",
  price: 23.99
},
{
  'hid': 5,
  name: "4Tb of Storage",
  price: 47.99
}]

const ssd=[{
  'sid': 1,
  name: "16Gb of App Space",
  price: 4.99
},
{
  'sid': 2,
  name: "32Gb of App Space",
  price: 9.99
},
{
  'sid': 3,
  name: "64Gb of App Space",
  price: 19.99
}]

// get listings -- will list tickets that a user has submitted
router.get('/listings', async (req, res) => {
  try { 
    return res.send({
      ram: ram,
      hdd: hdd,
      ssd: ssd
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  routes: router
}
