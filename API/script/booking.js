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
        }).timeout(20000);;  

});


// ////////////////// UPDATE BOOKING /////////////////////
// describe("Update Booking Functionality", function () {
//   it("Update Booking Detail", async function () {

//       const response = await request_url
//           .get("/booking/"+bookingID)
//           .send();
//       assert(response.statusCode).to.eql(200);
//       // assert(response.body.data.id).to.eql(2);
//       // assert(response.body.data.first_name).to.eql("Janet");
//       // assert(response.body.data.last_name).to.eql("Weaver");
//       }).timeout(20000);;  

});