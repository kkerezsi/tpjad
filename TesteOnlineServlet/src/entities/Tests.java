package entities;

// Generated Jan 7, 2017 11:34:22 PM by Hibernate Tools 3.4.0.CR1

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * Tests generated by hbm2java
 */
@Entity
@Table(name = "Tests", catalog = "tpjad")
public class Tests implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private Users users;
	private String domain;
	private String description;
	private Set<Questions> questionses = new HashSet<Questions>(0);
	private Set<Results> resultses = new HashSet<Results>(0);

	public Tests() {
	}

	public Tests(String domain, String description) {
		this.domain = domain;
		this.description = description;
	}

	public Tests(int id, Users users, String domain, String description) {
		this.id = id;
		this.users = users;
		this.domain = domain;
		this.description = description;
	}

	public Tests(int id, Users users, String domain, String description,
			Set<Questions> questionses, Set<Results> resultses) {
		this.id = id;
		this.users = users;
		this.domain = domain;
		this.description = description;
		this.questionses = questionses;
		this.resultses = resultses;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "author", nullable = false)
	public Users getUsers() {
		return this.users;
	}

	
	public void setUsers(Users users) {
		this.users = users;
	}

	@Column(name = "domain", nullable = false)
	public String getDomain() {
		return this.domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	@Column(name = "description", nullable = false)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tests")
	public Set<Questions> getQuestionses() {
		return this.questionses;
	}

	public void setQuestionses(Set<Questions> questionses) {
		this.questionses = questionses;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tests")
	public Set<Results> getResultses() {
		return this.resultses;
	}

	public void setResultses(Set<Results> resultses) {
		this.resultses = resultses;
	}

	public String toString() {
		return "{\"id\":" + id + ", \"domain\":\"" + domain
				+ "\", \"username\":\"" + users.getFullName()
				+ "\", \"description\":\"" + description + "\", "
				+ "\"questionses\":" + questionses.toString() +"}";
	}
	
}
