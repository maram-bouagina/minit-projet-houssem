package com.maram.livres;
//import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class LivresApplication {

	public static void main(String[] args) {
		SpringApplication.run(LivresApplication.class, args);
	}

}
/*@SpringBootApplication
public class LivresApplication implements CommandLineRunner {
@Autowired
private RepositoryRestConfiguration repositoryRestConfiguration;
public static void main(String[] args) {
SpringApplication.run(LivresApplication.class, args);
}
@Override
public void run(String... args) throws Exception {
repositoryRestConfiguration.exposeIdsFor(Livre.class,Genre.class);
}
}*/