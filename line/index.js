var chart = echarts.init(document.getElementById('main'));
console.log(chart);

option = {
    title : {
        text: '라인차트를 이용한 데이터',
        subtext: '주간기준'
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
            boundaryGap : false,
            data : ['월요일','화요일','수요일','목요일','금요일','토요일','일요일']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} 도'
            }
        }
    ],
    series : [
        {
            name:'빨간',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint : {
                data : [
                    {type : 'max', name: '최대일'},
                    {type : 'min', name: '최소일'}
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
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '최소일', value : -2, xAxis: 1, yAxis: -1.5}
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