const request_url = require("supertest")("https://restful-booker.herokuapp.com");
const assert = require("chai").expect;
const { DATA_BOOKING } = require("../data/testData");


//////////////// CREATE BOOKING //////////////////
describe("Get Booking Functionality", function () {
    it("Success Booking", async function () {
  
      const response = await request_url
        .post("/booking")
        .set('Accept', 'application/json')
        .send({
            "firstname" : DATA_BOOKING.firstname,
            "lastname" : DATA_BOOKING.lastname,
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
            // .get("/booking/"+bookingID)
            .get("/booking/1879")
            .send();
        assert(response.statusCode).to.eql(200);
        }).timeout(20000);
});

});