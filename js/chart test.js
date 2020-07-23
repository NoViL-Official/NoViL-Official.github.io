var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'orange', 'purple'],
        datasets: [
            {
                type: 'line',
                label: 'pink',
                data: [21, 31, 53, 5, 100, 88],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(0, 206, 0, 0.2)',
                    'rgba(255, 206, 91)',
                    'rgba(255, 127, 66)',
                    'rgba(255, 60, 255)',
                ]
            }
        ]
    },
    options: {
        scales:{
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
