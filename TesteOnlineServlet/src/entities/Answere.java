package entities;

// Generated Jan 7, 2017 11:34:22 PM by Hibernate Tools 3.4.0.CR1

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Answere generated by hbm2java
 */
@Entity
@Table(name = "Answere", catalog = "tpjad")
public class Answere implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private Questions questions;
	private String text;
	private boolean corect;

	public Answere() {
	}

	public Answere(int id, Questions questions, String text, boolean corect) {
		this.id = id;
		this.questions = questions;
		this.text = text;
		this.corect = corect;
	}

	public Answere(String text, boolean corect) {
		this.text = text;
		this.corect = corect;
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
	@JoinColumn(name = "question", nullable = false)
	public Questions getQuestions() {
		return this.questions;
	}

	public void setQuestions(Questions questions) {
		this.questions = questions;
	}

	@Column(name = "text", nullable = false)
	public String getText() {
		return this.text;
	}

	public void setText(String text) {
		this.text = text;
	}

	@Column(name = "corect", nullable = false)
	public boolean isCorect() {
		return this.corect;
	}

	public void setCorect(boolean corect) {
		this.corect = corect;
	}

	public String toString() {
		return "{\"id\":" + id + ", \"text\":\"" + text + "\", \"isCorrect\":\"" + isCorect() + "\"}";
	}

}
