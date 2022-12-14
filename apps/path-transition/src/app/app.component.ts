import {Component} from '@angular/core';
import {ChildrenOutletContexts} from '@angular/router';
import {Location} from '@angular/common';
import {
  SlideInViewsAnimationFactory
} from './animations/triggers';
import {AnimationsFacade} from './animations/services';
import {ANIMATED_VIEW} from './animations/enums';

const viewsToSlideIn = Object.values(ANIMATED_VIEW);
const slideInViewAnim = SlideInViewsAnimationFactory({views: viewsToSlideIn});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInViewAnim
  ]
})
export class AppComponent {

  constructor(
    public animationsFacade: AnimationsFacade,
    private contexts: ChildrenOutletContexts,
    private location: Location
  ) {
  }

  public back(): void {
    this.location.back();
  }

  public getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
