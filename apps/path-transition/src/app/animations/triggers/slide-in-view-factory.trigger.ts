import {
  trigger,
  AnimationTriggerMetadata
} from '@angular/animations';
import {
  SlideInViewTransitionFactory,
  SlideBackTransitionFactory
} from '../transitions';

/**
 * @input ['HomePage', 'SearchPage']
 * @output '* <=> HomePage, * <=> SearchPage'
 */
const joinViews = (views: string[]): string => {
  const prefix = '* <=> ';
  return prefix + views.join(', * <=> ');
};

export const SlideInViewsAnimationFactory = (config: {
  views: string[]
}): AnimationTriggerMetadata => {
  return trigger('routeAnimations', [
    SlideBackTransitionFactory(),
    SlideInViewTransitionFactory(joinViews(config.views)),
  ]);
};
