// Конфигурация для разных сред
const config = {
  // Для GitHub Pages
  production: {
    basePath: "/programming_notes",
  },
  // Для локальной разработки
  development: {
    basePath: "",
  },
};

// Определяем текущую среду
const environment =
  window.location.hostname === "almasf.github.io"
    ? "production"
    : "development";
const BASE_PATH = config[environment].basePath;

// Функция для создания ссылок
function createLink(path) {
  return BASE_PATH + path;
}

// Экспортируем для использования
window.APP_CONFIG = {
  basePath: BASE_PATH,
  createLink: createLink,
};
