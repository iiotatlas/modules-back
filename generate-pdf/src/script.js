var options = {
      chart: {
        height: 450,
        type: 'bar',
        animations: {
            enabled: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#008000', '#d4a823', '#f92525'],
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1

      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    }

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render().then(() => {
        chart.dataURI().then(({ imgURI, blob }) => { //Here shows error
        var pdf = new jsPDF();
        pdf.addImage(imgURI, 'PNG', 0, 0);
        pdf.save("download.pdf");
        })
    })