const svg = d3
  .select('#chart-area')
  .append('svg')
  .attr('width', 500)
  .attr('height', 400)
  .attr('border', 'black');

const line = svg
  .append('line')
  .attr('x1', '20')
  .attr('y1', '10')
  .attr('x2', '60')
  .attr('y2', '70')
  .attr('stroke', 'red')
  .attr('stroke-width', 5);

const rect = svg
  .append('rect')
  .attr('x', 30)
  .attr('y', 80)
  .attr('width', 50)
  .attr('height', 100)
  .attr('fill', 'orange');

const ellipse = svg
  .append('ellipse')
  .attr('cx', 200)
  .attr('cy', 300)
  .attr('rx', 30)
  .attr('ry', 70)
  .attr('fill', 'blue');
