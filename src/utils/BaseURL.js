class ApiEndpoints {
    static BASE_URL = "http://127.0.0.1:8000";
  
    static GETMARKETUSERS = `${this.BASE_URL}/api/createmarketusers`;
    static CREATEMARKETUSERS = `${this.BASE_URL}/api/createmarketusers`;
    static CATEGORIES = `${this.BASE_URL}/api/getcategories`;
    static CREATEPRODUCT = `${this.BASE_URL}/api/storeproduct`;
    static GETPRODUCTS = `${this.BASE_URL}/api/getproducts`;
    static GENDERS = `${this.BASE_URL}/api/getgenders`;
    static MARITAL = `${this.BASE_URL}/api/getmaritalstatus`;
}