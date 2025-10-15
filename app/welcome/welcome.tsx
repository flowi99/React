import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import {ToDo} from "~/todo/todo";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <ToDo />
    </main>
  );
}


