package dao;

import entities.*;

import java.util.*;

import org.hibernate.*;
import org.hibernate.criterion.Restrictions;

public class UsersDAO {

	private SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	@SuppressWarnings("unchecked")
	public List<Users> findALL() {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return this.sessionFactory.getCurrentSession()
					.createCriteria(Users.class).list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	public int create(Users u) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			int id = (Integer) this.sessionFactory.getCurrentSession().save(u);
			this.sessionFactory.getCurrentSession().getTransaction().commit();
			return id;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			this.sessionFactory.getCurrentSession().getTransaction().rollback();
			return -1;
		}
	}

	public Users findUser(int id) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return (Users) this.sessionFactory.getCurrentSession()
					.createCriteria(Users.class).add(Restrictions.eq("id", id))
					.uniqueResult();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	public Users login(String username, String password) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return (Users) this.sessionFactory
					.getCurrentSession()
					.createCriteria(Users.class)
					.add(Restrictions.and(
							Restrictions.eq("fullName", username),
							Restrictions.eq("password", password)))
					.uniqueResult();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	public Users getByUsername(String username) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return (Users) this.sessionFactory
					.getCurrentSession()
					.createCriteria(Users.class)
					.add(Restrictions.eq("fullName", username))
					.uniqueResult();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
}
