'use client';
import Image from 'next/image';

type Props = {
  icon: string;
  label: string;
};

export const LabeledIcon = (props: Props) => {
  return (
    <figure className="flex items-center flex-col">
      <Image
        className="rounded shadow-white"
        width={50}
        height={50}
        alt={props.label}
        src={props.icon}
      />
      <figcaption className="mt-[10px] text-[1.2em]">{props.label}</figcaption>
    </figure>
  );
};
