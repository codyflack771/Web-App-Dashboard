$(document).ready(function() {
	$(".alertPlaceholder").append("<div class='alert'><div><b>Alert</b><p>Nulla tempor quis ipsum id dapibus. Vivamus laoreet est vel turpis gravida bibendum vel ut nisi.</p><a class='exit'>X</a></div></div>");
	$(".exit").click(function() {
		$(".alertPlaceholder").empty();
	})
});

// Chart.js

// Web Traffic Chart
var ctx = document.getElementById("webTrafficChart");
var webTrafficChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
		datasets: [{
			label: "Weekly",
			data: [0, 750, 1250, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
			lineTension: 0,
			pointRadius: 5,
			pointBorderColor: '#8184C5',
			pointBackgroundColor: '#F6F7F9',
			backgroundColor: 'rgba(190, 192, 235, 0.5)',
			borderColor: '#BEC0EB',
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
			title: {
				display: true,
				text: 'Traffic'
			},
			legend: {
				display: false
			}
	}
});

// Daily Traffic Chart
var ctx = document.getElementById("dailyTraffic");
var dailyTrafficChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['s', 'm', 't', 'w', 't', 'f', 's'],
		datasets: [{
			data: [75, 100, 175, 125, 225, 200, 100],
			backgroundColor: '#7377BF',
			borderWidth: '0'
		}]
	},
	options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			title: {
				display: true,
				text: 'Daily Traffic'
			}
		}

});

// Mobile Users Chart
var ctx = document.getElementById("mobileUsers");
var mobileUsers = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['Phones', 'Tablets', 'Desktop'],
		datasets: [{
			data: ['70', '15', '15'],
			backgroundColor: [
				'#7377BF',
				'#81C98F',
				'#74B1BF'
			],
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		title: {
			display: true,
			text: 'Mobile Users'
		}
	}
})