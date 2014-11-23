// chart 4
require(
[
  'echarts',
  'echarts/theme/gray',
  'echarts/chart/line'
],
function(ec, theme) {
  var container = document.getElementById('chart4');
  container.style.height = '165px';

  // 基于准备好的dom，初始化echarts图表
  var myChart = ec.init(container, theme);

  var option = {
    grid: {
      x: 20,
      y: 0,
      x2: 20,
      y2: 20
    },
    xAxis: [
      {
        type: 'category',
        show: true,
        boundaryGap: false,
        axisLabel: {
          interval: 0
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: false
      }
    ],
    series: [
      {
        name: '参加',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            },
            label: {
              show: true
            }
          }
        },
        data: [124, 257, 458, 850, 982, 1208, 1480, 1630, 1824, 1824, 1824, 2051]
      },
      {
        name: '认证',
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            },
            label: {
              show: false
            }
          }
        },
        data: [90, 157, 308, 550, 782, 908, 1107, 1330, 1344, 1442, 1501, 1701]
      }
    ]
  };

  // 为echarts对象加载数据
  myChart.setOption(option);
}
);
