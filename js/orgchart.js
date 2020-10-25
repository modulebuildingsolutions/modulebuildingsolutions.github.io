  google.charts.load('current', {packages:["orgchart"]});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    ['Assess plans for conversion to modular','', ''],
    ['Budget estimate & indicative programme','Assess plans for conversion to modular', ''],
    [{'v':'Engage Modular Building Solutions', 
      'f':'<div style="color:red; font-style:italic">Engage Modular Building Solutions</div>'},
      'Budget estimate & indicative programme', ''],
    ['Building Consent', 'Engage Modular Building Solutions', ''],
    
    ['Site Preparation', 'Building Consent', ''],
    ['Commence manufacturing of modules', 'Building Consent', ''],
    ['Manufacturing completion', 'Commence manufacturing of modules', ''],
    [{'v':'10% Deposit', 
    'f':'<div style="color:rgb(230, 100, 32);; font-style:italic">10% deposit</div>'}, 
    'Commence manufacturing of modules', ''],
    ['Shipping', 'Manufacturing completion', ''],
    [{'v':'40% Progress Payment', 
    'f':'<div style="color:rgb(230, 100, 32);; font-style:italic">40% Progress Payment</div>'}, 'Manufacturing completion', ''],

    ['Modules on Site', 'Shipping', ''],
    ['Installation', 'Modules on Site', ''],
    ['Installation', 'Site Preparation', ''],
    ['Code Compliance Certificate', 'Installation', ''],
    [{'v':'20% Final Payment', 
    'f':'<div style="color:rgb(230, 100, 32);; font-style:italic">20% Final Payment</div>'}, 'Code Compliance Certificate', ''],
    

  ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {'allowHtml':true});
  }