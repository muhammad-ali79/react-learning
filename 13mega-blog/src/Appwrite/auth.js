import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );

    this.account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      //   if account is aviable then login the user
      userAccount ? this.login(email, password) : userAccount;
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
  }

  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}
const authService = new AuthService();
export default authService;
