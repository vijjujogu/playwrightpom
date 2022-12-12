import test, {Page} from "@playwright/test"
import LoginPage from "../pages/Loginpage"

const username="standard_user"
const password="secret_sauce"
test("Login page",async({page,baseURL}) => {
    const login=new LoginPage(page)
    await page.goto("https://www.saucedemo.com/")
    await login.login(username,password)
})