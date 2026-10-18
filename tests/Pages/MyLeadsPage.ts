import { Locator, Page } from "@playwright/test";

export class MyLeadsPage{
    page:Page;
    companyNameField:Locator;
    firstnameField:Locator;
    lastnameField:Locator;
    createLeadButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.companyNameField=this.page.locator('#createLeadForm_companyName');
        this.firstnameField=this.page.locator("//input[@id='createLeadForm_firstName']");
        this.lastnameField=this.page.locator("//input[@id='createLeadForm_lastName']");
        this.createLeadButton=this.page.locator("//input[@value='Create Lead']");

    }

    async myleads(companyName:string,firstName:string,lastName:string){
        await this.companyNameField.fill(companyName);
        await this.firstnameField.fill(firstName);
        await this.lastnameField.fill(lastName);
        await this.createLeadButton.click();
    }

}