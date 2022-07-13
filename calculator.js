export default class Calculator {
    constructor(num_1, num_2){
        this.num_1 = num_1;
        this.num_2 = num_2;
    }

    sum() {
        return (this.num_1 + this.num_2);
    }

    subtract() {
        return (this.num_1 - this.num_2);
    }

    divide() {
        return (this.num_1 / this.num_2)
    }

    multiply() {
        return (this.num_1 * this.num_2);
    }
    
}