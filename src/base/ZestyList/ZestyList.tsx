import React from 'react';
import { FlashList, FlashListProps } from '@shopify/flash-list';

const ZestyList = <T,>(props: FlashListProps<T>) => {
  return <FlashList {...props} />;
};

export default ZestyList;
