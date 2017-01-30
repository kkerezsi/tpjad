package dao;

import entities.*;

import java.util.*;

import org.hibernate.*;
import org.hibernate.criterion.Restrictions;

public class QuestionsDAO {

	private SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	@SuppressWarnings("unchecked")
	public List<Questions> findALL() {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return this.sessionFactory.getCurrentSession()
					.createCriteria(Questions.class).list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	public Questions findQuestion(int id) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return (Questions) this.sessionFactory.getCurrentSession()
					.createCriteria(Questions.class)
					.add(Restrictions.eq("id", id)).uniqueResult();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	public int create(Questions q) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			int id = (Integer) this.sessionFactory.getCurrentSession().save(q);
			this.sessionFactory.getCurrentSession().getTransaction().commit();
			return id;

		} catch (Exception e) {
			System.out.println(e.getMessage());
			this.sessionFactory.getCurrentSession().getTransaction().rollback();
			return -1;
		}
	}

}
