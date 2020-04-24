var $draggables;

$(document).ready( function() {
  $draggables = $('.draggable').draggabilly({
    containment: true,
    grid: [ 2, 2 ], 
  });

  
});
var b = [];
b.push($('#0'))
b.push($("#1"));
b.push($("#2"));
b.push($("#3"));

for (let i = 0; i < 4; i+=1) {
  b[i].on('dragEnd', function(){
  console.log(b[i][0].style.top + '    ' + b[i][0].style.left);

});
}
