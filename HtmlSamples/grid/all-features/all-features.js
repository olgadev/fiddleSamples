$(function () {
            $("#grid").igGrid({
                primaryKey: "EmployeeID",
                height: 600,
                width: 700,
                columns: [
                    { headerText: "Employee ID", key: "EmployeeID", dataType: "number" },
                    {
                        headerText: "Employee Names",
                        group: [
                        { headerText: "First Name", key: "FirstName", dataType: "string" },
                        { headerText: "Last Name", key: "LastName", dataType: "string" },
                        { headerText: "Title", key: "Title", dataType: "string" }
                    ]
                    }
                ],
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 5
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    },
                    {
                        name: "Selection"
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        filterDropDownItemIcons: false,
                        filterDropDownWidth: 200
                    },
                    {
                        name: "Updating",
                        enableDataDirtyException: false
                    },
                    {
                        name: "Tooltips"
                    },
                    {
                        name: "RowSelectors",
                        enableCheckBoxes: Modernizr.touch
                    },
                    {
                        name: "Resizing"
                    },
                    {
                        name: "Summaries"
                    },
                    {
                        name: "Hiding"
                    },
                    {
                        name: "GroupBy"
                    },
                    {
                        name: "MultiColumnHeaders"
                    },
                    {
                        name: "ColumnMoving"
                    },
                    {
                        name: "CellMerging",
                        initialState: "merged"
                    }
                ]
            });
        });