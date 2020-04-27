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
            top: (contHeight * 1.5 - scale / 2) + "px",
            left: ((windowWidth * 0.9 - scale) / 2) + "px"
          });
        }
      }
    });
  }
}

