"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT! || 'https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!  || '671d23b4003a82aa2efa');
  
  const session = cookies().get("appwrite-session");

  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT! || 'https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT! || '671d23b4003a82aa2efa')
    .setKey(process.env.NEXT_APPWRITE_KEY! || 'standard_df9f0fd8d3738676e718b8480fe597e18b95cb8e16b0cac92d5c24daf315e6ec03b54d6b8f19a17e33c5d09536568aa2efc4080dcc0fcc0b3457100a2e08fef40ff4f39db00c7308f5fcd709288565ebb321b29dbd74cfd1033a6044ba18cd65462efb453fc846fb1596cdcb81e0b47787cf98cc93c85a3d46ed103a24912fee');
  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get user() {
      return new Users(client);
    }
  };
}