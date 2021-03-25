//Buat sebuah function untuk capital dengan menggunakan .map dan kembalikan dengan nilai string yang sudah capslock 
// ex. capitalize('kucing') // => KUCING'
// ex. capitalize('hello world') // => "HELLO WORLD"


function capitalize(words) {
    const wordsInArray = []
    wordsInArray.push(words);
    return wordsInArray.map((word) => word.toUpperCase()).toString();
  }
  console.log(capitalize("kucing"));
  console.log(capitalize("hello world"));
  
  function swapCase(words) {
    const wordsInArray = words.split(' ');
  
    return wordsInArray.map((word, index) => {
      if (index % 2 === 0) {
        return word.toUpperCase();
      };
  
      return word;
    }).join(" ");
  };
  
  console.log(swapCase("kucing"));
  console.log(swapCase("hello world"));

  
