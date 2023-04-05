import {atom} from 'jotai';
import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import type {MD3Theme} from 'react-native-paper';
import {navigationLightTheme, paperLightTheme} from '@/utils/appearance';
import type {SystemBarStyle} from 'react-native-bars';
import type {NavigationTheme} from '@/utils/appearance';
import type {PassQr} from '../passQr';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage: any = createJSONStorage(() => AsyncStorage);

const themeSchemeAtom = atomWithStorage<'light' | 'dark' | 'system'>('themeScheme', 'system', storage);
const statusBarStyleAtom = atom<SystemBarStyle>('dark-content');
const paperThemeAtom = atom<MD3Theme>(paperLightTheme);
const navigationThemeAtom = atom<NavigationTheme>(navigationLightTheme);

const accessTokenAtom = atomWithStorage<string>('accessToken', '', storage);
const is401StatusAtom = atom(false);
const isStaffAtom = atom({isStaff: -1, custom: -1, isBind: -1});
const passQrAtom = atom<PassQr | undefined>(undefined);
const countdownAtom = atom<number>(0);
const lastFloorUsedAtom = atomWithStorage<number | undefined>('lastFloorUsed', undefined, storage);

export {
  themeSchemeAtom,
  statusBarStyleAtom,
  paperThemeAtom,
  navigationThemeAtom,
  accessTokenAtom,
  is401StatusAtom,
  isStaffAtom,
  passQrAtom,
  countdownAtom,
  lastFloorUsedAtom,
};
