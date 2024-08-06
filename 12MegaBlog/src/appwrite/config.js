import { conf } from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // creating a post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId },
      );
    } catch (e) {
      return e;
    }
  }

  // updating a post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        { title, content, featuredImage, status },
      );
    } catch (e) {
      throw e;
    }
  }

  // deleting a post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
      );
      return true;
    } catch (e) {
      throw e;
    }
  }

  // getting one post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
      );
    } catch (e) {
      return e;
    }
  }

  // getting all post
  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries,
      );
    } catch (e) {
      throw e;
    }
  }

  // file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file,
      );
    } catch (e) {
      return e;
    }
  }

  // delete file service
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (e) {
      return e;
    }
  }

  // get file preview
  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
    } catch (e) {
      return e;
    }
  }
}

const service = new Service();

export default service;
