package com.example.domains.entities.dtos;

import com.example.domains.entities.Film;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {

	@JsonProperty("id")
	private int filmId;
	
	@JsonProperty("title")
	private String filmTitle;
	
	@JsonProperty("description")
	private String filmDescription;
	
	@JsonProperty("year")
	private Short filmYear;
	
	@JsonProperty("language")
	private Language filmLanguage;
	
	public static Film from(FilmDTO source) {
		return new Film(source.getFilmId(),source.getFilmTitle(),source.getFilmDescription(),source.getFilmYear(), source.getFilmLanguage());
	}
	
	public static FilmDTO from(Film source) {
		return new FilmDTO(source.getFilmId(),source.getTitle(),source.getDescription(),source.getReleaseYear(), source.getLanguage());
	}
	
}
