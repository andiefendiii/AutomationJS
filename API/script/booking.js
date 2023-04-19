// const request = require("supertest")("https://restful-booker.herokuapp.com");
// const expect =  require("chai").expect;
// const { DATA_BOOKING } = require("../data/testData");

// var DATA_BOOKING

// //////////////////////////////////////////////// API CREATE BOOKING ////////////////////////////////////////////////
// describe("Create Booking", function(){
//     this.timeout(10000);
//     it("Create Booking Success",async function(){
//         const response = await request
            // .post("/booking")
            // .send({
            //     "firstname" : DATA_BOOKING.firstname,
            //     "lastname" : DATA_BOOKING.lastname,
            //     "totalprice" : DATA_BOOKING.price,
            //     "depositpaid" : true,
            //     "bookingdates" : {
            //         "checkin" : "2018-01-01",
            //         "checkout" : "2019-01-01"
            //     },
            //     "additionalneeds": "Breakfast"
            // });

//         expect(response.status).to.eql(200);
//         expect(response.body.booking.firstname).to.eql(DATA_BOOKING.firstname);
//         expect(response.body.booking.lastname).to.eql(DATA_BOOKING.lastname);
//         expect(response.body.booking.price).to.eql(DATA_BOOKING.price);
//         bookingID = response.body.bookingid;
//     })
// })


// //////////////////////////////////////////////// API GET BOOKING ////////////////////////////////////////////////
// describe("GET Booking", function(){
//     it("GET Booking by ID Success",async function(){
//         const response = await request
//             .get("/booking/"+bookingID);

//         expect(response.status).to.eql(200);
//         expect(response.body.firstname).to.eql(DATA_BOOKING.firstname);
//         expect(response.body.lastname).to.eql(DATA_BOOKING.lastname);
//         expect(response.body.price).to.eql(DATA_BOOKING.price);
//     })

//     it("GET Booking by ID Failed - Invalid Booking ID",async function(){
//         const response = await request
//             .get("/booking/"+bookingID+"123");

//         expect(response.status).to.eql(404);
//     })

// })



//////////////////////////////////////////////////
// const request_url = require("supertest")("https://reqres.in/api");
// const assert = require("chai").expect;

// describe("Create User Functionality", function () {
//   it("Success Create User", async function () {

//     const response = await request_url
//       .post("/users")
//       .send({nama: "burhan", job: "QA"});

//     assert(response.statusCode).to.eql(201);
//     //assert(response.body.data).to.eql('data');
//     //assert(response.body.message).to.eql('data');
//   });

//   it.skip("Failed Create User", async function () {

//     const response = await request_url
//       .post("/users")
//       .send({nama: "elvanisa", job: "QA"});

//     assert(response.statusCode).to.eql(201);
//     //assert(response.body.data).to.eql('data');
//     //assert(response.body.message).to.eql('data');
//   });

//   it("Get List User", async function () {

//     const response = await request_url
//       .get("/users")
//       .send();
//     assert(response.statusCode).to.eql(200);
//     assert(response.body.page).to.eql(1);
//     assert(response.body.total).to.eql(12);
//   });

//   it("Get Single User", async function () {

//     const response = await request_url
//       .get("/users/2")
//       .send();
//     assert(response.statusCode).to.eql(200);
//     assert(response.body.data.id).to.eql(2);
//     assert(response.body.data.first_name).to.eql("Janet");
//     assert(response.body.data.last_name).to.eql("Weaver");
//   });

// });











/////////////////////////
const request_url = require("supertest")("https://restful-booker.herokuapp.com");
const assert = require("chai").expect;
const { DATA_BOOKING } = require("../data/testData");


let uniqueNo = getRndNo() + today.getHours() + today.getMinutes() + today.getSeconds();


function getRndNo() {
	return today.getTime() + Math.floor(Math.random() * 1000);
}

////////////////// CREATE BOOKING //////////////////
describe("Get Booking Functionality", function () {
    it("Success Booking", async function () {
  
      const response = await request_url
        .post("/booking")
        .send({
            "firstname" : DATA_BOOKING.firstname +uniqueNo,
            "lastname" : DATA_BOOKING.lastname +getRndNo(), ///Function
            "totalprice" : DATA_BOOKING.price,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds": "Breakfast"
        });
  
      assert(response.statusCode).to.eql(200);
      assert(response.body.booking.firstname).to.eql(DATA_BOOKING.firstname)
      assert(response.body.booking.firstname).to.eql(DATA_BOOKING.lastname)
      assert(response.body.booking.firstname).to.eql(DATA_BOOKING.price)
      bookingID = response.body.bookingid;
    }).timeout(20000);

});


////////////////// GET BOOKING /////////////////////
describe("Get Booking Functionality", function () {
  it("Get Booking", async function () {

      const response = await request_url
        .get("/booking")
        .send();
      assert(response.statusCode).to.eql(200);
    }).timeout(20000);
});


////////////////// GET DETAIL BOOKING /////////////////////
describe("Get Booking Functionality", function () {
    it("Get Booking Detail", async function () {

        const response = await request_url
            .get("/booking/"+bookingID)
            .send();
        assert(response.statusCode).to.eql(200);
        // assert(response.body.data.id).to.eql(2);
        // assert(response.body.data.first_name).to.eql("Janet");
        // assert(response.body.data.last_name).to.eql("Weaver");
        }).timeout(20000);;  

});


////////////////// UPDATE BOOKING /////////////////////
describe("Update Booking Functionality", function () {
  it("Update Booking Detail", async function () {

      const response = await request_url
          .get("/booking/"+bookingID)
          .send();
      assert(response.statusCode).to.eql(200);
      // assert(response.body.data.id).to.eql(2);
      // assert(response.body.data.first_name).to.eql("Janet");
      // assert(response.body.data.last_name).to.eql("Weaver");
      }).timeout(20000);;  

});