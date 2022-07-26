import type { FC } from 'react';
import Styles from '/src/home/organisms/styles/pageLinkList.module.scss';
import { PageLink } from '@/home/atoms/PageLink';

export const PageLinkList: FC = () => (
  <ul className={Styles.container}>
    <PageLink link="/exercise/1">EXERCISE 1</PageLink>
    <PageLink link="/exercise/2">EXERCISE 2</PageLink>
    <PageLink link="/exercise/3">EXERCISE 3</PageLink>
    <PageLink link="/exercise/4">EXERCISE 4</PageLink>
    <PageLink link="/exercise/5">EXERCISE 5</PageLink>
    <PageLink link="/extra">EXTRA</PageLink>
  </ul>
);
