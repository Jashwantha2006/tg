<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1','2','3','4','5'],
        datasets: [{
            label: 'Temperature',
            data: [25, 26, 24, 27, 28]
        }]
    }
});
</script>
