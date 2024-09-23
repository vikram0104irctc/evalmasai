import { request } from "express"
import app from "."

describe("Get all the student data", ()=>{
  test("Get", async ()=>{
    res = await request.app.get("/students")
    expect(res.statusCode).toBe(200)
  })
  test("Get", async ()=>{
    res = await request.app.post("/students")
    expect(res.statusCode).toBe(201)
  })
  test("Get", async ()=>{
    res = await request.app.delete("/students")
    expect(res.statusCode).toBe(200)
  })
  test("Get", async ()=>{
    res = await request.app.put("/students")
    expect(res.statusCode).toBe(200)
  })
})