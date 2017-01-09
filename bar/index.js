var chart = echarts.init(document.getElementById('main'));
console.log(chart);

var option = {
    title : {
        text: '바차트를 이용한 데이터',
        subtext: '연간 기준'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['빨간','파란']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'빨간',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                data : [
                    {type : 'max', name: '최대값'},
                    {type : 'min', name: '최소값'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '평균값'}
                ]
            }
        },
        {
            name:'파란',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint : {
                data : [
                    {name : '연간 최대', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                    {name : '연간 최소', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '평균값'}
                ]
            }
        }
    ]
};

chart.setOption(option);