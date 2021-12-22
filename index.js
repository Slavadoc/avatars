
// LocalStotage и попробуйпеременные туда писать.
// и в консоль выводить их . например записывай все что рисовал пользователь.
// именно в какой последовательности. пусть это пишется
//  в массив. а мотом этот массив сохраняй в локальное хранилище. для начала
//  так. и по нажатию на кнопку - просмотреть. выводи в консоль этот
//  массив. для начала.

myStorage = window.localStorage
myStorage.setItem('eyes', '<img src="img/eyes.svg" class="buttonEyes" id="buttonEyes" onclick="aEyes()"/>')
let cat = myStorage.getItem('eyes')
console.log(cat)
 let aCircle = () => {
   // getCtc()
   let ct = canvas.getContext('2d')
   ct.beginPath()
   ct.arc(150, 150, 100, 0, 2 * Math.PI)
   ct.strokeStyle = '#FF9F40'
   ct.fillStyle = '#FF9F40'
   ct.fill()
   ct.stroke()
 }
 let aTriangle = () => {
   let ctc = canvas.getContext('2d')
   ctc.beginPath()
   ctc.lineTo(150, 100)
   ctc.lineTo(200, 150)
   ctc.lineTo(100, 200)
   ctc.lineTo(150, 100)
   ctc.closePath()
   ctc.strokeStyle = '#6949D7'
   ctc.fillStyle = '#6949D7'
   ctc.fill()
   ctc.stroke()
 }
 let aSmile = () => {
   let cts = canvas.getContext('2d')
   cts.beginPath()
   cts.arc(150,175,50 ,0 , Math.PI)
   cts.lineWidth = 5 // толщина линии
   cts.strokeStyle = '#6949D7'
   ctx.stroke()
 }
 let rightEye = () => {
   let cter = canvas.getContext('2d')
   cter.beginPath()
   cter.arc(100,100,5,0,Math.PI*2,true);  // Левый глаз
   cter.strokeStyle = '#6949D7'
   cter.fillStyle = '#6949D7'
   cter.fill()
   cter.stroke()
 }
 let leftEye = () => {
   let cte = canvas.getContext('2d')
   cte.beginPath();
   cte.arc(200,100,5,0,Math.PI*2,true);  // Правый глаз
   cte.strokeStyle = '#6949D7'
   cte.fillStyle = '#6949D7'
   cte.fill()
   cte.stroke();
 }
 let aEyes = () => {
   rightEye()
   leftEye()
 }
 let aChangeArea = (name) => {
     if(name == 'eyes') {
       let changeArea = document.getElementById('change')
       let buttonEyes = myStorage.getItem('face')
       // let buttonEyes = document.getElementById('buttonEyes')
       const clone = buttonEyes.cloneNode(true);
       while (changeArea.firstChild)changeArea.firstChild.remove();
       changeArea.replaceWith(clone);
     }
     if(name == 'smile') {
       let changeArea = document.getElementById('change')
       let buttonSmile = document.getElementById('buttonSmile')
       const clone = buttonSmile.cloneNode(true);
       while (changeArea.firstChild) changeArea.firstChild.remove();
       changeArea.replaceWith(clone);
     }
     if(name == 'nose') {
       let changeArea = document.getElementById('change')
       let buttonNose = document.getElementById('buttonNose')
       const clone = buttonNose.cloneNode(true);
       while (changeArea.firstChild) changeArea.firstChild.remove();
       changeArea.replaceWith(clone);
     }
     if(name == 'face') {
       let changeArea = document.getElementById('change')
       let buttonFace = document.getElementById('buttonFace')
       const clone = buttonFace.cloneNode(true);
       while (changeArea.firstChild) changeArea.firstChild.remove();
       changeArea.replaceWith(clone);
     }
 }
