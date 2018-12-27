import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MenuNode} from '../entities/menuNode.entity';
import {MENU_DATA} from '../data/menuData';

@Injectable({
  providedIn: 'root'
})

export class DynamicMenuService {
  dataChange = new BehaviorSubject<MenuNode[]>([]);

  get data(): MenuNode[] {
    return this.dataChange.value;
  }

  constructor() {
    this.initialize();
  }

  initialize() {
    const dataObject = JSON.parse(MENU_DATA);

    const data = this.buildMenuTree(dataObject, 0);

    this.dataChange.next(data);
  }

  buildMenuTree(obj: {[key: string]: any}, level: number): MenuNode[] {
    return Object.keys(obj).reduce<MenuNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new MenuNode();
      node.menuName = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildMenuTree(value, level + 1);
        } else {
          node.routerLink = value;
        }
      }
      return accumulator.concat(node);
    }, []);
  }
}
