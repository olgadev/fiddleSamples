var data = [
                { "Year": "2000", "Coal": 450, "Oil": 100, "Nuclear": 175 },
                { "Year": "2010", "Coal": 480, "Oil": 120, "Nuclear": 225 },
                { "Year": "2020", "Coal": 550, "Oil": 180, "Nuclear": 275 }
        ];

        $(function () {
            for (i = 0; i < data.length; i++) {
                data[i].Total = data[i]["Coal"] + data[i]["Oil"] + data[i]["Nuclear"];
            }

            $("#chart").igDataChart({
                dataSource: data,
                crosshairVisibility: Modernizr.touch ? "visible" : "collapsed",
                axes: [{
                    type: "categoryX",
                    name: "xAxis",
                    label: "Year",
                    strokeThickness: 5
                }, {
                    type: "numericY",
                    name: "prodPower",
                    minimumValue: 0,
                    maximumValue: 800,
                    strokeThickness: 5
                }, {
                    type: "numericY",
                    name: "totalPower",
                    minimumValue: 400,
                    maximumValue: 1200,
                    labelLocation: "outsideRight"
                }],
                series: [{
                    type: "column",
                    name: "Coal",
                    title: "Coal",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "Coal",
                    showTooltip: true,
                    tooltipTemplate: "tooltipCoal",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "Oil",
                    title: "Oil",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "Oil",
                    showTooltip: true,
                    tooltipTemplate: "tooltipOil",
                    legend: { element: "legend" }
                }, {
                    type: "column",
                    name: "Nuclear",
                    title: "Nuclear",
                    xAxis: "xAxis",
                    yAxis: "prodPower",
                    valueMemberPath: "Nuclear",
                    showTooltip: true,
                    tooltipTemplate: "tooltipNuclear",
                    legend: { element: "legend" }
                }, {
                    type: "line",
                    name: "Total",
                    title: "Total Energy",
                    xAxis: "xAxis",
                    yAxis: "totalPower",
                    valueMemberPath: "Total",
                    showTooltip: true,
                    tooltipTemplate: "tooltipTotal",
                    legend: { element: "legend2" }
                }],
                leftMargin: 5,
                topMargin: 15
            });
        });