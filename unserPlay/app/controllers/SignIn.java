package controllers;

import play.mvc.*;
import views.html.*;
import views.html._include.*;
public class SignIn  extends Controller {
    public static Result index() {
        return ok(main.render(contentSignIn.render(), header.render(), navigation.render("signin"), footer.render(), sidebar.render("signin")));
    }
    
    public static Result signInValidation(){
    	
    	return ok(main.render(contentApp.render(), header.render(), navigation.render("app_map"), footer.render(), sidebar.render("app_map")));
    }
    
    public static Result dbIn(){
    	
    	return ok();
    }
    
    public static Result dbOut(){
    	
    	return dbOut();
    }
}
