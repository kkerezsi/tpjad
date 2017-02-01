package main;

import dao.*;
import java.io.IOException;
import java.util.*;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;

public class Main {

	public static void main(String[] args) throws JsonGenerationException,
			JsonMappingException, IOException {

		// /users testing

		// JSON from file to Object
		UsersDAO usersDao = new UsersDAO();
		System.out.println(usersDao.findUser(7));

		ResultsDAO resultsDao = new ResultsDAO();
		List<entities.Results> results = resultsDao.findResultsOfUser(usersDao.findUser(7));
		
		System.out.println(results.toString());
		
		
	}
}
