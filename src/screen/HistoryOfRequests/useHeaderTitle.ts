import {useHttpLog} from '@/utils/httpLog';

function useHeaderTitle() {
  const {httpLogs} = useHttpLog();
  return `${httpLogs.length.toString()} 个项目`;
}

export default useHeaderTitle;
