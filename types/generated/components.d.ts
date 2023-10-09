import type { Schema, Attribute } from '@strapi/strapi';

export interface RestaurantinfoOpeninghours extends Schema.Component {
  collectionName: 'components_restaurantinfo_openinghours';
  info: {
    displayName: 'openinghours';
    icon: 'handHeart';
  };
  attributes: {
    hour: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'00:00'>;
    days: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'restaurantinfo.openinghours': RestaurantinfoOpeninghours;
    }
  }
}
