<?php

/**
*
* Builder class used to create points classes instances on the fly
* Copyright Benoît ALESSANDRONI
*
**/
class PointBuilder
{
	public static function CreatePoint($data)
	{
		$success = false;

		if (isset($data['season']) && !empty($data['season'])
		{
			$success = self::CreateSeasonPoint($data);
		}
		
		if (isset($data['country']) && !empty($data['country'])
		{
			$success = self::CreateCountryPoint($data);
		}

		return $success;
	}

	private static function CreateSeasonPoint($data)
	{
		$success = false;

		if (isset($data['season']) and !empty($data['season'])
		{
			$point = new SeasonPoint($data);

			$success = $point->Save();
		}
		
		return $success;
	}

	private static function CreateCountryPoint($data)
	{
		$success = false;

		if (isset($data['country'] && !empty($data['country']))
		{
			$point = new CountryPoint($data);

			$success = $point->Save();
		}
	
		return $success;
	}
}

?>
