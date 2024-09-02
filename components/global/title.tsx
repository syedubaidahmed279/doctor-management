import { cn } from '@/lib/utils';

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <h1 className={cn('text-[46px] leading-[1.3em] font-medium', className)}>
      {title}
    </h1>
  );
};

export default Title;
