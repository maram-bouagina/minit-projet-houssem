package com.maram.livres.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.maram.livres.entities.Genre;
import com.maram.livres.entities.Livre;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
//import org.springframework.stereotype.Repository;
//@Repository
@RepositoryRestResource(path="rest")
public interface LivreRepository extends JpaRepository<Livre, Long> {
			List <Livre> findByTitre(String tit);
			List<Livre> findByTitreContains(String tit);
			/*@Query("select l from Livre l where l.titre like %?1 and l.nbpages > ?2")
			List<Livre>findByTitreNbpages (String titre, int nbpages);*/
			
			@Query("select l from Livre l   where l.titre like %:titre and l.nbpages > :nbpages")
			List <Livre> findByTitreNbpages(@Param("titre") String titre,@Param("nbpages") int nbpages);

			@Query("select l from Livre l where l.genre = ?1")
			List<Livre> findByGenre (Genre genre);
			
			//List<Livre> findByGenreIdGenre(Long id);
			
			List<Livre> findByOrderByTitreAsc();
			
			@Query("select l from Livre l order by l.titre ASC, l.nbpages DESC")
			List<Livre> trierLivreTitresNbpages ();



}
