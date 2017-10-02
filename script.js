var width=200,height=100,padding=5,dataset=[5,10,15,20,25];

var svg = d3.select('body')
.append('svg')
.attr('width', width)
.attr('height', height);

svg.selectAll('rect')
.data(dataset)
.enter().append('rect')
.attr('x', function(d,i){
  return i *(width/dataset.length);
})
.attr('y', function(d,i){
  return height - (d * 4);
})
.attr('width', (width/dataset.length-padding) )
.attr('height', 100)
.attr('fill', function(d,i){
  return colorChart(d);
});

function colorChart(d){
  if(d>0 && d<10){
    return 'red';
  }
   if(d>=10 && d<15){
    return 'green';
  }
  if(d>=15 && d<20){
    return 'yellow';
  }
  if(d>=20 && d<25){
    return 'blue';
  }
  if(d>=25 && d<30){
    return 'orange';
  }
}

svg.selectAll('text')
.data(dataset)
.enter()
.append('text')
.text(function(d,i){
  return d;
})

.attr('x', function(d,i){
  return i * (width/dataset.length)+3;
})
.attr('y', function(d,i){
  return height - (d * 4)+15;
});












