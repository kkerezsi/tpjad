package controller;

import java.io.File;
import java.io.IOException;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import entities.*;
import dao.*;

public class testController {

	public int addTest(String str, int user) throws JsonParseException,
			JsonMappingException, IOException {

		TestsDAO testDAO = new TestsDAO();
		QuestionsDAO questionDAO = new QuestionsDAO();
		AnswereDAO answereDAO = new AnswereDAO();

		ObjectMapper mapper = new ObjectMapper();

		// JSON from file to Object
		Tests test = mapper.readValue(new File(
				"C:\\Users\\brad\\TesteOnline\\TesteOnlineServlet\\file.json"),
				Tests.class);

		if (test.getId() == 0) {
			Tests t = new Tests();
			t.setDomain(test.getDomain());
			t.setDescription(test.getDescription());
			int idTest = testDAO.create(t);

			for (Questions question : test.getQuestionses()) {
				Questions q = new Questions();
				q.setTests(testDAO.findTest(idTest));
				q.setText(question.getText());
				
				int idQuestion = questionDAO.create(q);
				
				for (Answere answere : question.getAnsweres()) {
					Answere a = new Answere();
					a.setCorect(answere.isCorect());
					a.setText(answere.getText());
					a.setQuestions(questionDAO.findQuestion(idQuestion));
					
					answereDAO.create(a);
					
				}				
			}
		}

		System.out.println("FTest t5: " + test.toString());

		return 0;
	}

}
