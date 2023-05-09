// As pessoas devem ter o poder de alterar:

// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).


window.onload = () => {
  // Cor de fundo da tela;
    const setBackgroundColor = (color) => {
      let content = document.querySelector('.content');
      content.style.backgroundColor = color;
      localStorage.setItem('background', color);
  }

  

  // Cor do texto;
  const setFontColor = (color) => {
  let paragraph = document.querySelectorAll('.paragraph');
    for (let index of paragraph){
      index.style.color = color;
      localStorage.setItem('fontColor', color);
    }
  }

  // Tamanho da fonte;
  const setFontSize = (size) => {
    let paragraph = document.querySelectorAll(".paragraph")
      for (let index of paragraph) {
        index.style.fontSize = size;
      }
      localStorage.setItem('fontSize', size);
    }

// Espaçamento entre as linhas do texto;
  const setLineHeight = (height) => {
  let paragraph = document.querySelectorAll(".paragraph")
    for (let index of paragraph) {
      index.style.lineHeight = height;
    }
    localStorage.setItem('lineHeight', height);
  }

  // Tipo da fonte (Font family).
  const setFontFamily = (family) => {
    let paragraph = document.querySelectorAll(".paragraph")
      for (let index of paragraph) {
        index.style.fontFamily = family;
      }
      localStorage.setItem('fontFamily', family);
    }

    //----- BOTÕES ------
  
    // Cor de fundo da tela;
    let backgroundColorButton = document.querySelectorAll('#background-color > button')
    for (let index of backgroundColorButton){
      index.addEventListener('click', (event) => {
         setBackgroundColor(event.target.innerHTML);
      })
    }

    // Cor do texto;
    let fontColorButton = document.querySelectorAll('#font-color > button')
    for (let index of fontColorButton){
      index.addEventListener('click', (event) => {
        setFontColor(event.target.innerHTML);
      })
    }

   // Tamanho da fonte;
   let fontSizeButton = document.querySelectorAll('#font-size > button')
   for (let index of fontSizeButton){
     index.addEventListener('click', (event) => {
      setFontSize(event.target.innerHTML);
     })
   }

   // Espaçamento entre as linhas do texto;
   let LineHeightButton = document.querySelectorAll('#line-height > button')
   for (let index of LineHeightButton){
     index.addEventListener('click', (event) => {
      setLineHeight(event.target.innerHTML);
     })
   }

   // Tipo da fonte (Font family).
   let fontFamilyButton = document.querySelectorAll('#font-family > button')
   for (let index of fontFamilyButton){
     index.addEventListener('click', (event) => {
      setFontFamily(event.target.innerHTML);
     })
   }


   const inicialize = () => {
    let backgroundColor = localStorage.getItem('background');
    setBackgroundColor(backgroundColor);

    let fontColor = localStorage.getItem('fontColor');
    setFontColor(fontColor);

    let fontSize = localStorage.getItem('fontSize');
    setFontSize(fontSize);

    let lineHeight = localStorage.getItem('lineHeight');
    setLineHeight(lineHeight);

    let fontFamily = localStorage.getItem('fontFamily');
    setFontFamily(fontFamily);
   }
   console.log(inicialize());

  // console.log(setBackgroundColor('red'));
  // console.log(setFontColor('blue'));
  // console.log(setFontSize('20pt'));
  //console.log(setLineHeight('3'));
  // console.log(setFontFamily('Arial'));

}

