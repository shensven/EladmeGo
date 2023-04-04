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
const passQrAtom = atom<PassQr | undefined>(undefined);

export {themeSchemeAtom, statusBarStyleAtom, paperThemeAtom, navigationThemeAtom, accessTokenAtom, passQrAtom};
