import {atom} from 'jotai';
import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import type {MD3Theme} from 'react-native-paper';
import {navigationLightTheme, paperLightTheme} from '@/utils/appearance';
import type {SystemBarStyle} from 'react-native-bars';
import type {NavigationTheme} from '@/utils/appearance';
import type {HttpLog} from '@/utils/httpClient';
import type {PassQr} from '@/utils/passQr';
import type {BottomSheetInvoker} from '@/component/BottomSheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage: any = createJSONStorage(() => AsyncStorage);

const themeSchemeAtom = atomWithStorage<'light' | 'dark' | 'system'>('themeScheme', 'system', storage);
const statusBarStyleAtom = atom<SystemBarStyle>('dark-content');
const paperThemeAtom = atom<MD3Theme>(paperLightTheme);
const navigationThemeAtom = atom<NavigationTheme>(navigationLightTheme);
const bottomSheetInvokerAtom = atom<BottomSheetInvoker | undefined>(undefined);

const httpLogAtom = atomWithStorage<HttpLog[]>('httpLog', [], storage);

const accessTokenAtom = atomWithStorage<string>('accessToken', '', storage);
const is401StatusAtom = atom(false);
const isStaffAtom = atom({isStaff: -1, custom: -1, isBind: -1});
const passQrAtom = atom<PassQr | undefined>(undefined);
const countdownAtom = atom<number>(0);
const lastFloorUsedAtom = atomWithStorage<number | undefined>('lastFloorUsed', undefined, storage);

const debugAtom = atom({
  isAutoRefreshQrCode: true,
  enableEnterpriseNameMocking: false,
  enableQrCodeMocking: false,
  enableFloorMocking: false,
});

export {
  themeSchemeAtom,
  statusBarStyleAtom,
  paperThemeAtom,
  navigationThemeAtom,
  bottomSheetInvokerAtom,
  httpLogAtom,
  accessTokenAtom,
  is401StatusAtom,
  isStaffAtom,
  passQrAtom,
  countdownAtom,
  lastFloorUsedAtom,
  debugAtom,
};
