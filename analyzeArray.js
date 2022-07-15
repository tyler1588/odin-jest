class arrayProperties {
    constructor(array){
        this.average = array.reduce((a, b) => a + b) / array.length;
        this.min = Math.min(...array);
        this.max = Math.max(...array);
        this.length = array.length;
    }
}

export default function analyzeArray(array){
    const arrayAttributes = new arrayProperties(array);
    return arrayAttributes;
}