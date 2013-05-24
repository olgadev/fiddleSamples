$(function () {

            // Initialize the open button with igButton
            $("#openDialog").igButton({ labelText: "$$(open)" });

            // Initialize the igDialog
            $("#dialog").igDialog({
                state: "closed",
                modal: true,
                draggable: false,
                resizable: false,
                height: "460px",
                width: "460px"
            });

            $("#openDialog").on({
                click: function (e) {
                    // Open the igDialog
                    $("#dialog").igDialog("open");
                }
            });

        });