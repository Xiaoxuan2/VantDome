<template>
   
        <div id="main" style="width:5rem;height:5rem;">

    </div>
    
</template>
<script>
export default {
    methods: {
        init:function(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
         xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '30%']
    },
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [{
            gt: 1,
            lt: 3,
            color: 'rgba(0,255,255, 0.5)'
        }, {
            gt: 5,
            lt: 7,
            color: 'rgba(0,255,255, 0.5)'
        }]
    },
    series: [
        {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
                color: '#0faaf0',
                width: 3
            },
            markLine: {
                symbol: ['none', 'none'],
                label: {show: false},
                data: [
                    {xAxis: 1},
                    {xAxis: 3},
                    {xAxis: 5},
                    {xAxis: 7}
                ]
            },
            areaStyle: {},
            data: [
                ['2019-10-10', 200],
                ['2019-10-11', 400],
                ['2019-10-12', 650],
                ['2019-10-13', 500],
                ['2019-10-14', 250],
                ['2019-10-15', 300],
                ['2019-10-16', 450],
                ['2019-10-17', 300],
                ['2019-10-18', 100]
            ]
        }
    ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted(){this.init()}
    }
</script>
<style scoped>
  #main{
      margin-top: -1rem;
  }

</style>