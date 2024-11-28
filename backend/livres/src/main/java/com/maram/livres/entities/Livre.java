package com.maram.livres.entities;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
@Entity
public class Livre {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Long  idlivre;
		private String titre;
		private String auteur;
		private int nbpages;
	    private Date datepublication;
	    
	    public Livre(Long idlivre, String titre, String auteur, int nbpages, Date datepublication, Genre genre) {
			super();
			this.idlivre = idlivre;
			this.titre = titre;
			this.auteur = auteur;
			this.nbpages = nbpages;
			this.datepublication = datepublication;
			this.genre = genre;
		}
		@ManyToOne
	    private Genre genre;
	    
		public Genre getGenre() {
			return genre;
		}
		public void setGenre(Genre genre) {
			this.genre = genre;
		}
		public Livre() {
			super();
		}
		public Livre(String titre, String auteur, int nbpages, Date datepublication) {
			super();
			this.titre = titre;
			this.auteur = auteur;
			this.nbpages = nbpages;
			this.datepublication = datepublication;
		}

		public long getIdlivre() {
			return idlivre;
		}
		public void setIdlivre(long idlivre) {
			this.idlivre = idlivre;
		}
		public String getTitre() {
			return titre;
		}
		public void setTitre(String titre) {
			this.titre = titre;
		}
		public String getAuteur() {
			return auteur;
		}
		public void setAuteur(String auteur) {
			this.auteur = auteur;
		}
		public int getNbpages() {
			return nbpages;
		}
		public void setNbpages(int nbpages) {
			this.nbpages = nbpages;
		}
		public Date getDatepublication() {
			return datepublication;
		}
		public void setDatepublication(Date datepublication) {
			this.datepublication = datepublication;
		}
		@Override
		public String toString() {
		return "Livre [idlivre=" + idlivre + ", titre=" + 
		titre + ", auteur=" + auteur
		+ ", nbpages=" + nbpages + ", datepublication="+ datepublication+ "]";
		}
	    
}
