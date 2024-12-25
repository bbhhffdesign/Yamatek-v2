const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [{
      label: '',
      data: [1, 2, 3, 4, 5],
      backgroundColor: [ 
        'rgb(0, 153, 255)',
        'rgb(255, 99, 133)',
        'rgb(255, 183, 0)',
        'rgb(75, 192, 192)',

        'rgb(255, 160, 64)'
      ],
      borderColor: [ 

        'rgba(54, 162, 235, 1)',
        'rgb(255, 183, 0)',
        'rgb(0, 255, 255)',
        'rgb(85, 0, 255)',
        'rgb(255, 128, 0)'
      ],
      borderWidth: 1 
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Ocultar las líneas de la cuadrícula
          drawBorder: false, // Ocultar el borde del eje
          drawTicks: false // Ocultar las marcas de los ticks
        },
        ticks: {
          display: false // Ocultar los valores de los ticks
        },
        borderWidth: 0 // Eliminar la línea del eje Y
      },
      x: {
        grid: {
          display: false, // Ocultar las líneas de la cuadrícula
          drawBorder: false, // Ocultar el borde del eje
          drawTicks: false // Ocultar las marcas de los ticks
        },
        ticks: {
          display: false // Ocultar los valores de los ticks
        },
        borderWidth: 0 // Eliminar la línea del eje X
      }
    },
    plugins: {
      legend: {
        display: false, 
        position: 'top' 
      }
    }
  }
});
