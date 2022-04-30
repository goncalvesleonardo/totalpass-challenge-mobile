import {action} from 'typesafe-actions';
import {GymsTypes, Gym} from './types';

export const loadRequest = () => action(GymsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Gym[]) =>
  action(GymsTypes.LOAD_SUCCESS, {data});

export const loadFailure = () => action(GymsTypes.LOAD_FAILURE);
