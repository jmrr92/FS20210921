package com.example.infraestructure.repositories;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
	List<Category> findByNameStartingWithOrderByLastNameDesc(String prefijo);
	List<Category> findByLastUpdateGreaterThan(LocalDate fecha);
	
	<T> List <T> findByCategoryIdNotNull();
	
	@Query("FROM Actor a WHERE a.lastUpdate > ?1")
	List<Category> laMia(Date fecha);

}
