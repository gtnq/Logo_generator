const {Triangle} = require('./triangle')
const {Circle} = require('./circle')
const {Square} = require('./square')
// const { describe } = require('yargs')

test("Triangle test", () => {
    const tri = new Triangle("yellow");
    expect(tri.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />')
})

test("Circle test", () => {
    const cir = new Circle("yellow");
    expect(cir.render()).toBe('<circle cx="150" cy="115" r="80" fill="yellow" />')
})

test("Triangle test", () => {
    const Sqr = new Square("yellow");
    expect(Sqr.render()).toBe('<rect x="73" y="40" width="160" height="160" fill="yellow" />')
})

