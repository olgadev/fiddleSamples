$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer();


            /*----------------- Method & Option Examples -------------------------*/

            // $$(Add_Data) button click handler
            $("#btnAddData").click(function (e) {

                var rnd = Math.floor(Math.random() * 2501);
                var item = { OrderDate: new Date(), ExtendedPrice: rnd };

                $("#sparkline").igSparkline("addItem", item);

                apiViewer.log("$$(Item_Added) [$$(Value): " + rnd + " ]");
            });

            // $$(Remove_Data) button click handler
            $("#btnRemoveData").click(function (e) {

                var removedData = $("#sparkline").igSparkline("getDataItem", 0);                

                $("#sparkline").igSparkline("removeItem", 0);

                if (removedData) {
                    removedData = removedData.ExtendedPrice;
                    apiViewer.log("$$(Item_Removed) [$$(Value): " + removedData + " ]");
                }
            });


            /*----------------- Event Examples -------------------------*/

            $("#sparkline").on("igsparklinedatabinding", function (e, ui) {
                // ** REMOVE ** log event data here, show output at runtime using 
                apiViewer.log("igsparklinedatabinding");
            });

            $("#sparkline").on("igsparklinedatabound", function (e, ui) {
                // ** REMOVE ** log event data here, show output at runtime using 
                apiViewer.log("igsparklinedatabound");
            });


            /*----------------- Instantiation -------------------------*/

            $("#sparkline").igSparkline({
                dataSource: northwindInvoices,
                height: "100px",
                width: "300px",
                valueMemberPath: 'ExtendedPrice',
                labelMemberPath: 'OrderDate'
            });

        });