import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from '../app.interfaces';
import * as fromDiagnoses from './diagnose.reducer';
export interface IDiagnosesState {
  diagnoses: fromDiagnoses.State;
}

export interface IState extends AppState {
  diagnoses: IDiagnosesState;
}

export const reducers = {
  diagnoses: fromDiagnoses.reducer
};

export const getDiagnosesState = createFeatureSelector<IDiagnosesState>('diagnoses');

export const getDiagnosesEntityState = createSelector(
  getDiagnosesState,
  (state) => state.diagnoses
);

export const {
  selectAll: getAllDiagnoses,
  selectEntities: getDiagnoseEntities,
  selectIds: getDiagnoseIds,
  selectTotal: getDiagnosesTotal
} = fromDiagnoses.adapter.getSelectors(getDiagnosesEntityState);


export const getSelectedDiagnoseId = createSelector(
  getDiagnosesEntityState,
  fromDiagnoses.getSelectedDiagnoseId
);

export const getSelectedDiagnose = createSelector(
  getDiagnoseEntities,
  getSelectedDiagnoseId,
  (entities, selectedPowerId) => selectedPowerId && entities[selectedPowerId]
);
export const isDiagnoseLoading = createSelector(
  getDiagnosesEntityState,
  fromDiagnoses.isLoading
);
