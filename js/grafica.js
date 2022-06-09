 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(drawChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function drawChart() {
var b1 = parseInt('9');
var b2 = parseInt('8');
var b3 = parseInt('7');
var b4 = parseInt('6');
var b5 = parseInt('7');
var a1 = 'CSS';
var a2 = 'HTML';
var a3 = 'API';
var a4 = 'JS';
var a5 = 'PHP';
   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'calificación');
   data.addRows([
     [a1, parseInt(b1)],
     [a2, parseInt(b2)],
     [a3, parseInt(b3)],
     [a4, parseInt(b4)],
     [a5, parseInt(b5)],
 
   ]);

   // Set chart options
   var options = {'title':'Distribución de conocimientos',
                  top:0,
                  colors:['#155263','#f96d00','#363636', '#c24d2c', '#00204a']};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);

   var barchart_options = {title:'Calificación de habilidades',
                      top:0,
                      legend: 'none',
                      colors:['#155263']};
    var barchart = new google.visualization.BarChart(document.getElementById('chart_div2'));
        barchart.draw(data, barchart_options);
 }
 