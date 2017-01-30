package dao;

import entities.*;

import java.util.*;

import org.hibernate.*;

public class AnswereDAO {

	private SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	@SuppressWarnings("unchecked")
	public List<Answere> findALL() {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return this.sessionFactory.getCurrentSession()
					.createCriteria(Answere.class).list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	public int create(Answere a) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			int id = (Integer) this.sessionFactory.getCurrentSession().save(a);
			this.sessionFactory.getCurrentSession().getTransaction().commit();
			return id;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			this.sessionFactory.getCurrentSession().getTransaction().rollback();
			return -1;
		}
	}

}
