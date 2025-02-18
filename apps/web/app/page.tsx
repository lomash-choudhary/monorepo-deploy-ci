import { client } from "@repo/db/client"

export default async function Home() {
  const allUsers = await client.user.findMany(); 
  return (
    <div>
      {JSON.stringify(allUsers)}
    </div>
  );
}
