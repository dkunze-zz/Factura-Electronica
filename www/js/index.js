/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        console.log(navigator.vibrate);
        navigator.vibrate(100);


// set to either landscape
screen.lockOrientation('landscape');

// allow user rotate
screen.unlockOrientation();

// access current orientation
alert('Orientation is ' + screen.orientation);


    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        // plugin_batteryStatus();

        // call everything of you want.


        console.log('Received Event: ' + id);
    }
};


// Vibrate for 1 miliseconds -- https://github.com/apache/cordova-plugin-vibration
function vibrate() {
    navigator.vibrate(100);
}

function logout()
{
    if (confirm("¿Seguro que desea salir?")) {
        window.localStorage.removeItem("USERLOGIN_GRANTED");
        location.href = 'index.html';
    }
}

function resetAndClearLocalStorage()
{
    window.localStorage.clear();
    //LOGIN
    window.localStorage.setItem("USERLOGIN_GRANTED", "NO");
}

function saveUserLogin() {
    window.localStorage.setItem("USERLOGIN_GRANTED", "YES");
}

function saveUserProfile(parsed_data) {
    //PROFILE
    window.localStorage.setItem("USERPROFILE_SIWAPPUID", parsed_data["USERPROFILE_SIWAPPUID"]);
    window.localStorage.setItem("USERPROFILE_NOMBRECOMPLETO", parsed_data["USERPROFILE_NOMBRECOMPLETO"]);
    window.localStorage.setItem("USERPROFILE_NOMBREFANTASIA", parsed_data["USERPROFILE_NOMBREFANTASIA"]);
    window.localStorage.setItem("USERPROFILE_IDENTIFICADOR", parsed_data["USERPROFILE_IDENTIFICADOR"]);
    window.localStorage.setItem("USERPROFILE_TIPOIDENTIFICADOR", parsed_data["USERPROFILE_TIPOIDENTIFICADOR"]);
    window.localStorage.setItem("USERPROFILE_INGRESOSBRUTOS", parsed_data["USERPROFILE_INGRESOSBRUTOS"]);
    window.localStorage.setItem("USERPROFILE_PUNTODEVENTA", parsed_data["USERPROFILE_PUNTODEVENTA"]);
    window.localStorage.setItem("USERPROFILE_DOMICILIOCOMERCIAL", parsed_data["USERPROFILE_DOMICILIOCOMERCIAL"]);
    window.localStorage.setItem("USERPROFILE_TELEFONO", parsed_data["USERPROFILE_TELEFONO"]);
    window.localStorage.setItem("USERPROFILE_INICIOACTIVIDADES", parsed_data["USERPROFILE_INICIOACTIVIDADES"]);
    window.localStorage.setItem("USERPROFILE_CONDICIONFRENTEALIVA", parsed_data["USERPROFILE_CONDICIONFRENTEALIVA"]);
    window.localStorage.setItem("USERPROFILE_LEYENDAFACTURA", parsed_data["USERPROFILE_LEYENDAFACTURA"]);
    window.localStorage.setItem("USERPROFILE_EMAIL", parsed_data["USERPROFILE_EMAIL"]);
}

function saveUserResumen(parsed_data) {
    //RESUMEN    
    window.localStorage.setItem("USERRESUMEN_VENTAS", parsed_data["USERRESUMEN_VENTAS"]);
    window.localStorage.setItem("USERRESUMEN_COMPRAS", parsed_data["USERRESUMEN_COMPRAS"]);
    window.localStorage.setItem("USERRESUMEN_PRESUPUESTOS", parsed_data["USERRESUMEN_PRESUPUESTOS"]);
}

function saveUserCustomers(parsed_data) {
    //RESUMEN    
    window.localStorage.setItem("USERCUSTOMER_TOTALROWS", parsed_data["USERCUSTOMER_TOTALROWS"]);
    var totalCustomers = parseInt(window.localStorage.getItem("USERCUSTOMER_TOTALROWS"), 10);

    if (totalCustomers > 0) {
        for (var i = 0; i < totalCustomers; i++) {
            window.localStorage.setItem("USERCUSTOMER_RAZONSOCIAL_" + i, parsed_data["USERCUSTOMER_RAZONSOCIAL_" + i]);
            window.localStorage.setItem("USERCUSTOMER_IDENTIFICACION_" + i, parsed_data["USERCUSTOMER_IDENTIFICACION_" + i]);
            window.localStorage.setItem("USERCUSTOMER_EMAIL_" + i, parsed_data["USERCUSTOMER_EMAIL_" + i]);
        }
    }
}

