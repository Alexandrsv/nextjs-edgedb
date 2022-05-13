import { createClient } from "edgedb";
import e from "./dbschema/edgeql-js";
import { ConnectOptions } from "edgedb";

let options: ConnectOptions = {
  tlsSecurity: "insecure",
};

if (process.env.DOCKER === "true") {
  options.dsn = process.env.EDGEDB_DSN;
}

export const client = createClient(options);

export { e };
