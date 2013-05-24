$.support.cors = true;

        $(function () {
            var dataSource = new $.ig.OlapFlatDataSource({
                dataSource: sales,
                metadata: {
                    cube: {
                        name: "Sales",
                        caption: "$$(Sales)",
                        measuresDimension: {
                            caption: "$$(Measures)",
                            measures: [
                                { caption: "$$(UnitsSold)", name: "UnitsSold", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitsSold') },
                                { caption: "$$(UnitPrice)", name: "UnitPrice", aggregator: $.ig.OlapUtilities.prototype.sumAggregator('UnitPrice', 2) }]
                        },

                        dimensions: [
                            {
                                caption: "$$(Date)", name: "Date", hierarchies: [
                                    $.ig.OlapUtilities.prototype.getDateHierarchy(
                                        "Date", ["year", "quarter", "month", "date"], "Dates", "$$(Date)",
                                        ["$$(Year)", "$$(Quarter)", "$$(Month)", "$$(Day)"], "$$(AllPeriods)")]
                            },
                            {
                                caption: "$$(Location)", name: "Location", hierarchies: [{
                                    caption: "$$(Location)", name: "Location", levels: [
                                             { name: "AllLocations", levelCaption: "$$(AllLocations)", memberProvider: function (item) { return "$$(AllLocations)"; } },
                                             { name: "Country", levelCaption: "$$(Country)", memberProvider: function (item) { return item.Country; } },
                                             { name: "City", levelCaption: "$$(City)", memberProvider: function (item) { return item.City; } }]
                                }]
                            },
                            {
                                caption: "$$(Product)", name: "Product", hierarchies: [{
                                    caption: "$$(Product)", name: "Product", levels: [
                                    { name: "AllProducts", levelCaption: "$$(AllProducts)", memberProvider: function (item) { return "$$(AllProducts)"; } },
                                    { name: "ProductCategory", levelCaption: "$$(Category)", memberProvider: function (item) { return item.ProductCategory; } }]
                                }]
                            },
                            {
                                caption: "$$(Seller)", name: "Seller", hierarchies: [{
                                    caption: "$$(Seller)", name: "Seller", levels: [
                                     { name: "AllSellers", levelCaption: "$$(AllSellers)", memberProvider: function (item) { return "$$(AllSellers)"; } },
                                     { name: "SellerName", levelCaption: "$$(Seller)", memberProvider: function (item) { return item.SellerName; } }]
                                }]
                            }
                        ]
                    }
                },
                rows: "[Date].[Dates]",
                columns: "[Product].[Product]",
                measures: "[Measures].[UnitsSold]"
            });

            var shouldAcceptElement = function (location, itemType, uniqueName) {
                if (location == 'columns') {
                    return false;
                }
                if (itemType == 'Hierarchy'
                    && uniqueName.indexOf("Seller") !== -1) {
                    return false;
                }
                return true;
            };

            $('#dataSelector').igPivotDataSelector({
                dataSource: dataSource,
                customMoveValidation: shouldAcceptElement,
                height: "565px",
                width: "230px"
            });
            $("#pivotGrid").igPivotGrid({
                dataSource: dataSource,
                customMoveValidation: shouldAcceptElement,
                height: "565px",
                width: "680px"
            });
        });