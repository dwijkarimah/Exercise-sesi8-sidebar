//Buatlah sebuah menu sidebar menggunakan konsep multidimensional array. 
//1 baris array terpisahkan oleh sebuah underline. Banyaknya link berasal dari data pada array.
const sidebar = [
    ['home'], ['profile'],
    ['setting'],
    ['logout'],
  ];
  
  for (let i = 0; i < sidebar.length; i += 1) {
    const ulElement = document.createElement('ul');
    for (let j = 0; j < sidebar[i].length; j += 1) {
      const liElement = document.createElement('li');
      liElement.innerHTML = sidebar[i][j];
      ulElement.appendChild(liElement);
    }
    const lineSeperation = document.createElement('div');
    lineSeperation.style.height = '2px';
    lineSeperation.style.width = '100px';
    lineSeperation.style.borderBottom = '3px solid blue';
  
    ulElement.appendChild(lineSeperation);
    document.body.appendChild(ulElement);
  }
  
     
  
  