function saveUserInvoices(parsed_data) {
    //INVOICES
    window.localStorage.setItem("TEMP_INVOICES_COUNTER", "0");
    window.localStorage.setItem("USERINVOICES_TOTALROWS", parsed_data["USERINVOICES_TOTALROWS"]);
    var total = parseInt(window.localStorage.getItem("USERINVOICES_TOTALROWS"), 10);

    if (total > 0) {
        for (var i = 0; i < total; i++) {
            window.localStorage.setItem("USERINVOICES_INVOICEID_" + i, parsed_data["USERINVOICES_INVOICEID_" + i]);
            window.localStorage.setItem("USERINVOICES_CUSTOMERNAME_" + i, parsed_data["USERINVOICES_CUSTOMERNAME_" + i]);
            window.localStorage.setItem("USERINVOICES_ISSUEDATE_" + i, parsed_data["USERINVOICES_ISSUEDATE_" + i]);
            window.localStorage.setItem("USERINVOICES_GROSSAMOUNT_" + i, parsed_data["USERINVOICES_GROSSAMOUNT_" + i]);
            window.localStorage.setItem("USERINVOICES_SERIENAME_" + i, parsed_data["USERINVOICES_SERIENAME_" + i]);

            window.localStorage.setItem("USERINVOICES_NETO_" + i, parsed_data["USERINVOICES_NETO_" + i]);
            window.localStorage.setItem("USERINVOICES_IMPUESTOS_" + i, parsed_data["USERINVOICES_IMPUESTOS_" + i]);
            window.localStorage.setItem("USERINVOICES_IMP_PENDIENTE_" + i, parsed_data["USERINVOICES_IMP_PENDIENTE_" + i]);
            window.localStorage.setItem("USERINVOICES_NROCBTE_" + i, parsed_data["USERINVOICES_NROCBTE_" + i]);
            window.localStorage.setItem("USERINVOICES_NROCAE_" + i, parsed_data["USERINVOICES_NROCAE_" + i]);
        }
    }
}

function saveUserProducts(parsed_data) {
    //RESUMEN    
    window.localStorage.setItem("USERPRODUCTS_TOTALROWS", parsed_data["USERPRODUCTS_TOTALROWS"]);
    var total = parseInt(window.localStorage.getItem("USERPRODUCTS_TOTALROWS"), 10);

    if (total > 0) {
        for (var i = 0; i < total; i++) {
            window.localStorage.setItem("USERPRODUCTS_PRODUCTID_" + i, parsed_data["USERPRODUCTS_PRODUCTID_" + i]);
            window.localStorage.setItem("USERPRODUCTS_REFERENCE_" + i, parsed_data["USERPRODUCTS_REFERENCE_" + i]);
            window.localStorage.setItem("USERPRODUCTS_DESCRIPTION_" + i, parsed_data["USERPRODUCTS_DESCRIPTION_" + i]);
            window.localStorage.setItem("USERPRODUCTS_PRICE_" + i, parsed_data["USERPRODUCTS_PRICE_" + i]);
        }
    }
}

