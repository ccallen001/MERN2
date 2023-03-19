import { useRecoilState } from 'recoil';
import { toastMsg } from '@/atoms';

export default function useToastMsg(msg: string) {
  return useRecoilState(toastMsg);
}
