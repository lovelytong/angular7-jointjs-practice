import { Component, OnInit } from '@angular/core';
declare var $: JQueryStatic;
import * as _ from 'lodash';
import * as backbone from 'backbone';
import * as joint from 'jointjs';


// declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-app';
  // test() {
  //   $('#test').css('background-color', 'yellow');
  // }

  ngOnInit() {
    // this.test();
    const graph = new joint.dia.Graph();
    const paper = new joint.dia.Paper({
      el: $('#paper'),
      width: 600,
      height: 200,
      model: graph,
      gridSize: 1
    });

    const rect = new joint.shapes.basic.Rect({
      position: { x: 100, y: 30 },
      size: { width: 100, height: 30 },
      attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
    });

    const rect2 = rect.clone() as joint.shapes.basic.Rect;
    rect2.translate(300);

    const link = new joint.dia.Link({
      source: { id: rect.id },
      target: { id: rect2.id }
    });

    graph.addCells([rect, rect2, link]);
  }

}
