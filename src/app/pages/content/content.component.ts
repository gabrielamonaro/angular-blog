import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {data} from '../../data/data';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string="https://ichef.bbci.co.uk/news/976/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg"
  @Input()
  contentTitle:string="Article Name"
  @Input()
  contentDescription:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque faucibus vel ipsum a congue. Duis consectetur finibus leo, eu laoreet ipsum suscipit bibendum. Etiam nec mi porttitor, faucibus dui vel, blandit nibh. Nam et suscipit justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eget odio imperdiet, placerat turpis eget, gravida sapien. Nulla consectetur sem nisi, in ultricies mauris tempus vel. Curabitur eros metus, malesuada at congue in, vulputate at lectus."
  id:string | null ="0"
  constructor(private route:ActivatedRoute) 
  {

  } 

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id'))
      
      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = data.filter( artigo => artigo.id == id)[0]
    

    this.contentDescription = result.description
    this.contentTitle = result.title
    this.photoCover = result.photo

  }

}
