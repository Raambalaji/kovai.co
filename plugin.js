var zoomlevel = 12,
    Windowidth = 0,
    WindowHeight = 0;
$(document).ready(function() {
    Windowidth = window.innerWidth;
    WindowHeight = window.innerHeight;

    // $('#toggle-navigation').on('click', function() {
    //     $('.first-menu').toggle();
    // });

    //cuurent status chart

    var options = {
        series: [65, 55, 60, 45],
        chart: {
            height: 255,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 320,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    margin: 5,
                    size: '30%',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['#6d366f', '#ca4a7b', '#fe6e87', '#ff9d82'],
        legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'left',
            offsetX: 140,
            offsetY: -3,
            zIndex: 1,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0,
            },
            formatter: function(seriesName, opts) {
                return opts.w.globals.series[opts.seriesIndex] + "%"
            },
            itemMargin: {
                vertical: 3
            }
        },
        responsive: [{
            breakpoint: 375,
            options: {
                plotOptions: {
                    radialBar: {
                        endAngle: 250,
                    }
                },
                legend: {
                    offsetX: 95,
                    show: true,
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    //Menu Open and close

    $status_on_button = 0;
    $('.first-menu').css('width', '75px');

    //button click
    $('#toggle-navigation').click(function() {
        if ($status_on_button == 0) {
            $('.first-menu').animate({ width: '250px' }, 500);
            $status_on_button = 1; //toggle button status
            $('.first-menu').addClass('menu-expand');
        } else {
            $('.first-menu').animate({ width: '75px' }, 500);
            $status_on_button = 0; //toggle button status
            $('.first-menu').removeClass('menu-expand');
        }
    });


    if (Windowidth < 727) {
        $on_button_mob = 0;
        $('.first-menu').css('width', '0px');
        $('.first-menu').css('height', '100%');

        //button click
        $('#toggle-navigation').click(function() {
            if ($on_button_mob == 0) {
                $('.first-menu').animate({ width: '250px' });
                $on_button_mob = 1; //toggle button status
                $('.first-menu').addClass('menu-expand');
            } else {
                $('.first-menu').animate({ width: '0px' });
                $on_button_mob = 0; //toggle button status
                $('.first-menu').removeClass('menu-expand');
            }
        });
    }

    //humburger menu
    $('#toggle-navigation').click(function() {
        $(this).toggleClass('open');
    });
});

window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: ""
        },
        axisX: {
            labelFontColor: "#4d5e66",
            interval: 0,
            intervalType: "",
            includeZero: true,
            maximum: 10,
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            lineColor: "#e3e3e3b8",
        },
        axisY: {
            labelFontColor: "#4d5e66",
            includeZero: true,
            maximum: 100,
            interval: 25,
            tickLength: 0,
            gridThickness: 0.3,
            lineThickness: 0,
            lineColor: "#e3e3e3b8",
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: "line",
                name: "",
                color: "#ca4a7b",
                showInLegend: true,
                axisXIndex: 0,
                dataPoints: [
                    { label: '', y: 15 },
                    { label: '', y: 25 },
                    { label: '83% Av.Memory Usage', y: 40 },
                    { label: '', y: 25 },
                    { label: '', y: 30 },
                    { label: '74.5% Max.Memory Usage', y: 25 },
                    { label: '', y: 45 },
                    { label: '', y: 15 },
                    { label: '', y: 45 },
                    { label: '9.2% Current.Memory Usage', y: 30 },
                    { label: '', y: 55 },
                    { label: '', y: 15 },
                    { label: '', y: 40 }
                ]
            },

        ]
    });
    chart.render();

    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

}