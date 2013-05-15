$(function () {

            $("#map").igMap({
                width: "100%",
                crosshairVisibility: "visible",
                verticalZoomable: true,
                horizontalZoomable: true,
                overviewPlusDetailPaneVisibility: "visible",
                overviewPlusDetailPaneBackgroundImageUri: "http://localhost/images/samples/maps/world.png",
                panModifier: "control",
                backgroundContent: {
                    type: "cloudMade",
                    key: cloudmadeData,
                    parameter: 2
                },
                series: [{
                    type: "geographicShape",
                    name: "worldCountries",
                    markerType: "automatic",
                    shapeMemberPath: "points",
                    shapefileUri: "http://localhost/data-files/shapes/world.shp",
                    databaseUri: "http://localhost/data-files/shapes/world.dbf"
                }],
                windowResponse: "immediate",
                windowRect: {
                    left: 0,
                    top: 0,
                    height: 0.7,
                    width: 0.7
                }
            });

        });