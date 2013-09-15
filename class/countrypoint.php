<?php

require_once('./point.php');

/**
*
* Country Point class, used to represent an instance
* Of a point we have to add to the country layer
* Copyright Benoît ALESSANDRONI
*
**/
class CountryPoint extends Point
{
	public function __construct($data)
	{
		parent::__construct($data);	
		$this->SetFile( __DIR__ . "/osm_" . $data['country'] . "_points.txt");
	}
}

?>
