function solve(descriptor) {
    //дефинираме шаблони на двигатели
    const engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500},
    ]
    //създаме кола със съответния модел, шаси и цвят
    const car = {
        model: descriptor.model,
        carriage: {
            type: descriptor.carriage,
            color: descriptor.color
        }
    };

    //определяме двигателя според подадената минимална мощност

    for (let engine of engines) {
        if (engine.power >= descriptor.power) {
            car.engine = Object.assign(engine);
            break;
        }
    }

    //определяме размера на гумите
    if (descriptor.wheelsize % 2 === 0) {
        const wheelsize = descriptor.wheelsize - 1;
        car.wheels = [wheelsize, wheelsize, wheelsize,wheelsize];
    } else {
        const wheelsize = descriptor.wheelsize;
        car.wheels = [wheelsize, wheelsize, wheelsize,wheelsize];
    }

    //връщаме резулатата
    return car;

}