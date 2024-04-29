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
    content: '2020.10 ~ 재직중',
  },
  {
    title: '직책',
    content: 'Frontend Developer',
  },
];

type Props = React.PropsWithChildren<{}>;

const MarketboroDialog = (props: Props) => {
  const { children } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>(주) 마켓보로</DialogTitle>
          <DialogDescription>
            <Table className="my-[12px]">
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
              (주) 마켓보로는 B2B 식자재 유통 시장에서 불필요한 중간 과정을
              최소화하여 비용을 절감하고 효율을 증대시키는 엔터프라이즈 푸드테크
              플랫폼을 제공합니다. 또한 사업자 대상의 오픈 마켓인 식봄을
              운영하고 있습니다.
              <br /> 제 역할은 프론트엔드 개발자로서, 주로 React.js와 Nuxt.js를
              사용하여 웹과 모바일 어플리케이션의 사용자 인터페이스를 개발하는
              것입니다. 이를 통해 사용자 경험을 향상시키고, 다양한
              디바이스에서의 접근성을 보장합니다. 최근에는 PHP로 개발되어진
              식봄을 Next.js로 전환하는 업무를 하고 있습니다.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full" type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MarketboroDialog;
