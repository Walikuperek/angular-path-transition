import {Injectable, OnDestroy} from '@angular/core';
import {
  ChildrenOutletContexts,
  Router,
  RoutesRecognized
} from '@angular/router';
import {
  Observable,
  Subject,
  filter,
  pairwise,
  takeUntil
} from 'rxjs';
import {map} from 'rxjs/operators';
import {StateService} from '../../abstracts';
import {AnimationsState} from '../types';

const DEFAULT_STATE: AnimationsState = {
  animationState: '',
  previousUrl: ''
};

@Injectable({
  providedIn: 'root'
})
export class AnimationsFacade extends StateService<AnimationsState> implements OnDestroy {
  private _serviceDestroyed$ = new Subject<void>();

  public animationState$ = this.select(state => state.animationState);

  constructor(
    private contexts: ChildrenOutletContexts,
    private router: Router
  ) {
    super(DEFAULT_STATE);
    this._listenToRouteChanges()
      .pipe(takeUntil(this._serviceDestroyed$))
      .subscribe(({previousUrl, currentUrl}) => {
        if (this.state.previousUrl === currentUrl) {
          this.updateAnimationState('BackPage');
          console.warn('BackPage');
        } else {
          this.updateAnimationState(this._getRouteAnimationData());
        }
        this.updatePreviousUrl(previousUrl);
      });
  }

  public ngOnDestroy(): void {
    this._serviceDestroyed$.next();
    this._serviceDestroyed$.complete();
  }

  public updateAnimationState(animationState: string): void {
    this.setState({animationState});
  }

  public updatePreviousUrl(previousUrl: string): void {
    this.setState({previousUrl});
  }

  private _getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  private _listenToRouteChanges(): Observable<{ previousUrl: string, currentUrl: string }> {
    return this.router.events
      .pipe(
        filter((event: any) => event instanceof RoutesRecognized),
        pairwise(),
        map(([previousEvent, currentEvent]) => ({
          previousUrl: previousEvent.urlAfterRedirects,
          currentUrl: currentEvent.urlAfterRedirects
        }))
      );
  }
}