function loadUserProfile() {
    if (window.localStorage.getItem("USERLOGIN_GRANTED") == "YES") {
        if (window.localStorage.getItem("USERPROFILE_NOMBRECOMPLETO") != "")
            $("#perfil_nombreCompleto").text(window.localStorage.getItem("USERPROFILE_NOMBRECOMPLETO"));
        if (window.localStorage.getItem("USERPROFILE_NOMBREFANTASIA") != "")
            $("#perfil_nombreFantasia").text(window.localStorage.getItem("USERPROFILE_NOMBREFANTASIA"));
        if (window.localStorage.getItem("USERPROFILE_IDENTIFICADOR") != "")
            $("#perfil_identificador").text(window.localStorage.getItem("USERPROFILE_IDENTIFICADOR"));
        if (window.localStorage.getItem("USERPROFILE_TIPOIDENTIFICADOR") != "")
            $("#perfil_tipoIdentificador").text(window.localStorage.getItem("USERPROFILE_TIPOIDENTIFICADOR"));
        if (window.localStorage.getItem("USERPROFILE_INGRESOSBRUTOS") != "")
            $("#perfil_ingresosBrutos").text(window.localStorage.getItem("USERPROFILE_INGRESOSBRUTOS"));
        if (window.localStorage.getItem("USERPROFILE_PUNTODEVENTA") != "")
            $("#perfil_puntoDeVenta").text(window.localStorage.getItem("USERPROFILE_PUNTODEVENTA"));
        if (window.localStorage.getItem("USERPROFILE_DOMICILIOCOMERCIAL") != "")
            $("#perfil_domicilioComercial").text(window.localStorage.getItem("USERPROFILE_DOMICILIOCOMERCIAL"));
        if (window.localStorage.getItem("USERPROFILE_TELEFONO") != "")
            $("#perfil_telefono").text(window.localStorage.getItem("USERPROFILE_TELEFONO"));
        if (window.localStorage.getItem("USERPROFILE_INICIOACTIVIDADES") != "")
            $("#perfil_inicioActividades").text(window.localStorage.getItem("USERPROFILE_INICIOACTIVIDADES"));
        if (window.localStorage.getItem("USERPROFILE_CONDICIONFRENTEALIVA") != "")
            $("#perfil_condicionFrenteIVA").text(window.localStorage.getItem("USERPROFILE_CONDICIONFRENTEALIVA"));
        if (window.localStorage.getItem("USERPROFILE_LEYENDAFACTURA") != "")
            $("#perfil_leyendaFactura").text(window.localStorage.getItem("USERPROFILE_LEYENDAFACTURA"));
        if (window.localStorage.getItem("USERPROFILE_EMAIL") != "")
            $("#perfil_email").text(window.localStorage.getItem("USERPROFILE_EMAIL"));

        $("#perfil_notSyncronizedMessage").css("display", "none");
    } else {
        $("#perfil_notSyncronizedMessage").css("display", "block");
    }
}

function loadUserResumen() {
    if (window.localStorage.getItem("USERLOGIN_GRANTED") == "YES") {

        if (window.localStorage.getItem("USERRESUMEN_VENTAS") != "")
            $("#resumen_ventasPendientes").text("$" + window.localStorage.getItem("USERRESUMEN_VENTAS"));
        if (window.localStorage.getItem("USERRESUMEN_COMPRAS") != "")
            $("#resumen_comprasPendientes").text("$" + window.localStorage.getItem("USERRESUMEN_COMPRAS"));
        if (window.localStorage.getItem("USERRESUMEN_PRESUPUESTOS") != "")
            $("#resumen_presupuestosPendientes").text("$" + window.localStorage.getItem("USERRESUMEN_PRESUPUESTOS"));

        $("#resumen_notSyncronizedMessage").css("display", "none");
    } else {
        $("#resumen_notSyncronizedMessage").css("display", "block");
    }
}

function loadUserCustomers() {
    if (window.localStorage.getItem("USERLOGIN_GRANTED") == "YES") {
        var totalCustomers = parseInt(window.localStorage.getItem("USERCUSTOMER_TOTALROWS"), 10);

        if (totalCustomers > 0) {
            var clientes_dataContainerTable = $("#clientes_dataContainerTable");

            for (var i = 0; i < totalCustomers; i++) {

                var liContainer = '<li class="table_row">';
                liContainer += '<div class="table_section_14">' + window.localStorage.getItem("USERCUSTOMER_RAZONSOCIAL_" + i).toUpperCase() + '</div>';
                liContainer += '<div class="table_section_14">' + window.localStorage.getItem("USERCUSTOMER_IDENTIFICACION_" + i).toUpperCase() + '</div>';
                liContainer += '<div class="table_section_14">' + window.localStorage.getItem("USERCUSTOMER_EMAIL_" + i).toUpperCase() + '</div>';
                liContainer += '</li>';
                clientes_dataContainerTable.append(liContainer);
            }
        }

        $("#clientes_notSyncronizedMessage").css("display", "none");
    } else {
        $("#clientes_notSyncronizedMessage").css("display", "block");
    }
}

