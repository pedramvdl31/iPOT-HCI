// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Water: 2666,
            Sun: null,
            humidity: 2647
        }, {
            period: '2010 Q2',
            Water: 2778,
            Sun: 2294,
            humidity: 2441
        }, {
            period: '2010 Q3',
            Water: 4912,
            Sun: 1969,
            humidity: 2501
        }, {
            period: '2010 Q4',
            Water: 3767,
            Sun: 3597,
            humidity: 5689
        }, {
            period: '2011 Q1',
            Water: 6810,
            Sun: 1914,
            humidity: 2293
        }, {
            period: '2011 Q2',
            Water: 5670,
            Sun: 4293,
            humidity: 1881
        }, {
            period: '2011 Q3',
            Water: 4820,
            Sun: 3795,
            humidity: 1588
        }, {
            period: '2011 Q4',
            Water: 15073,
            Sun: 5967,
            humidity: 5175
        }, {
            period: '2012 Q1',
            Water: 10687,
            Sun: 4460,
            humidity: 2028
        }, {
            period: '2012 Q2',
            Water: 8432,
            Sun: 5713,
            humidity: 1791
        }],
        xkey: 'period',
        ykeys: ['Water', 'Sun', 'humidity'],
        labels: ['Water', 'Sun', 'Humidity'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Electricity Spent",
            value: 4
        }, {
            label: "Water Spent",
            value: 30
        }, {
            label: "Soil Spent",
            value: 20
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            health: 802
        }, {
            d: '2012-10-02',
            health: 783
        }, {
            d: '2012-10-03',
            health: 820
        }, {
            d: '2012-10-04',
            health: 839
        }, {
            d: '2012-10-05',
            health: 792
        }, {
            d: '2012-10-06',
            health: 859
        }, {
            d: '2012-10-07',
            health: 790
        }, {
            d: '2012-10-08',
            health: 1680
        }, {
            d: '2012-10-09',
            health: 1592
        }, {
            d: '2012-10-10',
            health: 1420
        }, {
            d: '2012-10-11',
            health: 882
        }, {
            d: '2012-10-12',
            health: 889
        }, {
            d: '2012-10-13',
            health: 819
        }, {
            d: '2012-10-14',
            health: 849
        }, {
            d: '2012-10-15',
            health: 870
        }, {
            d: '2012-10-16',
            health: 1063
        }, {
            d: '2012-10-17',
            health: 1192
        }, {
            d: '2012-10-18',
            health: 1224
        }, {
            d: '2012-10-19',
            health: 1329
        }, {
            d: '2012-10-20',
            health: 1329
        }, {
            d: '2012-10-21',
            health: 1239
        }, {
            d: '2012-10-22',
            health: 1190
        }, {
            d: '2012-10-23',
            health: 1312
        }, {
            d: '2012-10-24',
            health: 1293
        }, {
            d: '2012-10-25',
            health: 1283
        }, {
            d: '2012-10-26',
            health: 1248
        }, {
            d: '2012-10-27',
            health: 1323
        }, {
            d: '2012-10-28',
            health: 1390
        }, {
            d: '2012-10-29',
            health: 1420
        }, {
            d: '2012-10-30',
            health: 1529
        }, {
            d: '2012-10-31',
            health: 1892
        }, ],
        // The name of the data record attribute that contains x-healths.
        xkey: 'd',
        // A list of names of data record attributes that contain y-healths.
        ykeys: ['health'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Health'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    // Morris.Bar({
    //     element: 'morris-bar-chart',
    //     data: [{
    //         device: 'Water',
    //         geekbench: 136
    //     }, {
    //         device: 'Water 3G',
    //         geekbench: 137
    //     }, {
    //         device: 'Water 3GS',
    //         geekbench: 275
    //     }, {
    //         device: 'Water 4',
    //         geekbench: 380
    //     }, {
    //         device: 'Water 4S',
    //         geekbench: 655
    //     }, {
    //         device: 'Water 5',
    //         geekbench: 1571
    //     }],
    //     xkey: 'device',
    //     ykeys: ['geekbench'],
    //     labels: ['Geekbench'],
    //     barRatio: 0.4,
    //     xLabelAngle: 35,
    //     hideHover: 'auto',
    //     resize: true
    // });


});
