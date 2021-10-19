package com.examples;
import static org.junit.Assume.assumeTrue;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)

class CalculadoraTest {
	Calculadora calc;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		calc = new Calculadora();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testSuma() {
		calc = new Calculadora();
		assertEquals(4, calc.suma(2, 2));
	}

	@Nested
	@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
	class Divisiones {
		@Test
		void testDivideDoubleDouble() {
			assertEquals(0.5, calc.divide(1.0, 2.0));
			assertEquals(Double.POSITIVE_INFINITY, calc.divide(1.0, 0));
		}

		@Test
		@DisplayName("Division Entera")
		void testDivideIntInt() {
			assertEquals(1, calc.divide(2, 2));
			assertThrows(Exception.class, () -> calc.divide(1, 0));
		}
	}

	@Nested
	@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
	class Mockeado {
		@Mock
		Calculadora calculadora;

		@Test
		void suma_mock() {
			when(calculadora.suma(2, 2)).thenReturn(2.0);
			assertEquals(calculadora.suma(2, 2), 2);
		}
	}
}
