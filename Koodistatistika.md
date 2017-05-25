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
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Projekt');
      data.addColumn('number', 'Stiilimääratlusi, LOC');
      data.addColumn({type:'string', role:'style'});
      data.addRows([
        ['Frontend', 3300, 'color: gold'],
        ['UI', 470, 'color: silver']
      ]);

      // Sea suvandid
      var options = {
        fontName: 'Anonymous Pro',
        'width':300, 'height':300, 
        chartArea: { left:20, top:20, width: '100%', height: '100%' },
        vAxis: { title: 'Stiilimääratlusi, LOC', }

      };

      // Alusta diagrammi
      var chart = new google.visualization.ColumnChart(document.getElementById('Diagramm1'));
      // Joonista diagramm
      chart.draw(data, options);
    }

  }

</script>