package controllers;

import play.mvc.*;
import views.html.*;
import views.html._include.*;
public class SignIn  extends Controller {
    public static Result index() {
        return ok(main.render(contentSignIn.render(), header.render(), navigation.render("signin"), footer.render(), sidebar.render("signin")));
    }
}
