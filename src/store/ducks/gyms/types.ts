export enum GymsTypes {
  LOAD_REQUEST = '@gyms/LOAD_USER',
  LOAD_SUCCESS = '@gyms/LOAD_SUCCESS',
  LOAD_FAILURE = '@gyms/LOAD_FAILURE',
}

export interface Gym {
  id: number;
  type: string;
  attributes: {
    name: string;
    full_address: string;
    distance: string;
    main_image_url: string;
    accessible_by_user: boolean;
    is_favorite: boolean;
  };
}

export interface GymsState {
  readonly data: Gym[];
  readonly loading: boolean;
  readonly error: boolean;
}
