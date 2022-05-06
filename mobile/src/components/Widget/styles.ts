import { theme } from './../../theme/index';
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 16,
    bottom: 16 + getBottomSpace(),
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: 16 + getBottomSpace(),
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  },
});
