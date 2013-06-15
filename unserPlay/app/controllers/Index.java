package controllers;

import play.*;
import play.mvc.*;
import views.html.*;
import views.html._include.*;
import views.html._include.header;

public class Index extends Controller{
    public static Result index() {
        return ok(main.render(contentHome.render(), header.render(), navigation.render("index"), footer.render(),sidebar.render("index")));
    }

}
