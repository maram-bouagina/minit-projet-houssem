package com.maram.livres.service;

import java.util.List;

import com.maram.livres.entities.Genre;
import com.maram.livres.entities.Livre;

public interface LivreService {
	Livre saveLivre(Livre l);
	Livre updateLivre(Livre l);
	void deleteLivre(Livre l);
	 void deleteLivreById(Long id);
	 Livre getLivre(Long id);
	List<Livre> getAllLivres();
	List<Livre> findByTitre(String titre);
	List<Livre> findByTitreContains(String titre);
	List<Livre> findByTitreNbpages (String titre, int nbpages);
	List<Livre> findByGenre (Genre genre);
	List<Livre> findByGenreIdGen(Long id);
	List<Livre> findByOrderByTitreAsc();
	List<Livre> trierLivreTitresNbpages();

}
