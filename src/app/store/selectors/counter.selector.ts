import { createSelector } from '@ngrx/store';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  count: FeatureState;
}

export const selectFeature = (state: AppState) => {
  return state.count;
};

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.counter
);
