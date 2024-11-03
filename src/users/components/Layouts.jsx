import Header from './Header';
import BottomMenu from './BottomMenu';

export function MainLayout({ children }) {
  return (
    <div className="container-fluid p-0 pb-5">
      <Header />
      {children}
      <BottomMenu />
    </div>
  );
}

export function NoHeaderFooterLayout({ children }) {
  return (
    <div className="container-fluid p-0 pb-5">
      {children}
    </div>
  );
}
