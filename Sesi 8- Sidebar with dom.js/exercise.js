//Buat sebuah function swapCase yang berisi capitalize string tetapi selang seling dengan kata berikutnya
// ex: swapCase('halo semua, belajar coding di skilvul yuk') // => "HALO semua, BELAJAR coding DI skilvul YUK"

function capitalize(words) {
    const wordsInArray = []
    wordsInArray.push(words);
    return wordsInArray.map((word) => word.toUpperCase()).toString();
  }
  console.log(capitalize("Halo"));
  
  function swapCase(words) {
    const wordsInArray = words.split(' ');
  
    return wordsInArray.map((word, index) => {
      if (index % 2 === 0) {
        return word.toUpperCase();
      };
  
      return word;
    }).join(" ");
  };
  
  console.log(swapCase("halo semua, belajar coding di skilvul yuk!!"));