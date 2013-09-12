<?php
	error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
	
	//Include Path definition to take care of local Apache Issue
	$include_path = '/CustomMapEditor/';
	
	//Autoload section to register all classes from ./classes/
	spl_autoload_extensions('.php, .class.php');

	function classLoader($class)
	{
		try {
			$filename = strtolower($class) . '.php';
			
			// Hack to avoid auto-loading on files generated by RedBean ORM	
			if (!strncmp("Model_", $class, strlen("Model_")))
				return true;
	
			$file =  dirname(__DIR__) . '/class/' . $filename;
			
			if (file_exists($file))
			{
				require $file;
			} else {
				echo 'File ' . $file . ' does not exist !';
			}	
		} catch (Exception $e) {
			echo $e->getMessage(), "\n";
		}
	}
 	
	spl_autoload_register('classLoader');
?>
