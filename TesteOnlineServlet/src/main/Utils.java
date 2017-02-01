package main;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletRequest;

import org.json.JSONException;
import org.json.JSONObject;

public final class Utils {

	public static JSONObject convertRequestToJSON(ServletRequest req) throws JSONException, IOException {
		StringBuilder sb = new StringBuilder();
	    BufferedReader br = req.getReader();
	    String str;
	    while( (str = br.readLine()) != null ){
	        sb.append(str);
	    }    
	    JSONObject jObj = new JSONObject(sb.toString());
	    
		return jObj;
	}
}
