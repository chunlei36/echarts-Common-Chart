var chart = echarts.init(document.getElementById('main'));
console.log(chart);

option = {
    title : {
        text: '파이차트를 이용한 데이터',
        subtext: '현재 기준',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['빨간','파란','청록','주황','초록']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'데이터정보',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'빨간'},
                {value:310, name:'파란'},
                {value:234, name:'청록'},
                {value:135, name:'주황'},
                {value:1548, name:'초록'}
            ]
        }
    ]
};


chart.setOption(option);