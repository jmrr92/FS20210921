package com.example.domains.entities.core.services.contracts;

import java.util.List;
import java.util.Optional;

import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

public interface DomainService<E, K> {
	List<E> getAll();
	Optional<E> getOne(K id);
	E add(E item) throws DuplicateKeyException, InvalidDataException;
	E modify(E item) throws NotFoundException, InvalidDataException;
	void delete(E item);
	void deleteById(K id);
}
