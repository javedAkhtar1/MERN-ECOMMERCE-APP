const { Cashfree } = require("cashfree-pg");
const crypto = require("crypto");

Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

async function generateOrderId() {
  const uniqueId = crypto.randomBytes(16).toString("Hex");
  const hash = crypto.createHash("sha256");
  hash.update(uniqueId);

  const orderId = hash.digest("hex");
  return orderId.substr(0, 12);
}

async function getCheckout(req, res) {
  try {
    let request = {
      order_amount: 1.0,
      order_currency: "INR",
      order_id: await generateOrderId(),
      customer_details: {
        customer_id: "1823895212",
        customer_phone: "9999999999",
        customer_name: "ABC",
        customer_email: "penta@test.com",
      },
    };

    Cashfree.PGCreateOrder("2025-01-01", request)
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  } 
  catch (error) {
    console.log(error);
  }
}

async function postVerify(req, res) {
    try {
        // const {orderId} = req.body
        Cashfree.PGOrderFetchPayments("2025-01-01", req.body.orderId).then((response) => {
            res.json(response.data)
        }).catch(err => {
            console.log(err)
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getCheckout, postVerify}