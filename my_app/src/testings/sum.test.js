import sum from './Sum'

it("when a and b are number",()=>{
    const res = sum(1,2)
    expect(res).toBe(3)
})

it("when a and b are string",()=>{
    const res = sum("1","2")
    expect(res).toBe(3)
})

it("when a and b are float",()=>{
    const res = sum(1.2,3.4)
    expect(res).toBe(4)
})