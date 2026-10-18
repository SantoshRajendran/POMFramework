import { Page, Locator } from "@playwright/test";


export class FindLeadsPage{
    page:Page;
    findLeadsTab:Locator;
    findLeadsFirstName:Locator;
    findLeadsLastName:Locator;
    findLeadsButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.findLeadsTab=this.page.getByRole("link", {name:"Find Leads"});
        this.findLeadsFirstName=this.page.locator("(//input[@name='firstName'])[3]");
        this.findLeadsLastName=this.page.locator("(//input[@name='lastName'])[3]");
        this.findLeadsButton=this.page.getByRole("button", {name:"Find Leads"});
    }

    async findLeads(){
        await this.findLeadsTab.click();
        await this.findLeadsFirstName.fill("Santosh");
        await this.findLeadsLastName.fill("R");
        await this.findLeadsButton.click();

    }



}