let xs = []
let webScreenWidth = window.innerWidth;
let TAM = 1250;

if (webScreenWidth < 1300) {
  for (var i = 0; i <= 1250; i++) {
    xs.push(i)
  }
} else if (webScreenWidth < 1600) {
  for (var i = 0; i <= 1450; i++) {
    xs.push(i)
  }
} else {
  for (var i = 0; i <= 2250; i++) {
    xs.push(i)
  }
}

let t = 0

function animate() {
  
  let points = xs.map(x => {
    
    let y = 100 + 10 * Math.sin((x + t) / 10)
    
    return [x, y]
  })
  
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")

  document.querySelector(".pathElement").setAttribute("d", path)
  document.querySelector(".pathElement2").setAttribute("d", path)
  document.querySelector(".pathElement3").setAttribute("d", path)

  t += 0.4
  
}

animate()