function loadUserInvoices() {
    if (window.localStorage.getItem("USERLOGIN_GRANTED") == "YES") {
        var total = parseInt(window.localStorage.getItem("USERINVOICES_TOTALROWS"), 10);

        if (total > 0) {
            var dataContainerTable = $("#ventas_dataContainerTable");
            for (var i = 0; i < total; i++) {

                var liContainer = '<tr style="cursor: default !important; background-color:#EEEEEE;border-bottom: 1px dotted #9a9a9a;" >';
                liContainer += '<td style="width: 20px; padding:10px;">';
                liContainer += '<button class="btn" onclick="invoicesExpand(this.id)" id="' + window.localStorage.getItem("USERINVOICES_INVOICEID_" + i) + '" type="button">Ver</button>';
                liContainer += '</td>';
                liContainer += '<td style="font-weight: 700; text-align: center;width: 120px; padding:10px;">';
                liContainer += window.localStorage.getItem("USERINVOICES_SERIENAME_" + i);
                liContainer += '</td>';
                liContainer += '<td style="width:350px; color:#607BAA; font-weight: 700; text-align: left; padding:10px;">';
                liContainer += window.localStorage.getItem("USERINVOICES_CUSTOMERNAME_" + i).toUpperCase();
                liContainer += '</td>';
                liContainer += '<td style="width:100px;text-align: center; padding:10px;">';
                liContainer += window.localStorage.getItem("USERINVOICES_ISSUEDATE_" + i);
                liContainer += '</td>                                        ';
                liContainer += '<td class="right" style="width:100px;font-weight: 700; padding:10px;">';
                liContainer += '$' + window.localStorage.getItem("USERINVOICES_GROSSAMOUNT_" + i);
                liContainer += '</td>';
                liContainer += '</tr>';
                liContainer += '<tr id="details_' + window.localStorage.getItem("USERINVOICES_INVOICEID_" + i) + '" style="display:none;">';
                liContainer += '<td></td>';
                liContainer += '<td>';
                liContainer += '<table style="width:100%;">';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>Neto</td>';
                liContainer += '</tr>';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>IVA</td>';
                liContainer += '</tr>';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>Cobrado</td>';
                liContainer += '</tr>';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>No. Cbte</td>';
                liContainer += '</tr>';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>CAE</td>';
                liContainer += '</tr>';
                liContainer += '</table>';
                liContainer += '</td>';
                liContainer += '<td>';
                liContainer += '<table style="width:100%;">';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>$ ' + window.localStorage.getItem("USERINVOICES_NETO_" + i) + '</td>';
                liContainer += '</tr>';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>$ ' + window.localStorage.getItem("USERINVOICES_IMPUESTOS_" + i) + '</td>';
                liContainer += '</tr>';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>$ ' + window.localStorage.getItem("USERINVOICES_IMP_PENDIENTE_" + i) + '</td>';
                liContainer += '</tr>';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>' + window.localStorage.getItem("USERINVOICES_NROCBTE_" + i) + '</td>';
                liContainer += '</tr>';
                liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                liContainer += '<td>' + window.localStorage.getItem("USERINVOICES_NROCAE_" + i) + '</td>';
                liContainer += '</tr>';
                liContainer += '</table>';
                liContainer += '</td>';


                liContainer += '</tr>';

                dataContainerTable.append(liContainer);
            }
        }

        $("#ventas_notSyncronizedMessage").css("display", "none");
    } else {
        $("#ventas_notSyncronizedMessage").css("display", "block");
    }
}

