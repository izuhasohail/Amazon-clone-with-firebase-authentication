

const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")(
    "sk_test_51NXqAuHSWToiLk0KWVrCry1OpNz8h7uiP"+
    "VpQq0OCFsA9Xr86Gx2IXuv8kLikaEePV9xB3clViBe"+
    "6G2iSyeWcODG100NZ2v8wq5",
);


// API

// APP config
const app=express();

// MIDDLEWARES
app.use(cors({origin: true}));
app.use(express.json());
// API ROUTES
app.get("/", (request, response)=>response.status(200).send("hello world"));


app.post("/payments/create", async (request, response)=>{
  const total=request.query.total;
  console.log("Payment request recieved>>>>", total);

  const paymentIntent=await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTEN COMMANDS

exports.api=functions
    .runWith({timeoutSeconds: 120})
    .https.onRequest(app);

// Example endpoint

// http://127.0.0.1:5001/app-clone-6583c/us-central1/api


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
