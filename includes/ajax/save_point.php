<?php
	require_once('../../globals.php');

	$response = array();
 
	if($_SERVER['REQUEST_METHOD'] == 'POST') {
	  // if form has been posted process data

	  // you dont need the addContact function you jsut need to put it in a new array
	  // and it doesnt make sense in this context so jsut do it here
	  // then used json_decode and json_decode to read/save your json in
	  // saveContact()
	  $data = Utility::ReturnSafeArrayFromPost($_POST);
	  
	  $point = new Point($data);

	  // always return true if you save the contact data ok or false if it fails
	  $response['status'] = $point->Save() ? 'success' : 'error';
	  $response['message'] = $response['status']
		  ? 'Votre nouveau point a bien été sauvegardé!'
		  : 'Il y a eu un problème lors de l\'ajout du point sur la carte.';

	  echo 'HERE';	  
	  header('Content-type: application/json');
	  echo json_encode($response);
	  exit;
	}
?>