function loadUserInvoicesTemp() {
    if (window.localStorage.getItem("USERLOGIN_GRANTED") == "YES") {
        var total = parseInt(window.localStorage.getItem("TEMP_INVOICES_COUNTER"), 10);
        //var childs = window.localStorage.getItem("TEMP_INVOICES_ITEMS_COUNTER_" + i);

        if (total > 0) {
            var dataContainerTable = $("#ventas_dataContainerTable");

            for (var i = total; i >= 0; i--) {
                try {
                    var invoiceType = window.localStorage.getItem("TEMP_INVOICES_INVOICETYPE_" + i);
                    var invoiceTypeName = "";
                    switch (invoiceType) {
                        case "1":
                            invoiceTypeName = "Factura A";
                            break;
                        case "2":
                            invoiceTypeName = "Nota de Debito A";
                            break;
                        case "3":
                            invoiceTypeName = "Nota de Credito A";
                            break;
                        case "6":
                            invoiceTypeName = "Factura B";
                            break;
                        case "7":
                            invoiceTypeName = "Nota de Debito B";
                            break;
                        case "8":
                            invoiceTypeName = "Nota de Credito B";
                            break;
                        case "19":
                            invoiceTypeName = "Factura E";
                            break;
                        case "20":
                            invoiceTypeName = "Nota de Debito E";
                            break;
                        case "21":
                            invoiceTypeName = "Nota de Credito E";
                            break;
                        default:
                            invoiceTypeName = "";
                            break;
                    }

                    var liContainer = '<tr style="cursor: default !important; background-color:#EEEEEE;border-bottom: 1px dotted #9a9a9a;" >';
                    liContainer += '<td style="width: 80px;">';
                    liContainer += '<button class="btn" onclick="tempInvoiceDelete(this.id)" id="tempInvoice-' + i + '" type="button">X</button>';
                    liContainer += '<button class="btn" onclick="invoicesExpand(this.id)" id="tempInvoice-' + i + '" type="button">Ver</button>';
                    liContainer += '</td>';
                    liContainer += '<td style="font-weight: 700; text-align: center;width: 120px; padding:10px;">';
                    liContainer += invoiceTypeName;
                    liContainer += '</td>';
                    liContainer += '<td style="width:350px; color:#607BAA; font-weight: 700; text-align: left; padding:10px;">';
                    liContainer += window.localStorage.getItem("TEMP_INVOICES_CUSTOMER_" + i).toUpperCase();
                    liContainer += '</td>';
                    liContainer += '<td style="width:100px;text-align: center; padding:10px;">';
                    liContainer += window.localStorage.getItem("TEMP_INVOICES_ISSUEDATESHOW_" + i);
                    liContainer += '</td>                                        ';
                    liContainer += '<td class="right" style="width:100px;font-weight: 700; padding:10px;">';
                    liContainer += '$' + numberFormat(window.localStorage.getItem("TEMP_INVOICES_GROSSAMOUNT_" + i), 2);
                    liContainer += '</td>';
                    liContainer += '</tr>';

                    liContainer += '<tr id="details_tempInvoice-' + i + '" style="display:none;">';
                    liContainer += '<td></td>';
                    liContainer += '<td></td>';
                    liContainer += '<td>';

                    for (var x = 0; x < window.localStorage.getItem("TEMP_INVOICES_ITEMS_COUNTER_" + i); x++) {
                        liContainer += '<table style="width:100%;margin-top:5px;">';
                        liContainer += '<tr style="border-bottom: 1px dotted #9A9A9A;">';
                        liContainer += '<td style="font-size:10px;width:100px;">Cod.: ' + window.localStorage.getItem("TEMP_INVOICES_ITEM_COD_REFERENCE_" + i + "_" + x) + '</td>';
                        liContainer += '<td style="font-size:10px;width:40px;">Cant.: ' + window.localStorage.getItem("TEMP_INVOICES_ITEM_QTY_" + i + "_" + x) + '</td>';
                        liContainer += '<td style="font-size:10px;width:100px;">Final: $' + numberFormat(window.localStorage.getItem("TEMP_INVOICES_ITEM_GROSSAMOUNT_" + i + "_" + x), 2) + '</td>';
                        liContainer += '</tr>';
                        liContainer += '</table>';
                    }
                    liContainer += '</td>';
                    liContainer += '</tr>';



                    dataContainerTable.append(liContainer);
                } catch (ex) {
                    var liContainer = "<tr style='display:none;'><td>" + ex + "</td></tr>";
                    dataContainerTable.append(liContainer);
                }
            }
            $("#btnSyncToSystem").css("display", "block");
            $("#msgNoInvoices").css("display", "none");
        } else {
            $("#btnSyncToSystem").css("display", "none");
            $("#msgNoInvoices").css("display", "block");
        }
        $("#ventas_notSyncronizedMessage").css("display", "none");
    } else {
        $("#ventas_notSyncronizedMessage").css("display", "block");
    }
}

