import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "JSONPlaceholder | A RemixJS showcase" }];
};

export default function Index() {
  return <></>;
}
