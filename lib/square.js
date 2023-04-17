const {Shape} = require('./shapes')

class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`
    }
}

module.exports = {Square}