function loadUserProductos() {
    if (window.localStorage.getItem("USERLOGIN_GRANTED") == "YES") {
        var total = parseInt(window.localStorage.getItem("USERPRODUCTS_TOTALROWS"), 10);
        if (total > 0) {
            var dataContainerTable = $("#productos_dataContainerTable");

            for (var i = 0; i < total; i++) {

                var liContainer = '<li class="table_row">';
                liContainer += '<div class="table_section_14">' + window.localStorage.getItem("USERPRODUCTS_REFERENCE_" + i).toUpperCase() + '</div>';
                liContainer += '<div class="table_section_14">' + window.localStorage.getItem("USERPRODUCTS_DESCRIPTION_" + i).toUpperCase() + '</div>';
                liContainer += '<div class="table_section_14">' + window.localStorage.getItem("USERPRODUCTS_PRICE_" + i).toUpperCase() + '</div>';
                liContainer += '</li>';
                dataContainerTable.append(liContainer);
            }
        }

        $("#productos_notSyncronizedMessage").css("display", "none");
    } else {
        $("#productos_notSyncronizedMessage").css("display", "block");
    }
}

function refreshPage(page) {
    location.reload();
    /*
     if (page === null) {
     location.reload();
     } else {        
     //location.reload();
     //location.href = 'index.html#!/'+page; // does not work.
     }*/
}

function closeApp() {
    if (confirm("¿Seguro que desea cerrar la aplicacion?")) {
        navigator.app.exitApp();
    }
}

function backHistoryPage() {
    if (confirm("Seguro que desea volver a la pagina anterior?")) {
        window.history.back();
    }
}

