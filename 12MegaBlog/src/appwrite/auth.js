import { Client, Account, ID } from "appwrite";
import { conf } from "../conf/conf.js";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.account = new Account(this.client);
  }

  // createAccount method
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        //calling login method -> user can directly log in
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (e) {
      throw e;
    }
  }

  //Login method
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (e) {
      throw e;
    }
  }

  //get current user -> checking if user is log in or not
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (e) {
      throw e;
    }
  }

  //logout method
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (e) {
      throw e;
    }
  }
}

const authService = new AuthService();

export default authService;
