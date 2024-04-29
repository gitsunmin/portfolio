import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

const BASIC_INFO = [
  {
    title: '재직기간',
    content: '2019.07 ~ 2020.10',
  },
  {
    title: '직책',
    content: 'Frontend Developer',
  },
];

type Props = React.PropsWithChildren<{}>;

const KorensDialog = (props: Props) => {
  const { children } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>(주) 코렌스</DialogTitle>
          <DialogDescription>
            <Table>
              <TableBody>
                {BASIC_INFO.map((invoice) => (
                  <TableRow key={invoice.title}>
                    <TableCell className="font-medium">
                      {invoice.title}
                    </TableCell>
                    <TableCell className="text-start">
                      {invoice.content}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p>
              (주) 코렌스는 자동차 부품 제조사로, 주로 자동차 엔진 부품을
              생산하는 재조업 업체입니다. 하지만, 소프트웨어에도 관심을 가지고{' '}
              <strong>소프트웨어 사업부</strong>를 개설하여 운영하였습니다. 이{' '}
              부서가 제가 처음으로 프론트엔드 개발자로서 일을 시작한 곳입니다.
              <br />
              새로 시작한 사업이었기 때문에 기존의 개발환경이나 프로세스가 없어
              처음부터 새로 만들어야 했고, 덕분에{' '}
              <strong>프론트엔드 개발(Vue.js)</strong> 역량 뿐만 아니라{' '}
              <strong>백엔드 개발, AWS Amplify</strong> 등 다양한 경험을 쌓을 수
              있었습니다.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default KorensDialog;
