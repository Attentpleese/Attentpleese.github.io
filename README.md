# Sports Content Creator Portfolio

## GitHub Pages

Этот каталог готов для отдельного публичного репозитория GitHub. Для короткого адреса `https://USERNAME.github.io/` создай репозиторий с точным именем `USERNAME.github.io`, где `USERNAME` — твой логин GitHub. В Settings → Pages выбери **GitHub Actions** в качестве источника публикации. Каждый push в `main` соберёт Vite и опубликует `dist`.

Обычное имя репозитория тоже работает: адрес будет `https://USERNAME.github.io/REPOSITORY/`. Сборка автоматически настроит базовый путь. Все материалы и изображения должны находиться в `public/`.

Простой React + Vite сайт-портфолио для sports content creator / video editor / motion designer.

## Как запустить сайт

```bash
npm install
npm run dev
```

Открой ссылку, которую покажет терминал. Обычно это `http://127.0.0.1:5173`.

## Как собрать сайт

```bash
npm run build
```

Если команда прошла без ошибок, сайт готов для Netlify или Vercel.

## Где менять тексты

Все данные сайта меняются в одном файле:

```text
src/data/portfolioData.js
```

Английская версия находится в `languages.en`, русская версия - в `languages.ru`.

## Где менять цвета

В файле `src/data/portfolioData.js` найди блок `theme`.

Основные поля:

- `background` - фон сайта
- `surface` - фон крупных секций
- `cardBackground` - фон карточек
- `text` - основной текст
- `mutedText` - второстепенный текст
- `accent` - акцентный цвет
- `border` - цвет обводки

## Как поменять язык по умолчанию

В `src/data/portfolioData.js` измени:

```js
defaultLanguage: "en",
```

Можно поставить `"ru"`.

## Как добавить новый кейс

В `src/data/portfolioData.js` найди массив `cases` внутри `languages.en` и `languages.ru`.

Скопируй один объект кейса, вставь его в конец массива и поменяй текст. Лучше добавлять кейс сразу в двух языках, чтобы переключатель EN / RU работал корректно.

## Куда класть видео

Папки уже созданы:

```text
public/media/reels/
public/media/led/
public/media/countdown/
public/media/cta/
public/media/emojis/
```

Пример пути для видео в кейсе:

```js
media: {
  preview: "/media/reels/filename.mp4"
}
```

## Куда класть скриншоты статистики

```text
public/media/stats/
```

Пример:

```js
media: {
  statsImage: "/media/stats/example.jpg"
}
```

Если `statsImage` пустой, блок со скриншотом в модальном окне не показывается.

## Как заменить preview у кейса

В нужном кейсе поменяй:

```js
media: {
  preview: "/media/reels/filename.mp4",
  thumbnail: "/media/reels/filename.jpg"
}
```

Если `preview` пустой, сайт покажет красивый placeholder. Если есть `thumbnail`, он будет использоваться как постер.

## Как добавить видео с другой платформы

В нужном кейсе (и в обеих языковых версиях) добавь ссылку в `media.embedUrl`:

```js
media: makeMedia({
  embedUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  thumbnail: "/media/reels/filename.jpg"
})
```

Поддерживаются обычные ссылки YouTube, Vimeo, Instagram Reels/постов, TikTok, Facebook Videos и Loom. Для других платформ вставь **HTTPS-ссылку именно на iframe-плеер** (поле `src` из кода Embed), например Dailymotion или Wistia. Обычная ссылка на страницу произвольного сайта не всегда может быть встроена: это решают настройки самой платформы и автора видео.

Плеер загружается только после открытия кейса; в карточке показывается обложка или лёгкая заглушка. Для showreel в `hero.media` плеер загрузится после нажатия на кнопку воспроизведения. Ссылка `embedUrl` имеет приоритет над локальным `preview`. Для оригинального поста отдельно укажи `originalUrl` и `showOriginalUrl: true`.

## Как скрыть ссылку на оригинальный пост

В кейсе поставь:

```js
showOriginalUrl: false
```

Тогда кнопка оригинального поста не появится, а в модальном окне будет текст `Original post available on request`.

## Где менять контакты

В `src/data/portfolioData.js` найди блок `contact`.

Там можно поменять email, LinkedIn, Instagram, Telegram и Behance.
