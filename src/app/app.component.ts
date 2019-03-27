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
    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));

    const graph = new joint.dia.Graph();

    const paper = new joint.dia.Paper({
      el: $('#paper'),
      model: graph,
      width: 1000,
      height: 100,
      gridSize: 1
    });

    const rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: 'blue'
      },
      label: {
        text: 'Hello',
        fill: 'white'
      }
    });
    rect.addTo(graph);

    const rect2 = rect.clone();
    // @ts-ignore
    rect2.translate(600, 0);
    rect2.attr('label/text', 'World!');
    rect2.addTo(graph);

    const link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);

  }

}
