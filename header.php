<?php include_once('./globals.php'); ?>

<!DOCTYPE html>
<html>
	<head>
		<title>Custom Map Editor</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		
		<!-- Bootstrap -->
		<link href="<?php echo $include_path; ?>includes/css/bootstrap.min.css" rel="stylesheet">
		<link href="<?php echo $include_path; ?>includes/css/bootstrap-responsive.min.css" rel="stylesheet">
	</head>
	<body>
		
		<div id="header">
			<script src="<?php echo $include_path; ?>includes/js/jquery-1.9.1.min.js"></script>
			<script src="<?php echo $include_path; ?>includes/js/bootstrap.min.js"></script>
			<script src="<?php echo $include_path; ?>library/ckeditor/ckeditor.js"></script>
			<script src="<?php echo $include_path; ?>includes/js/jquery-ui-min.js"></script>

		   <div class="navbar navbar-inverse navbar-fixed-top">
		     <div class="navbar-inner"> 
		     <div class="container">
			<a class="brand" href="<?php echo $include_path; ?>index.php">Custom Map Editor</a>
			<div class="nav-collapse collapse">
			  <ul class="nav">
			    <li><a href="./index.php">Home</a></li>
			    <li><a href="./about.html">About</a></li>
			    <li><a href="./contact.html">Contact</a></li>
			  </ul>
			</div><!--/.nav-collapse -->
		      </div>
                      </div>
		    </div>
		</div>
