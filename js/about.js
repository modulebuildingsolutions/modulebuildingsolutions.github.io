google.charts.load('current', {packages:["orgchart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('string', 'Manager');
  data.addColumn('string', 'ToolTip');

  // For each orgchart box, provide the name, manager, and tooltip to show.
  data.addRows([
    [{'v':'Client', 'f':'Client<div style="font-style:italic">(Property Developer)</div>'}, '', ''],
    [{'v':'Construction', 'f':'Construction<div style="font-style:italic">(Main Contractor)</div>'}, 'Client', ''],
    ['Civil Contractors', 'Client', ''],
    [{'v':'Consultants', 'f':'Consultants<div style="font-style:italic">(Architect, Structural Engineer)</div>'}, 'Client', ''],
    [{'v':'Council', 'f':'Council<div style="font-style:italic">(Building Consent)</div>'}, 'Client', ''],
  ]);

  // Create the chart.
  var chart = new google.visualization.OrgChart(document.getElementById('compareTraditonalFlowChart'));
  // Draw the chart, setting the allowHtml option to true for the tooltips.
  chart.draw(data, {'allowHtml':true});
}