import {useAtom} from 'jotai';
import {httpLogAtom} from '@/utils/status/atom';

const useHttpLog = () => {
  const [httpLog, setHttpLog] = useAtom(httpLogAtom);

  const clear = () => {
    setHttpLog([]);
  };

  return {httpLog, setHttpLog, clear};
};

export default useHttpLog;
