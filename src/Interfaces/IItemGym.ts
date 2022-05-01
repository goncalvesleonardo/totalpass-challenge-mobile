export interface IItemGym {
  id: string;
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
