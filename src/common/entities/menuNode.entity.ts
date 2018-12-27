export class MenuNode {
  children: MenuNode[];
  menuName: string;
  routerLink: string;
}

export class FlatMenuNode {
  constructor(
    public expandable: boolean, public menuName: string, public level: number, public routerLink: string
  ) {}
}
