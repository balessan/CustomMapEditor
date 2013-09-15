<?php

require_once('./point.php');

/**
*
* Season Point class, used to represent an instance
* Of a point we have to add to a specific season layer
* Copyright Benoît ALESSANDRONI
*
**/
class SeasonPoint extends Point
{
	public function __construct($data)
	{
		parent::__construct($data);	
		$this->SetFile( __DIR__ . "/osm_" . $data['season'] . "_points.txt"); 
	}
}

?>
