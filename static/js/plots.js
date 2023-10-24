const xValues = ["Jan", "Feb", "Mar", "Apr", "May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const yValues = [0, 0, 1, 4, 8,25,26,21,15,4,0,0];

new Chart("nOfIrrigations", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: 'green', // Set the color to red
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Number of irrigations per month"
        }
    }
});

const yValues2 = [83,78,70,65,66,64,63,65,70,77,82,83];

new Chart("humidity_plot", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues2
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 0, max:100}}],
        },
        title: {
            display:true,
            text: 'Humidity'
        }
    }
});
