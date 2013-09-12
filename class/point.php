<?php

/**
*
* Base Point class, used to save and manipulate geographical data
* By Benoît Alessandroni
*
**/
class Point 
{
	private $_latitude;
	private $_longitude;
	private $_title;
	private $_description;

	public function __construct($data)
	{
		$this->SetLatitude($data['latitude']);
		$this->SetLongitude($data['longitude']);
		$this->SetTitle($data['title']);
		$this->SetDescription($data['description']);
	}

	public function __construct() {}

	public function SetLatitude($latitude)
	{
		if (isset($latitude) && $this->_latitude != $latitude)
		{
			$this->_latitude = $latitude;
		}
	}

	public function SetLongitude($longitude)
	{
		if (isset($longitude) && $this->_longitude != $longitude)
		{
			$this->_longitude = $longitude;
		}
	}

	public function SetTitle($title)
	{
		if (isset($title) && $this->_title != $title)
		{
			$this->_title = $title;
		}
	}

	public function SetDescription($description)
	{
		if (isset($description) && $this->_description != $description)
		{
			$this->_description = $description;
		}
	}

	public function Save()
	{
		$success = false;
		try {
			$pointFile = "./osm_points.txt";
			$pointFileWritingLink = fopen($pointFile, 'a') or die('Cant\' open file');
			
			$newPoint = "\n" . $this->_latitude . "\t" . $this->_longitude . "\t" . $this->_title . "\t" . $this->_description . "\t./includes/img/osm_pois_icon.png\t24,24\t0,-24";
			
			fwrite($pointFileWritingLink, $newPoint);
			fclose($pointFileWritingLink);
			
			$success = true;
		} catch (Exception $e) {
			$success = $false;	
			die('File was not written properly:' + $e->getMessage());
		}
		
		return $success;
	}
}