function syncToSystem(type) {
    if (confirm("Esta seguro que desea enviar la informacion al sistema en linea?")) {
        switch (type) {
            case "invoices":
                var total = parseInt(window.localStorage.getItem("TEMP_INVOICES_COUNTER"), 10);

                var params = "";
                params = params + "&totalInvoices=" + encodeURIComponent(total);
                if (total > 0) {
                    for (var i = 0; i < total; i++) {
                        try {
                            var invoiceType = window.localStorage.getItem("TEMP_INVOICES_INVOICETYPE_" + i);
                            var invoiceTypeName = "";
                            switch (invoiceType) {
                                case "1":
                                    invoiceTypeName = "Factura A";
                                    break;
                                case "2":
                                    invoiceTypeName = "Nota de Debito A";
                                    break;
                                case "3":
                                    invoiceTypeName = "Nota de Credito A";
                                    break;
                                case "6":
                                    invoiceTypeName = "Factura B";
                                    break;
                                case "7":
                                    invoiceTypeName = "Nota de Debito B";
                                    break;
                                case "8":
                                    invoiceTypeName = "Nota de Credito B";
                                    break;
                                case "19":
                                    invoiceTypeName = "Factura E";
                                    break;
                                case "20":
                                    invoiceTypeName = "Nota de Debito E";
                                    break;
                                case "21":
                                    invoiceTypeName = "Nota de Credito E";
                                    break;
                                default:
                                    invoiceTypeName = "";
                                    break;
                            }

                            params = params + "&TEMP_INVOICES_INVOICETYPE_" + i + "=" + encodeURIComponent(invoiceTypeName);
                            params = params + "&TEMP_INVOICES_CUSTOMER_" + i + "=" + encodeURIComponent(window.localStorage.getItem("TEMP_INVOICES_CUSTOMER_" + i).toUpperCase());
                            params = params + "&TEMP_INVOICES_ISSUEDATESHOW_" + i + "=" + encodeURIComponent(window.localStorage.getItem("TEMP_INVOICES_ISSUEDATESHOW_" + i));
                            params = params + "&TEMP_INVOICES_GROSSAMOUNT_" + i + "=" + encodeURIComponent(window.localStorage.getItem("TEMP_INVOICES_GROSSAMOUNT_" + i));
                            params = params + "&TEMP_INVOICES_ITEMS_COUNTER_" + i + "=" + encodeURIComponent(window.localStorage.getItem("TEMP_INVOICES_ITEMS_COUNTER_" + i));
                            for (var x = 0; x < window.localStorage.getItem("TEMP_INVOICES_ITEMS_COUNTER_" + i); x++) {
                                params = params + "&TEMP_INVOICES_ITEM_COD_REFERENCE_" + i + "_" + x + "=" + encodeURIComponent(window.localStorage.getItem("TEMP_INVOICES_ITEM_COD_REFERENCE_" + i + "_" + x));
                                params = params + "&TEMP_INVOICES_ITEM_QTY_" + i + "_" + x + "=" + encodeURIComponent(window.localStorage.getItem("TEMP_INVOICES_ITEM_QTY_" + i + "_" + x));
                                params = params + "&TEMP_INVOICES_ITEM_GROSSAMOUNT_" + i + "_" + x + "=" + encodeURIComponent(window.localStorage.getItem("TEMP_INVOICES_ITEM_QTY_" + i + "_" + x));
                            }
                        } catch (ex) {
                        }
                    }
                }

                alert(params);
                return;

                var url = "https://tufacturaelectronica.net/appmobile/ajaxcalls/syncTempInvoices.php";
                $.ajax({
                    type: "get",
                    url: url,
                    data: "?syncinvoices=true&" + params, // serializes the form's elements.
                    dataType: 'json', // what type of data do we expect back from the server
                    success: function (data)
                    {
                        var parsed_data = data;

                        $(".se-pre-con").fadeOut();
                        //alert(parsed_data["success"] + " -- " + parsed_data["message"] + " -- " + parsed_data + " -- " + parsed_data["errors"]);

                        if (parsed_data["errors"] == "")
                        {


                            // parsed_data

                            clearTempInvoices();
                            location.href = 'ventas-temp.html';
                        } else {
                            alert("Existe un error en la sincronizacion. Por favor, vuelva a intentarlo.");
                        }
                    },
                    error: function () {
                        alert("Error con la conexion al servidor. Revise su conexion a Internet");
                        $(".se-pre-con").fadeOut("slow");
                    }
                });




                break;
            default:
                break;
        }
    }
}

function numberFormat(val, decimalPlaces) {
    var multiplier = Math.pow(10, decimalPlaces);
    return (Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces);
}

function clearTempInvoices() {
    // remove all entries for temp invoices
    var total = parseInt(window.localStorage.getItem("TEMP_INVOICES_COUNTER"), 10);
    if (total > 0) {
        for (var i = 0; i < total; i++) {
            try {
                window.localStorage.removeItem("TEMP_INVOICES_INVOICETYPE_" + i);
                window.localStorage.removeItem("TEMP_INVOICES_CUSTOMER_" + i);
                window.localStorage.removeItem("TEMP_INVOICES_ISSUEDATESHOW_" + i);
                window.localStorage.removeItem("TEMP_INVOICES_GROSSAMOUNT_" + i);
                window.localStorage.removeItem("TEMP_INVOICES_ITEMS_COUNTER_" + i);
                for (var x = 0; x < window.localStorage.getItem("TEMP_INVOICES_ITEMS_COUNTER_" + i); x++) {
                    try {
                        window.localStorage.removeItem("TEMP_INVOICES_ITEM_COD_REFERENCE_" + i + "_" + x);
                        window.localStorage.removeItem("TEMP_INVOICES_ITEM_QTY_" + i + "_" + x);
                        window.localStorage.removeItem("TEMP_INVOICES_ITEM_QTY_" + i + "_" + x);
                    } catch (ex) {
                    }
                }
            } catch (ex) {
            }
        }
    }
    window.localStorage.removeItem("TEMP_INVOICES_COUNTER");
}