const fs = require('mz/fs');

const targetSize = 480;

const data = async () => await fs.readFile('./data.json').then(contents => {
    let arr = JSON.parse(contents);
    let x = 640;
    let y = 480;
    let xArr = []
    let yArr = []
    arr.forEach((p) => {
        xArr.push(p.position.x);
        yArr.push(p.position.y);
    })
    const xResult = xArr.sort((a,b) => {
        return a -b;
    });
    const yResult = yArr.sort((a,b) => {
        return a -b;
    });

    const resX = xResult[0];
    const resY = yResult[0];

    const resWidth =  yResult[yResult.length - 1];
    const resHeight = xResult[yResult.length - 1];
    const dimensions = {width: Math.round(resWidth - resX), height: Math.round(resHeight - resY)};
    let multiplier;
    if (dimensions.width > dimensions.height && dimensions.width < targetSize) {
        multiplier = targetSize / dimensions.width;
    }
    if (dimensions.width < dimensions.height && dimensions.height < targetSize) {
        multiplier = targetSize / dimensions.height;
    }
    const resized = arr.map((pos) => {
        const sum = (num, mult) => { return (num * mult) + 5 ; };
        const adj = [sum(multiplier, pos.position.x - resX), sum(multiplier, pos.position.y - resY) ];

        return adj;
    })
    
    return [[resX, resY, resHeight, resWidth], dimensions, resized];
}).catch(console.log)


const getNormal = () => {
    data().then((res) => {
        console.log(res)
    })
}

getNormal();