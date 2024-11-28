package com.maram.livres.entities;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "titre", types = { Livre.class })
public interface LivreProjection {
	public String getTitre();
}
