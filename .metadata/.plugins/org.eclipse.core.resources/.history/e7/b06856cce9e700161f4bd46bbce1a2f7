package main;

import dao.*;
import entities.*;

import java.io.File;
import java.io.IOException;
import java.util.*;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.hibernate.Session;

import com.sun.corba.se.spi.orbutil.fsm.Guard.Result;

import controller.testController;

public class Main {

	public static void main(String[] args) throws JsonGenerationException,
			JsonMappingException, IOException {

		// /users testing

		TestsDAO testDAO = new TestsDAO();
		Tests test = testDAO.findTest(5);
		System.out.println("FTest t5: " + test.toString());



		// JSON from file to Object
		ObjectMapper mapper = new ObjectMapper();
		test = mapper.readValue(new File(
				"C:\\Users\\brad\\TesteOnline\\TesteOnlineServlet\\file.json"),
				Tests.class);

		System.out.println("FTest t5: " + test.toString());
	}
}
