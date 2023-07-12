import type { LinksFunction } from '@remix-run/node';
import styles from '../styles/example.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function Index() {
  return (
    <div>
      <h1 className={'exampleH1'}>Welcome to Remix</h1>
    </div>
  );
}
