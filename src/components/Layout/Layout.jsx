import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.layoutWrap}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
