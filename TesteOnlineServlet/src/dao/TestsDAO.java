package dao;

import entities.*;

import java.util.*;

import org.hibernate.*;
import org.hibernate.criterion.Restrictions;

public class TestsDAO {

	private SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	@SuppressWarnings("unchecked")
	public List<Tests> findALL() {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return this.sessionFactory.getCurrentSession()
					.createCriteria(Tests.class).list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	public int create(Tests t) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			int id = (Integer) this.sessionFactory.getCurrentSession().save(t);
			this.sessionFactory.getCurrentSession().getTransaction().commit();
			return id;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			this.sessionFactory.getCurrentSession().getTransaction().rollback();
			return -1;
		}
	}

	@SuppressWarnings("unchecked")
	public List<Tests> findTestOfUser(Users user) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return this.sessionFactory.getCurrentSession()
					.createCriteria(Tests.class)
					.add(Restrictions.eq("users", user)).list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	public Tests findTest(int id) {
		try {
			if (!this.sessionFactory.getCurrentSession().getTransaction()
					.isActive())
				this.sessionFactory.getCurrentSession().getTransaction()
						.begin();
			return (Tests) sessionFactory.getCurrentSession()
					.createCriteria(Tests.class).add(Restrictions.eq("id", id))
					.uniqueResult();
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}

	public String getCorectAnsweres(int id) {
		String res = "[ ";

		Tests test = this.findTest(id);

		for (Questions question : test.getQuestionses()) {
			res += "{ \"question\":" + question.getId() + ", \"answere\":";
			for (Answere answere : question.getAnsweres()) {
				if (answere.isCorect()) {
					res += answere.getId() + "}, ";
				}
			}
		}

		res = res.substring(0, res.length() - 1);
		res += " ]";

		return res;

	}
}
