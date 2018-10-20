import account from "./account";
import auth from "./auth";
import post from "./post";
import search from "./search";
import topic from "./topic";
import user from "./user";

export default function*() {
  yield [account(), auth(), post(), search(), topic(), user()];
}
