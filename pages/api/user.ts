// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client, e } from "../../client";
import { $infer } from "../../dbschema/edgeql-js";

const getUsersQuery = e.select(e.User, () => ({
  id: true,
  name: true,
  avatar: true,
}));

const addUserQuery: (args: { name: string; avatar: string }) => any = ({
  name,
  avatar,
}) =>
  e.insert(e.User, {
    name,
    avatar,
  });

const removeUserQuery = (id: string) => {
  // return `delete User filter .id = ${id};`;
  // return e.delete(e.User, {
  //   filter: {
  //     user.id == id;
  //   }
  // });
  return e.delete(e.User, (user) => ({
    filter: e.op(user.id, `=`, e.uuid(id)),
  }));
};

export type GetUsers = $infer<typeof getUsersQuery>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    (GetUsers & { id?: string }) | string | { error: { message: string } }
  >
) {
  if (req.method === "POST") {
    const result = await addUserQuery({
      name: req.body.name,
      avatar: req.body.avatar,
    }).run(client);
    res.status(200).json(result);
    return;
  }
  if (req.method === "DELETE") {
    const result = await removeUserQuery(req.query.id as string).run(client);
    res.status(204).send("ok");
    return;
  }
  try {
    const users = await getUsersQuery.run(client);
    res.status(200).json(users);
  } catch (e) {
    // @ts-ignore
    res.status(500).json({ error: e?.message });
    return;
  }
}
