$(function () {
            /*----------------- Instantiation -------------------------*/
            $("#grid2").igHierarchicalGrid({
                features: [
                    {
                        name: "Updating",
                        enableAddRow: true,
                        inherit: true,
                        editMode: "rowedittemplate",
                        rowEditDialogContainment: "window",
                        showReadonlyEditors: false,
                        enableDeleteRow: true,
                        enableDataDirtyException: false,
                        rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                        rowEditDialogWidth: 600,
                        rowEditDialogHeight: 400,
                        columnSettings:
                            [{
                                columnKey: "EmployeeID",
                                readOnly: true
                            },
                            {
                                columnKey: "LastName",
                                validatorOptions: { bodyAsParent: false, required: true, showIcon: true }
                            }]
                    }
                ],
                width: "100%",
                height: "500px",
                initialDataBindDepth: -1,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                autoGenerateColumns: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "100px" },
                    { key: "LastName", headerText: "Last Name", dataType: "string", width: "100px" },
                    { key: "FirstName", headerText: "First Name", dataType: "string", width: "100px" },
                    { key: "Title", headerText: "Title", dataType: "string", width: "150px" },
                    { headerText: "Address", key: "Address", dataType: "string", width: "150px" },
                    { headerText: "City", key: "City", dataType: "string", width: "100px" },
                    { headerText: "Postal Code", key: "PostalCode", dataType: "string", width: "100px", hidden: true },
                    { headerText: "Region", key: "Region", dataType: "string", width: "80px", hidden: true },
                    { headerText: "Country", key: "Country", dataType: "string", width: "100px", hidden: true },
                    { headerText: "Home Phone", key: "HomePhone", dataType: "string", width: "150px", hidden: true },
                    { headerText: "Extension", key: "Extension", dataType: "string", width: "150px", hidden: true }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "100px" },
                            { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "100px", hidden: true },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "100px" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "200px" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "200px" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "100px" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "100px" }
                        ],
                        features: [
                            {
                                name: "Paging",
                                pageSize: 10
                            },
                            {
                                name: "Updating",
                                enableAddRow: true,
                                rowEditDialogContainment: "owner",
                                editMode: "rowedittemplate",
                                showReadonlyEditors: false,
                                enableDeleteRow: true,
                                enableDataDirtyException: false,
                                rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                                rowEditDialogWidth: 600,
                                rowEditDialogHeight: 400,
                                columnSettings:
                                [
                                    {
                                        columnKey: "OrderID",
                                        readOnly: true
                                    },
                                    {
                                        columnKey: "ShipAddress",
                                        validatorOptions: { bodyAsParent: false, required: true, showIcon: true }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });