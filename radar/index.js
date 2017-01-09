var chart = echarts.init(document.getElementById('main'));
console.log(chart);

var option = {
    title : {
        text: '파란 vs 빨간',
        subtext: '데이터 비교'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        x : 'center',
        data:['파란','빨간']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    polar : [
        {
            indicator : [
                {text : '힘', max  : 100},
                {text : '체력', max  : 100},
                {text : '행운', max  : 100},
                {text : '마력', max  : 100},
                {text : '지성', max  : 100},
                {text : '민첩', max  : 100}
            ],
            radius : 130
        }
    ],
    series : [
        {
            name: '유저의 데이터',
            type: 'radar',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data : [
                {
                    value : [97, 42, 88, 94, 90, 86],
                    name : '빨간'
                },
                {
                    value : [97, 32, 74, 95, 88, 92],
                    name : '파란'
                }
            ]
        }
    ]
};

chart.setOption(option);