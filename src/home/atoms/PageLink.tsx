import type { FC, ReactNode } from 'react';
import Styles from '/src/home/atoms/styles/pageLink.module.scss';

interface Props {
  link: string;
  children: ReactNode;
}

export const PageLink: FC<Props> = (props) => {
  const { link, children } = props;
  return (
    <li className={Styles.container}>
      <a href={link} className={Styles.link}>
        {children}
      </a>
    </li>
  );
};
