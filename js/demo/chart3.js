// chart 3
require(
[
  'echarts',
  'echarts/theme/gray',
  'echarts/chart/bar'
],
function(ec, theme) {
  var container = document.getElementById('chart3');
  container.style.height = '65px';

  // 基于准备好的dom，初始化echarts图表
  var myChart = ec.init(container, theme);

  var option = {
    grid: {
      // show: false,
      borderColor: 'transparent',
      x: 40,
      y: 0,
      x2: 60,
      y2: 0
    },
    xAxis: [{
      type: 'value',
      show: false,
      boundaryGap: [0, 0.01]
    }],
    yAxis: [{
      type: 'category',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      data: ['10月', '11月']
    }],
    series: [{
      name: '2011年',
      type: 'bar',
      data: [67, 198],
      barGap: 0,
      barCategoryGap: 5,
      itemStyle: {
        normal: {
          color: '#999',
          barBorderRadius: [0, 25, 25, 0],
          label: {
            show: true
          }
        },
        emphasis: {
          color: '#999',
          barBorderRadius: [0, 25, 25, 0],
          label: {
            show: true
          }
        }
      }
    }]
  };

  // 为echarts对象加载数据
  myChart.setOption(option);
}
);
