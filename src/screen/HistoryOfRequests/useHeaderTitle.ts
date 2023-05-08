import {useHttpLog} from '@/utils/httpLog';

function useHeaderTitle() {
  const {httpLog} = useHttpLog();
  return `${httpLog.length.toString()} 个项目`;
}

export default useHeaderTitle;
