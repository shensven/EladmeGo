import {useAtom} from 'jotai';
import {httpLogAtom} from '@/utils/status/atom';

const useHttpLog = () => {
  const [httpLogs, setHttpLogs] = useAtom(httpLogAtom);

  const clear = () => {
    setHttpLogs([]);
  };

  return {httpLogs, setHttpLogs, clear};
};

export default useHttpLog;
