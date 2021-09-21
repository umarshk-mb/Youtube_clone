import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-videocontaier',
  templateUrl: './videocontaier.component.html',
  styleUrls: ['./videocontaier.component.scss']
})



export class VideocontaierComponent implements OnInit {

  @Input() public image:any;

 
  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap
    .subscribe(params => {
      +params.get('id');
    }
  );
  }


}   


