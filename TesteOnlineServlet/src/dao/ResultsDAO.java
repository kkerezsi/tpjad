package dao;

import entities.*;

import java.util.*;

import org.hibernate.*;
import org.hibernate.criterion.Restrictions;

public class ResultsDAO {

	private SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	@SuppressWarnings("unchecked")
	public List<Results> findALL() {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return this.sessionFactory.getCurrentSession()
					.createCriteria(Results.class).list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	public int create(Results r) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			int id = (Integer) this.sessionFactory.getCurrentSession().save(r);
			this.sessionFactory.getCurrentSession().getTransaction().commit();
			return id;
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			this.sessionFactory.getCurrentSession().getTransaction().rollback();
			return -1;
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<Results> findResultsOfUser(Users user) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return this.sessionFactory.getCurrentSession()
					.createCriteria(Results.class).add(Restrictions.eq("users", user))
					.list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
	

	@SuppressWarnings("unchecked")
	public List<Results> findResultsOfTests(Tests test) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return this.sessionFactory.getCurrentSession()
					.createCriteria(Results.class).add(Restrictions.eq("tests", test))
					.list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
}
