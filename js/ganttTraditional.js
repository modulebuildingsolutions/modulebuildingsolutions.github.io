google.charts.load("current", { packages: ["timeline"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	var container = document.getElementById("timeline");
	var chart = new google.visualization.Timeline(container);
	var dataTable = new google.visualization.DataTable();

	dataTable.addColumn({ type: "string", id: "Term" });
	dataTable.addColumn({ type: "string", id: "Phase" });
	dataTable.addColumn({ type: "date", id: "Start" });
	dataTable.addColumn({ type: "date", id: "End" });
	dataTable.addRows([
		["1", "Design", new Date(2020, 2, 22), new Date(2020, 5, 22)],
		["2", "Building Consent", new Date(2020, 5, 22), new Date(2020, 7, 22)],
		["3", "Site Preparation", new Date(2020, 5, 22), new Date(2020, 8, 22)],
		["4", "Onsite Construction", new Date(2020, 8, 22), new Date(2021, 5, 22)],
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
		colors: ["#E66420", "#E66420", "#E66420", "#E66420", "#E66420"]
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
