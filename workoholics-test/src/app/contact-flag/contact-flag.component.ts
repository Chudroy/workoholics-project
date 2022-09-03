import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-flag',
  templateUrl: './contact-flag.component.html',
  styleUrls: ['./contact-flag.component.scss'],
})
export class ContactFlagComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scroll(el: string) {
    const scrollTo = document.getElementsByTagName(el)[0];
    console.log(scrollTo);

    scrollTo?.scrollIntoView({ behavior: 'smooth' });
  }
}
