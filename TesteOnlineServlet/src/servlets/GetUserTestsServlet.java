package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.TestsDAO;
import dao.UsersDAO;
import entities.Tests;
import entities.Users;

/**
 * Servlet implementation class GetUserTestsServlet
 */
@WebServlet(
		name = "GetUserTests", 
		urlPatterns = { "/GetUserTests" }, 
		initParams = { 
				@WebInitParam(name = "username", value = "String")
		})
public class GetUserTestsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetUserTestsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String username = request.getParameter("username");
		Users user = null;
		
		if (username != null) {
			UsersDAO usersDao = new UsersDAO();
			user = usersDao.getByUsername(username);
		}
		
		if (user != null) {
			TestsDAO testDAO = new TestsDAO();
			List<Tests> tests = testDAO.findTestOfUser(user);
			PrintWriter writer = response.getWriter();
			writer.write(tests.toString());
		}
	}

}
