import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodysection',
  templateUrl: './bodysection.component.html',
  styleUrls: ['./bodysection.component.scss']
})

export class BodysectionComponent implements OnInit {
  
  public Img = [{'id':'1',
                "src":"https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "lab":"Happy Eid! The day is all about love and peace. I wish you all every bit of happiness, good health and peace of mind"},
                {'id':'2',
                src:"https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "lab":"Music produces a kind of pleasure, which human nature cannot do without."},
                {'id':'3',src:"https://images.pexels.com/photos/213207/pexels-photo-213207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "lab":"I have found that often forgiveness is easier to obtain than permission."},
                {'id':'4',
                src:"https://images.pexels.com/photos/1642070/pexels-photo-1642070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "lab":"Let your heart be your compass."},
                {'id':'5',
                src:"https://images.pexels.com/photos/1181208/pexels-photo-1181208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "lab":"When we had no computers, we had no programming problems either."},
                {'id':'6',
                src:"https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "lab":"He who stays with people for forty days has become one of their number"},
                {'id':'7',
                src:"https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "lab":"Let food be thy medicine and medicine be thy food."},
                {'id':'8',
                src:"https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "lab":"Be motivated by what you can do, not defeated by what you can't."}]

              
  constructor() {}

  ngOnInit(){}
  
}

