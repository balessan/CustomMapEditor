<?php

/**
*
* Utility base helper classes, allowing to ensure safety of manipulated data
*
**/
class Utility
{
	public static function ReturnSafeArrayFromPost($post)
	{
		$data = array();
		
		foreach($post as $key)
		{
			$data[$key] = Utility::ConvertAsSafeString($post[$key]);
		}
		
		return $data;
	}

	public static function ConvertAsSafeString($string)
	{
		$result = null;
		
		if (isset($string))
		{
			$result = htmlspecialchars($string);
		}

		return $result;	
	}
}

?>
