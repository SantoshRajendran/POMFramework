import {Page,Locator} from "@playwright/test"


export class LoginPage{

    page:Page;
    username:Locator;
    password:Locator;
    loginbutton:Locator;

    constructor(page:Page){
        this.page=page;
        this.username=this.page.getByRole("textbox", {name:"Username"});
        this.password=this.page.getByRole("textbox", {name:"Password"});
        this.loginbutton=this.page.getByRole("button",{name:"Login"});

    }

    async login(username:string, password:string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();

    }

}