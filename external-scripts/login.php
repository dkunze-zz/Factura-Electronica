<?php

#ref - https://scotch.io/tutorials/submitting-ajax-forms-with-jquery

$errors = array();      // array to hold validation errors
$data = array();      // array to pass back data

if (empty($_GET['login_cuit'])) {
    $errors['login_cuit'] = 'El Cuit o Cuil es requerido.';
}

if (empty($_GET['login_password'])) {
    $errors['login_password'] = 'La Contraseña es requerida.';
}

// return a response ===========================================================
// if there are any errors in our errors array, return a success boolean of false
if (!empty($errors)) {
    // if there are items in our errors array, return those errors
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    // if there are no errors process our form, then return a message
    // DO ALL YOUR FORM PROCESSING HERE
    // THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)
    // show a message of success and provide a true success variable

    require( "/var/www/html/inc/functions.inc.php" );
    $mysqli = mysqliconnector();
    $mysqli->query("USE " . DB_DATABASESYSTEM);
    $qSearchUser = $mysqli->query("SELECT * FROM fe_users WHERE usuario = '" . mysqli_real_escape_string($mysqli, $_GET['login_cuit']) . "' AND password = '" . md5(mysqli_real_escape_string($mysqli, $_GET['login_password'])) . "' ");
    $qSearchUserResult = $qSearchUser->num_rows;
    if ($qSearchUserResult > 0) {
        $data['success'] = true;
        $data['message'] = 'Login Exitoso';
        $data['errors'] = "";

        //row->fetch_assoc(): --> fill them
        $data['USERPROFILE_NOMBRECOMPLETO'] = "";
        $data['USERPROFILE_NOMBREFANTASIA'] = "";
        $data['USERPROFILE_IDENTIFICADOR'] = "";
        $data['USERPROFILE_TIPOIDENTIFICADOR'] = "";
        $data['USERPROFILE_INGRESOSBRUTOS'] = "";
        $data['USERPROFILE_PUNTODEVENTA'] = "";
        $data['USERPROFILE_DOMICILIOCOMERCIAL'] = "";
        $data['USERPROFILE_TELEFONO'] = "";
        $data['USERPROFILE_INICIOACTIVIDADES'] = "";
        $data['USERPROFILE_CONDICIONFRENTEALIVA'] = "";
        $data['USERPROFILE_LEYENDAFACTURA'] = "";
        $data['USERPROFILE_EMAIL'] = "";
        
    } else {
        $data['success'] = false;
        $data['errors'] = "Error en el usuario y/o contraseña";
    }
}

// return all our data to an AJAX call
echo json_encode($data);
?>