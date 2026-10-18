import {test} from "@playwright/test"
import { LoginPage } from "../Pages/LoginPage";
import { WelcomePage } from "../Pages/WelcomePage";
import { Homepage } from "../Pages/HomePage";
import { MyLeadsPage } from "../Pages/MyLeadsPage";
import { FindLeadsPage } from "../Pages/FindLeadsPage";

import loginData from "../../Data/loginData.json"

test("TC01 Create Lead", async({page})=>{

    let loginPageObj = new LoginPage(page);
    let welcomePageObj = new WelcomePage(page);
    let HomePageObj = new Homepage(page);
    let MyleadsObj = new MyLeadsPage(page);
    let FindLeadObj = new FindLeadsPage(page);

    //await page.goto(loginData.url);
    await page.goto("/");

    await loginPageObj.login(loginData.username, loginData.password);

    await welcomePageObj.Welcome();

    await HomePageObj.Home();

    await MyleadsObj.myleads("CBTS","Santosh","R")

    await FindLeadObj.findLeads();

    //await page.waitForTimeout(5000);

})