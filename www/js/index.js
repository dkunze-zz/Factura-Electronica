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
        location.href = '../index.html';
    }
}

function resetAndClearLocalStorage()
{
    window.localStorage.setItem("USERLOGIN_GRANTED", "NO");
    window.localStorage.removeItem("USERPROFILE_NOMBRECOMPLETO");
    window.localStorage.removeItem("USERPROFILE_NOMBREFANTASIA");
    window.localStorage.removeItem("USERPROFILE_IDENTIFICADOR");
    window.localStorage.removeItem("USERPROFILE_TIPOIDENTIFICADOR");
    window.localStorage.removeItem("USERPROFILE_INGRESOSBRUTOS");
    window.localStorage.removeItem("USERPROFILE_PUNTODEVENTA");
    window.localStorage.removeItem("USERPROFILE_DOMICILIOCOMERCIAL");
    window.localStorage.removeItem("USERPROFILE_TELEFONO");
    window.localStorage.removeItem("USERPROFILE_INICIOACTIVIDADES");
    window.localStorage.removeItem("USERPROFILE_CONDICIONFRENTEALIVA");
    window.localStorage.removeItem("USERPROFILE_LEYENDAFACTURA");
    window.localStorage.removeItem("USERPROFILE_EMAIL");
}

function loadUserProfile() {
    if (window.localStorage.getItem("USERLOGIN_GRANTED") == "YES") {
        $("#perfil_nombreCompleto").text(window.localStorage.getItem("USERPROFILE_NOMBRECOMPLETO"));
        $("#perfil_nombreFantasia").text(window.localStorage.getItem("USERPROFILE_NOMBREFANTASIA"));
        $("#perfil_identificador").text(window.localStorage.getItem("USERPROFILE_IDENTIFICADOR"));
        $("#perfil_tipoIdentificador").text(window.localStorage.getItem("USERPROFILE_TIPOIDENTIFICADOR"));
        $("#perfil_ingresosBrutos").text(window.localStorage.getItem("USERPROFILE_INGRESOSBRUTOS"));
        $("#perfil_puntoDeVenta").text(window.localStorage.getItem("USERPROFILE_PUNTODEVENTA"));
        $("#perfil_domicilioComercial").text(window.localStorage.getItem("USERPROFILE_DOMICILIOCOMERCIAL"));
        $("#perfil_telefono").text(window.localStorage.getItem("USERPROFILE_TELEFONO"));
        $("#perfil_inicioActividades").text(window.localStorage.getItem("USERPROFILE_INICIOACTIVIDADES"));
        $("#perfil_condicionFrenteIVA").text(window.localStorage.getItem("USERPROFILE_CONDICIONFRENTEALIVA"));
        $("#perfil_leyendaFactura").text(window.localStorage.getItem("USERPROFILE_LEYENDAFACTURA"));
        $("#perfil_email").text(window.localStorage.getItem("USERPROFILE_EMAIL"));
    }
}