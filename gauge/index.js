var chart = echarts.init(document.getElementById('main'));
console.log(chart);

option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'게이지 차트 데이터',
            type:'gauge',
            startAngle: 180,
            endAngle: 0,
            center : ['50%', '90%'],    /* 차트가 자리잡을 축 지정 */
            radius : 320,
            axisLine: {            /* axis 라인 */
                lineStyle: {       /* 게이지 라인 속성 */
                    width: 170     /* 너비값 지정*/
                }
            },
            axisTick: {            /* axis 속성 */
                splitNumber: 5,    /* axis 스프릿 줄 */
                length :20,        /* axis 길이 */
            },
            axisLabel: {           /* axis 라벨 */
                formatter: function(v){
                    switch (v+''){
                        case '10': return '초록';
                        case '50': return '파란';
                        case '90': return '빨간';
                        default: return '';
                    }
                },
                textStyle: {       // 항목별 텍스트 속성
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 'bolder'
                }
            },
            pointer: {
                width:50,
                length: '90%',
                color: 'rgba(255, 255, 255, 0.8)'
            },
            title : {
                show : true,
                offsetCenter: [0, '-60%'],       /* x y 값 */
                textStyle: {       /* 타이틀 텍스트 속성 */
                    color: '#fff',
                    fontSize: 30
                }
            },
            detail : {
                show : true,
                backgroundColor: 'rgba(0,0,0,0)',
                borderWidth: 0,
                borderColor: '#ccc',
                width: 100,
                height: 40,
                offsetCenter: [0, -40],       /* x y 값 */
                formatter:'{value}%',
                textStyle: {       /* 디테일 텍스트 속성 */
                    fontSize : 50
                }
            },
            data:[{value: 20, name: '완료율'}]
        }
    ]
};

chart.setOption(option);