import supertest from "supertest";
const request = supertest("https://evening-peak-42610.herokuapp.com/api/");

import { expect } from "chai";

let data = [
  { _id: 29, Name: "Car", __v: 0 },
  { _id: 22, Name: "Laptop", __v: 0 },
  { _id: 4, Name: "Bag", __v: 0 },
  { _id: 55, Name: "Mobile", __v: 0 },
  { _id: 2, Name: "Camera", __v: 0 },
  { _id: 99, Name: "Bicycle", __v: 0 },
  { _id: 9, Name: "Helmet", __v: 0 },
  { _id: 45, Name: "Table", __v: 0 },
  { _id: 30, Name: "Chair", __v: 0 },
  { _id: 68, Name: "Book", __v: 0 },
];

describe("item", () => {
  it("GET /item", () => {
    return request.get(`item`).then((res) => {
      //console.log(res.body);
      expect(res.body === data);
    });
  });
});
