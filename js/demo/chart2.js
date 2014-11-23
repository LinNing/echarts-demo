// chart 2
require(
  [
    'echarts',
    'echarts/theme/gray',
    'echarts/chart/pie'
  ],
  function(ec, theme) {
    var container = document.getElementById('chart2');
    container.style.height = '125px';

    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(container, theme);

    var radius = [25, 50];

    var option = {
      legend: {
        x: 'center',
        y: 105,
        itemGap: 110,
        selectedMode: false,
        data: [
          '11月', '10月'
        ]
      },
      series: [{
        type: 'pie',
        center: ['25%', '40%'],
        radius: radius,
        // x: '0%', // for funnel,
        itemStyle: {
          normal: {
            label: {
              formatter: function(a, b, c) {
                return '50%';
              },
              textStyle: {
                baseline: 'top'
              }
            }
          }
        },
        data: [{
          value: 1985,
          name: '参加',
          itemStyle: {
            normal: {
              color: '#888',
              label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                  baseline: 'bottom'
                }
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          value: 1985,
          name: '不参加',
          itemStyle: {
            normal: {
              color: '#ccc',
              label: {
                show: true,
                position: 'center'
              },
              labelLine: {
                show: false
              }
            },
            emphasis: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }]
      }, {
        type: 'pie',
        center: ['75%', '40%'],
        radius: radius,
        // x: '50%', // for funnel,
        itemStyle: {
          normal: {
            label: {
              formatter: function(a, b, c) {
                return '25%';
              },
              textStyle: {
                baseline: 'top'
              }
            }
          }
        },
        data: [{
          value: 1567,
          name: '参加',
          itemStyle: {
            normal: {
              color: '#888',
              label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                  baseline: 'bottom'
                }
              },
              labelLine: {
                show: false
              }
            }
          }
        }, {
          value: 4701,
          name: '不参加',
          itemStyle: {
            normal: {
              color: '#ccc',
              label: {
                show: true,
                position: 'center'
              },
              labelLine: {
                show: false
              }
            },
            emphasis: {
              color: 'rgba(0,0,0,0)'
            }
          }
        }]
      }]
    };

    // 为echarts对象加载数据
    myChart.setOption(option);
  }
);
