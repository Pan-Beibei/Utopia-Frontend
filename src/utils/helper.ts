import { User } from "../types";

export function getUserName(author: User | null) {
  if (author) {
    return author.username;
  } else {
    return "Unknown Author";
  }
}
