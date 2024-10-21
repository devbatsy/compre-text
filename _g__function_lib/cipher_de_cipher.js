const cipher_shift = 4;

const cipherText = (text) =>{
    let sample = text.split("-").join("");

    const piece_array = new Array();

    function breakText()
    {
        const shifted = sample.slice(0,cipher_shift);

        sample = sample.replace(shifted , '');

        piece_array.push(shifted)
    }

    while(sample.length > 4)
    {
        breakText()
    }

    breakText();

    
    piece_array.forEach((val , i) =>{
        piece_array[i] = val.split("").reverse().join("")
    })


    return piece_array.reverse().join("-")
}


const d_cipher_text = (text) =>{
    let sample = text.split("-").reverse();

    sample.forEach((val , i) =>{
        sample[i] = val.split("").reverse().join("")
    });

    return sample.join("")
}


module.exports = {
    cipherText:cipherText,
    d_cipher_text:d_cipher_text
}