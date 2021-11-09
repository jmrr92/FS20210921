package com.example.domains.entities.dtos;

import java.math.BigDecimal;
import java.sql.Timestamp;

import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FilmDTO {

	@JsonProperty("id")
	private int filmId;

	@JsonProperty("title")
	private String filmTitle;

	@JsonProperty("description")
	private String filmDescription;

	@JsonProperty("year")
	private Short filmYear;
	
	@JsonProperty("rentalDuraction")
	private byte filmDuraction;
	
	@JsonProperty("rate")
	private BigDecimal filmRate;
	
	@JsonProperty("replacement")
	private BigDecimal filmReplacement;
	
	@JsonProperty("update")
	private Timestamp update;

	@JsonProperty("language")
	private Language filmLanguage;

	public static Film from(FilmDTO source) {
		return new Film(
				source.filmId,
				source.filmDescription,
				source.update,
				source.filmDuraction,
				source.filmRate,
				source.filmReplacement,
				source.filmTitle,
				source.filmLanguage);
	}
	
	public static FilmDTO from(Film source) {
		return new FilmDTO(
				source.getFilmId(),
				source.getDescription(),
				source.getTitle(),
				source.getReleaseYear(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost(),
				source.getLastUpdate(),
				source.getLanguage());
	}

}
