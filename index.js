
// let getCtc = () => {
//   let ct = canvas.getContext('2d')
// }

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
