const numbers: number[] = [1, 2, 3, 4, 5];
const str: string[] = ["a", "b", "c"];

interface Menus {
  id: number;
  name: string;
  link: string;
  subject: { id: number; name: string; link: string }[];
}
const menus: Menus[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
    subject: [{ id: 1, name: "Sub Home", link: "/sub-home" }],
  },
  {
    id: 2,
    name: "About",
    link: "/about",
    subject: [{ id: 2, name: "Sub About", link: "/sub-about" }],
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
    subject: [{ id: 3, name: "Sub Contact", link: "/sub-contact" }],
  },
];

export function getMenuNames(menus: Menus[]): string[] {
  return menus.map((menu) => menu.name);
}

console.log(getMenuNames(menus));
