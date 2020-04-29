var $draggables;

$(document).ready(function () {
  $draggables = $('.draggable').draggabilly({
    grid: [2, 2],
  });
});




var c = [];
var m = [];
for (let i = 0; i < 3; i++){
  c.push([]);
  for (let j = 0; j < 4; j++) {
    c[i].push($('#c'+i+'_'+j));
    if (i == 0) {
      c[i][j][0].style.backgroundColor = "red";
    }
    if (i == 2) {
      c[i][j][0].style.backgroundColor = "green";
    }
    c[i][j].draggabilly({ containment: ("#ch" + i) });
    c[i][j].on('dragEnd', function () {
      if ((parseInt(c[i][j][0].style.top) + scale) > contHeight) {
        m[i] = j;
        console.log(m);

        for (let k = 0; k < 4; k++) {
          if (k!=j) {
            c[i][k].draggabilly({ containment: ('#c'+ i) });
          }
        }
      }
      if (m[i]==j && ((parseInt(c[i][j][0].style.top) + scale) < contHeight)) {
        m[i] = undefined;
        for (let k = 0; k < 4; k++) {
          c[i][k].draggabilly({containment: ("#ch" + i) });
        }
      }
      if (m[0]!=undefined && m[1]!=undefined && m[2]!= undefined) {
        for (let k = 0; k < 3; k++) {
            c[k][m[k]].animate({
            top: (contHeight * 1.5 + scale) + "px",
            left: (($("#containers").width() + scale) / 2) + "px"
          });
          c[k][m[k]][0].style.transform = "translate(-100%, -100%)";
          
          if (k == 0) {
            c[k][m[k]][0].style.transform = "translate(-83%, -100%)"
            c[k][m[k]].animate({
              width :  (parseInt(c[k][m[k]][0].style.width) * 1.5 ) + "px", 
              height: (parseInt(c[k][m[k]][0].style.height) * 1.5 ) + "px"
          });
        }
          if (k == 2) {
            c[k][m[k]].animate({
              width :  (parseInt(c[k][m[k]][0].style.width) * 0.5 ) + "px", 
              height: (parseInt(c[k][m[k]][0].style.height) * 0.5 ) + "px"
          });
          }
        }
      }
    });
  }
}

