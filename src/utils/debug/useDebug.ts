import {useAtom} from 'jotai';
import {debugAtom} from '../status/atom';

const useDebug = () => {
  const [debug, setDebug] = useAtom(debugAtom);
  const {isAutoRefreshQrCode, enableEnterpriseNameMocking, enableQrCodeMocking, enableFloorMocking} = debug;

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

  const toogleFloorMocking = () => {
    setDebug(prev => ({
      ...prev,
      enableFloorMocking: !prev.enableFloorMocking,
    }));
  };

  return {
    isAutoRefreshQrCode,
    toogleAutoRefreshQrCode,
    enableEnterpriseNameMocking,
    toogleEnterpriseNameMoclking,
    enableQrCodeMocking,
    toogleQrCodeMocking,
    enableFloorMocking,
    toogleFloorMocking,
  };
};

export default useDebug;
