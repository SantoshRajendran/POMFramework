import { Locator, Page } from "@playwright/test";

export class Homepage{
    page:Page;
    createLeadTab:Locator;

    constructor(page:Page){
        this.page=page;
        this.createLeadTab=this.page.getByRole("link", {name:"Create Lead"});

    }

    async Home(){
        await this.createLeadTab.click();
    }
    
}