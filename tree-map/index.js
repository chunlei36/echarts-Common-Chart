var chart = echarts.init(document.getElementById('main'));
console.log(chart);

var option = {
    title : {
        text: '트리맵차트를 이용한 데이터',
        subtext: '현재기준'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
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
    hoverable : true,
    series : [
        {
            name:'박스',
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}: {c}",
                        textStyle: {
                            color: '#00ffdd',
                            fontFamily: 'Times New Roman",Georgia,Serif',
                            fontSize: 20,
                            fontStyle: 'italic',
                            fontWeight:  'bolder'
                        }
                    },
                    borderWidth: 1,
                    borderColor: '#000'
                },
                emphasis: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#0000ff',
                            fontFamily: 'Times New Roman",Georgia,Serif',
                            fontSize: 18,
                            fontStyle: 'normal',
                            fontWeight:  'bold'
                        }
                    },
                    color: '#cc99cc',
                    borderWidth: 3,
                    borderColor: '#996699'
                }
            },
            data:[
                {
                    name: '초록박스',
                    value: 6,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter : "{b}最多",
                                x: 60,
                                y: 65,
                                textStyle: {
                                    color: '#ccc',
                                    fontSize: 16
                                }
                            },
                            color: '#ccff99',
                            borderWidth: 1
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter : "{b}-{c}",
                                x: 80,
                                y: 85,
                                textStyle: {
                                    color: 'red',
                                    fontSize: 18
                                }
                            },
                            color: '#cc9999',
                            borderWidth: 3,
                            borderColor: '#999999'
                        }
                    },
                    children: [
                        {
                            name: '작은 초록박스 1',
                            value: 6,
                            children: [
                                {
                                    name: '초록 아이템 1',
                                    value: 6
                                },
                                {
                                    name: '초록 아이템 2',
                                    value: 4
                                },
                                {
                                    name: '초록 아이템 3',
                                    value: 3
                                }
                            ]
                        },
                        {
                            name: '작은 초록박스 2',
                            value: 6
                        },
                        {
                            name: '작은 초록박스 3',
                            value: 4
                        },
                        {
                            name: '작은 초록박스 4',
                            value: 3
                        }
                    ]
                },
                {
                    name: '파란박스',
                    value: 4,
                    itemStyle: {
                        normal: {
                            color: '#99ccff',
                        },
                        emphasis: {
                            label: {
                                show: false
                            }
                        }
                    }
                },
                {
                    name: '진한 보라박스',
                    value: 4,
                    itemStyle: {
                        normal: {
                            color: '#9999cc',
                        }
                    }
                },
                {
                    name: '청록박스',
                    value: 3,
                    itemStyle: {
                        normal: {
                            color: '#99cccc',
                        }
                    }
                },
                {
                    name: '연두박스',
                    value: 2,
                    itemStyle: {
                        normal: {
                            color: '#ccffcc',
                        }
                    }
                },
                {
                    name: '연한 보라박스',
                    value: 2,
                    itemStyle: {
                        normal: {
                            color: '#ccccff',
                        }
                    }
                },
                {
                    name: '갈색박스',
                    value: 1,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: "{b}: {c}",
                            },
                            borderWidth: 3
                        },
                        emphasis: {
                            label: {
                                show: true
                            },
                            color: '#cc9999',
                            borderWidth: 3,
                            borderColor: '#999999'
                        }
                    }
                }
            ]
        }
    ]
};

                    
chart.setOption(option);