export default function caesar(string, key){
    const cipher = [];
    for (let i = 0; i < string.length; i += 1){
        if (string[i].toUpperCase() !== string[i].toLowerCase()){
            if (string[i].toUpperCase() === string[i]){
                let curr = string.charCodeAt(i);
                let temp = ((curr - 65) + key) % 26 + 65;
                let output = String.fromCharCode(temp);
                cipher.push(output);
            } else if (string[i].toLowerCase() === string[i]) {
                let curr = string.charCodeAt(i);
                let temp = ((curr - 97) + key) % 26 + 97;
                let output = String.fromCharCode(temp);
                cipher.push(output);
            }
        } else {
            cipher.push(string[i]);
        }
    }
    return cipher.join('');
}

