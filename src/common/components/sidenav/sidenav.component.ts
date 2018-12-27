import {Component} from '@angular/core';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {FlatTreeControl} from '@angular/cdk/tree';
import {FlatMenuNode, MenuNode} from '../../entities/menuNode.entity';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  providers: [DynamicMenuService]
})

export class SidenavComponent {
  treeControl: FlatTreeControl<FlatMenuNode>;
  treeFlattener: MatTreeFlattener<MenuNode, FlatMenuNode>;
  dataSource: MatTreeFlatDataSource<MenuNode, FlatMenuNode>;

  constructor(menuData: DynamicMenuService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel, this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<FlatMenuNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    menuData.dataChange.subscribe(data => this.dataSource.data = data);
  }

  transformer = (node: MenuNode, level: number) => {
    return new FlatMenuNode(!!node.children, node.menuName, level, node.routerLink);
  }

  private _getLevel = (node: FlatMenuNode) => node.level;

  private _isExpandable = (node: FlatMenuNode) => node.expandable;

  private _getChildren = (node: MenuNode): Observable<MenuNode[]> => of(node.children);

  hasChild = (_: number, _nodeData: FlatMenuNode) => _nodeData.expandable;
}
