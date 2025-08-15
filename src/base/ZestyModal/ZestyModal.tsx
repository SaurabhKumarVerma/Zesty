import { StyleProp, StyleSheet, View } from 'react-native';
import React, { forwardRef, ReactNode, Ref, useMemo } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlashList,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalRef } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModalProvider/types';
import { SharedValue } from 'react-native-reanimated';
import { BottomSheetScrollViewProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import { BottomSheetFlashListProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { app_color } from '@themes/color';
import { EBOTTOMSHEETTYPE } from '@app_types/type';

interface IZestyBottomSheetScrollViewProps extends BottomSheetScrollViewProps {
  bottomSheetScrollViewStyle?: StyleProp<View>;
  children: ReactNode | ReactNode[];
  isScrollEnable?: boolean;
}

interface IZestyBottomSheetFlashListProps<T> extends BottomSheetFlashListProps<T> {}

interface IZestyModalBase {
  sheetRef?: Ref<BottomSheetMethods | null>;
  userSnapPoints?: (string | number)[] | SharedValue<(string | number)[]>;
  onClose?: () => void;
}

type IZestyModalProps<ItemType = any> =
  | ({
      type: EBOTTOMSHEETTYPE.BOTTOM_SHEET_SCROLL_VIEW;
    } & IZestyModalBase &
      IZestyBottomSheetScrollViewProps)
  | ({
      type: EBOTTOMSHEETTYPE.BOTTOM_SHEET_FLASH_LIST;
    } & IZestyModalBase &
      IZestyBottomSheetFlashListProps<ItemType>);

const ZestyModal = forwardRef(
  <ItemType,>(props: IZestyModalProps<ItemType>, _ref: Ref<BottomSheetModalRef>) => {
    const snapPoints = useMemo(() => ['6%', '40%'], []);
    const { sheetRef, userSnapPoints, onClose, type, ...rest } = props;

    return (
      <BottomSheet
        handleIndicatorStyle={styles.indicatorColor}
        ref={sheetRef}
        onClose={onClose}
        snapPoints={userSnapPoints || snapPoints}
        index={1}
        enableDynamicSizing={false}
        enablePanDownToClose
        enableOverDrag
        backgroundStyle={{ backgroundColor: app_color.bone_white }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.6} />
        )}
      >
        {type === EBOTTOMSHEETTYPE.BOTTOM_SHEET_SCROLL_VIEW ? (
          <BottomSheetScrollView
            scrollEnabled={(rest as IZestyBottomSheetScrollViewProps).isScrollEnable}
            contentContainerStyle={{ bottom: 0 }}
            {...(rest as IZestyBottomSheetScrollViewProps)}
          >
            {(rest as IZestyBottomSheetScrollViewProps).children}
          </BottomSheetScrollView>
        ) : (
          <BottomSheetFlashList {...(rest as IZestyBottomSheetFlashListProps<ItemType>)} />
        )}
      </BottomSheet>
    );
  },
);

export default ZestyModal;

const styles = StyleSheet.create({
  indicatorColor: { backgroundColor: app_color.soft_gray, width: '14%', height: 6 },
});
