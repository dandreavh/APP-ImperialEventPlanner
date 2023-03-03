import { Component } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface webItemsNode {
  name: string;
  children?: webItemsNode[];
}

const TREE_DATA: webItemsNode[] = [
  {
    name: 'Mapa del sitio',
    children: [{name: 'Inicio'}, {name: 'Eventos'}, {name: 'Inscripción'}, {name: 'Registro'}, {name: 'Login/out'}],
  },
  {
    name: 'Políticas',
    children: [{name: 'Términos y condiciones'}, {name: 'Política de privacidad'}, {name: 'Protección de datos'}],
  },
];
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  treeControl = new NestedTreeControl<webItemsNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<webItemsNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: webItemsNode) => !!node.children && node.children.length > 0;
}
