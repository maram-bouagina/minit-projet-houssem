package com.maram.livres.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maram.livres.entities.Genre;
import com.maram.livres.entities.Livre;
import com.maram.livres.repos.GenreRepository;
import com.maram.livres.repos.LivreRepository;

@Service
public class LivreServiceImpl implements LivreService {

    @Autowired
    private LivreRepository livreRepository;
    @Autowired
    private GenreRepository genreRepository;

    @Override
    public Livre saveLivre(Livre l) {
        return livreRepository.save(l);
    }

    @Override
    public Livre updateLivre(Livre l) {
        return livreRepository.save(l);
    }

    @Override
    public void deleteLivre(Livre l) {
        livreRepository.delete(l);
    }

    @Override
    public void deleteLivreById(Long id) {
        if (livreRepository.existsById(id)) {
            livreRepository.deleteById(id);
        } else {
            throw new RuntimeException("Livre with ID " + id + " does not exist.");
        }
    }

    @Override
    public Livre getLivre(Long id) {
        Optional<Livre> livre = livreRepository.findById(id);
        if (livre.isPresent()) {
            return livre.get();
        } else {
            throw new RuntimeException("Livre with ID " + id + " not found.");
        }
    }

    

	@Override
	public List<Livre> findByTitre(String titre) {
	return livreRepository.findByTitre(titre);
	}
	@Override
	public List<Livre> findByTitreContains(String titre) {
	return livreRepository.findByTitreContains(titre);
	}
	@Override
	public List<Livre> findByTitreNbpages(String titre, int nbpages) {
	return livreRepository.findByTitreNbpages(titre, nbpages);
	}
	@Override
	public List<Livre> findByGenreIdGen(Long id) {
	return livreRepository.findByGenre(genreRepository.findById(id).orElse(null));
	
	}
	@Override
	public List<Livre> findByOrderByTitreAsc() {
	return livreRepository.findByOrderByTitreAsc();
	}
	@Override
	public List<Livre> trierLivreTitresNbpages() {
	return livreRepository.trierLivreTitresNbpages();
}

	@Override
	public List<Livre> findByGenre(Genre genre) {
		// TODO Auto-generated method stub
		return livreRepository.findByGenre(genre);
	}

	@Override
	public List<Livre> getAllLivres() {
		// TODO Auto-generated method stub
		return livreRepository.findAll();
	}

}
