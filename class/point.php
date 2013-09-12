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
		if (isset($title) && $this->_title != $title)
		{
			$this->_title = $title;
		}
	}

	public function Save($data)
	{
		
	}
}
