import {useAtom} from 'jotai';
import {debugAtom} from '../status/atom';

const useDebug = () => {
  const [debug, setDebug] = useAtom(debugAtom);
  const {isAutoRefreshQrCode, enableEnterpriseNameMocking, enableQrCodeMocking} = debug;

  const toogleAutoRefreshQrCode = () => {
    setDebug(prev => ({
      ...prev,
      isAutoRefreshQrCode: !prev.isAutoRefreshQrCode,
    }));
  };

  const toogleEnterpriseNameMoclking = () => {
    setDebug(prev => ({
      ...prev,
      enableEnterpriseNameMocking: !prev.enableEnterpriseNameMocking,
    }));
  };

  const toogleQrCodeMocking = () => {
    setDebug(prev => ({
      ...prev,
      enableQrCodeMocking: !prev.enableQrCodeMocking,
    }));
  };

  return {
    isAutoRefreshQrCode,
    toogleAutoRefreshQrCode,
    enableEnterpriseNameMocking,
    toogleEnterpriseNameMoclking,
    enableQrCodeMocking,
    toogleQrCodeMocking,
  };
};

export default useDebug;
