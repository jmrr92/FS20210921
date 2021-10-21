package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

class DniTest {
	Dni validar;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		validar = new Dni();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@ParameterizedTest
	@CsvSource({ "12345678Z", "30986941F", "76543218T"})
	void testEsDNItrue(String dni) {
		assertTrue(validar.esDNI(dni));
	}
	
	@ParameterizedTest
	@CsvSource({ "@NullString", "1234", "12332199E", "57382920Y", "''", "yjk"})
	void testEsDNIfalse(String dni) {
		assertFalse(validar.esDNI(dni));
	}

}
