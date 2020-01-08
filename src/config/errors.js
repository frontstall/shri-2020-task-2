export default {
  WARNING: {
    TEXT_SIZES_SHOULD_BE_EQUAL: {
      code: 'WARNING.TEXT_SIZES_SHOULD_BE_EQUAL',
      error: 'Тексты в блоке warning должны быть одного размера',
    },
    INVALID_BUTTON_SIZE: {
      code: 'WARNING.INVALID_BUTTON_SIZE',
      error:
        'Размер кнопки блока warning должен быть на 1 шаг больше размера текста',
    },
    INVALID_BUTTON_POSITION: {
      code: 'WARNING.INVALID_BUTTON_POSITION',
      error: 'Кнопка должна размещаться после блока placeholder',
    },
    INVALID_PLACEHOLDER_SIZE: {
      code: 'WARNING.INVALID_PLACEHOLDER_SIZE',
      error: 'Размер блока placeholder может быть только s, m или l',
    },
  },
  TEXT: {
    SEVERAL_H1: {
      code: 'TEXT.SEVERAL_H1',
      error: 'Не более одного заголовка h1 на странице',
    },
    INVALID_H2_POSITION: {
      code: 'TEXT.INVALID_H2_POSITION',
      error: 'Заголовок уровня h2 не может находиться перед заголовком h1',
    },
    INVALID_H3_POSITION: {
      code: 'TEXT.INVALID_H3_POSITION',
      error: 'Заголовок уровня h3 не может находиться перед заголовком h2',
    },
  },
  GRID: {
    TOO_MUCH_MARKETING_BLOCKS: {
      code: 'GRID.TOO_MUCH_MARKETING_BLOCKS',
      error: 'Слишком много рекламы',
    },
  },
};
