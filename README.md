# Welcome to Remix!

Для работы проекта необходима версия node >= 18.15.0, npm >= 9.5.0

## Usage

Для установки напишите:

```sh
npx create-remix@latest --template YourVieVV/remixStarter
```

## Development

Для запуска проекта необходимо написать в терминале:

```sh
npm run dev
```

Проект стартует тут: http://localhost:3000/

## Warning

```sh
npm run sass
```

Уже вшита в старт dev. Необходима для того, чтобы конвертировать файлы стиля .scss в .css Потому что remix
не может обрабатывать .scss из-за его технологии fullStack. Поэтому необходимо
указывать импорты в файлах не так:

```sh
import styles from '../styles/example.sass';
```

а так:

```sh
import styles from '../styles/example.css';
```

## ESLint and Prettier

Для проверки синтаксиса кода нужно выполнить команду:

```sh
npm run lint
```

Для проверки стиля кода нужно выполнить команду:

```sh
npm run prettier
```

Для исправления стиля кода нужно выполнить команду:

```sh
npm run prettier:fix
```

## Husky

Перед коммитом задана проверка:

```sh
npm run lint
npm run prettier
```
