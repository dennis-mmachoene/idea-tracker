import { Client, Databases, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("679f3c4f003d87a939bc");

export const account = new Account(client);
export const databases = new Databases(client);
