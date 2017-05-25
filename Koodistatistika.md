---
title: Koodistatistika
permalink: Koodistatistika
chart: true
---

# Koodistatistika

|             |  [RIHA-Frontend](https://github.com/e-gov/RIHA-Frontend) |  RIHA-UI |
|----------| -------------------- | -------------------------------------------------------------------|
| kaustu  |  65                      | 2 |  
| faile     |  137 | ~ 10 |
| koodiridu | 606 000 | | 
| sh UI prototüüp (PHP) / HTML | 2200 | 300 | 
| sh Sass (SCSS) / CSS | 3300 | 470 |  
| stiiliraamat, lk | - | 31 |
| infoarhitektuuri dokument, lk | - | ~ 5 | 

 


 <div id="Diagramm1" style='margin: 10px 0 40px 0px;'></div>

<script>

function kuvaDiagrammid() {

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});
  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(kuva);

  function kuva() {

    // Moodusta andmetabel
    var data = google.visualization.arrayToDataTable(
      ['Projekt', 'Stiilimääratlusi, LOC', 'Faile', { role: 'style' }],
      ['Frontend', 3300, 137, 'gold'],
      ['UI', 470, 10, 'silver']
      );

    // Sea suvandid
    var options = {
      fontName: 'Anonymous Pro',
      'width':800, 'height':500, 
      chartArea: { left:20, top:20, width: '100%', height: '100%' },
      legend: { position: 'top', textStyle: {color: 'DarkGray', fontSize: 14} },

    };

    // Alusta diagrammi
    var chart = new google.visualization.PieChart(document.getElementById('Diagramm1'));
    // Joonista diagramm
    chart.draw(data, options);
  }

}

</script>