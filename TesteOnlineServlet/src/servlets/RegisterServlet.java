package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.UsersDAO;
import entities.Users;

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet(
		name = "Register", 
		urlPatterns = { "/Register" }, 
		initParams = { 
				@WebInitParam(name = "username", value = "String"), 
				@WebInitParam(name = "password", value = "String")
		})
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
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
		String password = request.getParameter("password");
		
		if(username != null && password != null){
			UsersDAO usersDao = new UsersDAO();
			Users user = usersDao.login(username, password);
			
			PrintWriter writer = response.getWriter();
			if (user != null){
				writer.write("User alredy exists");
			}else{
				
				writer.write("User created");
				
				Users user2 = new Users();
				user2.setEmail(username + "@email.com");
				user2.setFullName(username);
				user2.setPassword(password);
				usersDao.create(user2);
			}
		}
	}

}
