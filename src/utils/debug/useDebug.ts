import {useAtom} from 'jotai';
import {debugAtom} from '../status/atom';

const useDebug = () => {
  const [debug, setDebug] = useAtom(debugAtom);
  const {isAutoRefreshQrCode, enableEnterpriseNameMocking} = debug;

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

  return {isAutoRefreshQrCode, toogleAutoRefreshQrCode, enableEnterpriseNameMocking, toogleEnterpriseNameMoclking};
};

export default useDebug;
