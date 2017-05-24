---
title: Koodistatistika
permalink: Koodistatistika
chart: yes
---

# Koodistatistika

 <div id="chart_div" style='margin: 10px 0 40px 0px;'></div>

<script>

  // Moodusta andmetabel
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Lahendus');
  data.addColumn('number', 'LOC');

  // Lisa andmed
  data.addRows([
    ['L1', 300], /
    ['l2', 8000]
  ]);

  // Sea suvandid
  var options = {
    fontName: 'Anonymous Pro',
    'width':800, 'height':500, 
    chartArea: { left:20, top:20, width: '100%', height: '100%' },
    legend: { position: 'top', textStyle: {color: 'DarkGray', fontSize: 14} },
    colors: [
    '#f44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5',
    '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722', '#795548', '#9E9E9E', '#607D8B'
    ]
  };

    // Alusta diagrammi
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

    // Joonista diagramm
    chart.draw(data, options);

</script>