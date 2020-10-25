google.charts.load("current", { packages: ["timeline"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var container = document.getElementById("modular");
	var chart = new google.visualization.Timeline(container);
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn({ type: "string", id: "Term" });
	dataTable.addColumn({ type: "string", id: "Phase" });
	dataTable.addColumn({ type: "date", id: "Start" });
	dataTable.addColumn({ type: "date", id: "End" });
	dataTable.addRows([
		["1", "Design", new Date(2020, 1, 22), new Date(2020, 4, 22)],
		["2", "Building Consent", new Date(2020, 4, 22), new Date(2020, 7, 22)],
		["3", "Site Preparation", new Date(2020, 4, 22), new Date(2020, 7, 22)],
		["4", "Off-Site Fabrication", new Date(2020, 7, 22), new Date(2020, 10, 5)],
		["5", "Shipping", new Date(2020, 10, 5), new Date(2020, 11, 20)],	
		["6", "Site Erection", new Date(2020, 11, 20), new Date(2020, 11, 27)],	
		["7", "Connecting units", new Date(2020, 11, 27), new Date(2020, 12, 3)],
		["8", "Finished", new Date(2020, 12, 3), new Date(2020, 12, 3)],
	]);
	var options = {
		timeline: { showRowLabels: false },
		animation: {
			startup: true,
			duration: 1000,
			easing: "in"
		},
		avoidOverlappingGridLines: true,
		backgroundColor: "#fff",
		colors: ["#317838", "#317838", "#317838", "#317838", "#317838", "#317838", "#317838", "#317838"],
	};
	chart.draw(dataTable, options);
	function resizeCharts() {
		// redraw charts, dashboards, etc here
		chart.draw(dataTable, options);
	}
	if (window.addEventListener) {
		window.addEventListener("resize", resizeCharts);
	} else if (window.attachEvent) {
		window.attachEvent("onresize", resizeCharts);
	} else {
		window.onresize = resizeCharts;
	}
}
