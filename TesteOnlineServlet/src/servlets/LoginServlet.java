package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.Utils;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.PrintWriter;

import dao.UsersDAO;
import entities.Users;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet(name = "Login", urlPatterns = { "/Login" }, initParams = {
		@WebInitParam(name = "username", value = "String"),
		@WebInitParam(name = "password", value = "String") })
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public LoginServlet() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		JSONObject j = null;
		
		String username = "";
		String password = "";
		
		try {
			j = Utils.convertRequestToJSON(request);
			username = j.getString("username");
			password = j.getString("password");
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		if (username != null && password != null) {
			UsersDAO usersDao = new UsersDAO();
			Users user = usersDao.login(username, password);

			PrintWriter writer = response.getWriter();
			if (user != null) {
				writer.write(user.toString());
			} else {
				writer.write("");
			}
		}
	}
}
