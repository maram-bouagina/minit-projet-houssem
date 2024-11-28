package com.maram.livres;

import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.maram.livres.entities.Genre;
import com.maram.livres.entities.Livre;
import com.maram.livres.repos.LivreRepository;

@SpringBootTest
class LivresApplicationTests {

	@Autowired
	private LivreRepository livreRepository;
	@Test
	public void testCreateLivre() {
	Livre liv= new Livre("kafka on the shore","haruki murakami",1000,new Date());
	livreRepository.save(liv);
	}
	@Test
	public void testFindLivre()
	{
	Livre l = livreRepository.findById(1L).get(); 
	System.out.println(l);
	}
	@Test
	public void testUpdateLivre()
	{
	Livre l = livreRepository.findById(1L).get();
	l.setNbpages(800);
	livreRepository.save(l);
	}
	@Test
	public void testDeleteLivre()
	{
	livreRepository.deleteById(1L);
	}
	@Test
	public void testListerTousLivres()
	{
	List<Livre> livs = livreRepository.findAll();
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	}
	@Test
	public void testFindLivreByTitre()
	{
	List <Livre> livres= livreRepository.findByTitre("shining"); 
	for (Livre l : livres)
	{
	System.out.println(l);
	}
	}
	@Test
	public void testFindByNomLivreContains()
	{
	List<Livre> livres=livreRepository.findByTitreContains("k");
	for (Livre l : livres)
	{
	System.out.println(l);
	} 
	}
	@Test
	public void testfindByTitreNbpages()
	{
	List<Livre> livs = livreRepository.findByTitreNbpages("kafka on the shore",1000);
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	}
	@Test
	public void testfindByCategorie()
	{
	Genre gen = new Genre();
	gen.setIdgenre(1L);
	List<Livre> livs = livreRepository.findByGenre(gen);
	for (Livre l :livs)
	{
	System.out.println(l);
	}
	}
	/*@Test
	public void findByGenreIdGen()
	{
	List<Livre> livs = livreRepository.findByGenreIdGen(1L);
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	 }
	*/
	@Test
	public void testfindByOrderByTitreAsc()
	{
	List<Livre> livs = 
	livreRepository.findByOrderByTitreAsc();
	for (Livre l : livs)
	{
	System.out.println(l);
	}
	}
	@Test
	public void testTrierLivresNbpages()
	{
	List<Livre> livs = livreRepository.trierLivreTitresNbpages();
	for (Livre l: livs)
	{
	System.out.println(l);
	}
	}




	
}
