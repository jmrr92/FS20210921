package com.examples;

import java.util.regex.Pattern;

public class Dni {
	
	public boolean esDNI(String dni){
		Pattern algoritmo = Pattern.compile("[0-9]{7,8}[A-Z a-z]");
		if (!algoritmo.matcher(dni).matches()) {
			return false;			
		}
	    String numero = dni.substring(0, dni.length() - 1);
	    String letra = dni.substring(dni.length() - 1);
	    return Character.toUpperCase(letra.charAt(0)) == 
	    		"TRWAGMYFPDXBNJZSQVHLCKE".charAt(Integer.parseInt(numero) % 23);
	}
}