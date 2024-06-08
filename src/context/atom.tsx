import { atom } from "jotai";

const menuAtom = atom(false);
const categoryAtom = atom("all");

export { menuAtom, categoryAtom };
