
// Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.font.family = 'Nunito, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
// Chart.defaults.color = '#858796';

// function number_format(number, decimals, dec_point, thousands_sep) {
//   number = (number + '').replace(',', '').replace(' ', '');
//   var n = !isFinite(+number) ? 0 : +number,
//     prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
//     sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
//     dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
//     s = '',
//     toFixedFix = function (n, prec) {
//       var k = Math.pow(10, prec);
//       return '' + Math.round(n * k) / k;
//     };
//   s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
//   if (s[0].length > 3) {
//     s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
//   }
//   if ((s[1] || '').length < prec) {
//     s[1] = s[1] || '';
//     s[1] += new Array(prec - s[1].length + 1).join('0');
//   }
//   return s.join(dec);
// }

// Area Chart Example
// var ctx = document.getElementById("myAreaChart");
// var myLineChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//     datasets: [{
//       label: "Earnings",
//       lineTension: 0.3,
//       backgroundColor: "rgba(78, 115, 223, 0.05)",
//       borderColor: "rgba(78, 115, 223, 1)",
//       pointRadius: 3,
//       pointBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointBorderColor: "rgba(78, 115, 223, 1)",
//       pointHoverRadius: 3,
//       pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
//       pointHoverBorderColor: "rgba(78, 115, 223, 1)",
//       pointHitRadius: 10,
//       pointBorderWidth: 2,
//       data: [0, 2000000, 1500000, 4000000, 3500000, 6000000, 5500000, 8000000, 7500000, 10000000, 9500000, 12000000],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       x: {
//         time: {
//           unit: 'date'
//         },
//         grid: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 7
//         }
//       },
//       y: {
//         ticks: {
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function (value, index, values) {
//             return 'Rp' + number_format(value);
//           }
//         },
//         grid: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         display: false
//       },
//       tooltip: {
//         backgroundColor: "rgb(255,255,255)",
//         bodyFontColor: "#858796",
//         titleFontColor: '#6e707e',
//         titleMarginBottom: 10,
//         titleFontSize: 14,
//         borderColor: '#dddfeb',
//         borderWidth: 1,
//         xPadding: 15,
//         yPadding: 15,
//         displayColors: false,
//         intersect: false,
//         mode: 'index',
//         caretPadding: 10,
//         callbacks: {
//           label: function (tooltipItem, chart) {
//             var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//             return datasetLabel + ': Rp' + number_format(tooltipItem.raw);
//           }
//         }
//       }
//     }
//   }
// });
