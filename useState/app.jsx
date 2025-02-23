import React, { useState } from 'react';

function Counter() {
  // Инициализация состояния: currentCount = 0, setCurrentCount — функция для обновления
  const [currentCount, setCurrentCount] = useState(0);

  // Функция для увеличения счетчика
  const handleIncrementButtonClick = () => {
    setCurrentCount(prevCount => prevCount + 1); // Используем предыдущее значение
  };

  // Функция для уменьшения счетчика
  const handleDecrementButtonClick = () => {
    setCurrentCount(prevCount => prevCount - 1); // Используем предыдущее значение
  };

  // Функция для сброса счетчика
  const handleResetButtonClick = () => {
    setCurrentCount(0); // Сбрасываем на 0
  };

  return (
    <div>
      <h1>Текущее значение: {currentCount}</h1>
      <button onClick={handleIncrementButtonClick}>Увеличить</button>
      <button onClick={handleDecrementButtonClick}>Уменьшить</button>
      <button onClick={handleResetButtonClick}>Сбросить</button>
    </div>
  );
}

export default Counter;

// объяснение кода:

// Этот код представляет собой компонент Counter в React, реализующий счетчик с тремя функциями: увеличение, уменьшение и сброс значения.

// Хук useState — используется для хранения состояния (currentCount).
// Обновление состояния — выполняется с помощью функции setCurrentCount, используя предыдущее значение (prevCount).
// Три обработчика событий:
// handleIncrementButtonClick увеличивает счетчик.
// handleDecrementButtonClick уменьшает счетчик.
// handleResetButtonClick сбрасывает значение в 0.
// Рендеринг: текущее значение отображается внутри <h1>, кнопки вызывают соответствующие обработчики.
// Компонент экспортируется как Counter и может быть использован в других частях приложения.


// Рендеринг в React — это процесс обновления и отображения UI-компонентов. 
// Он происходит при изменении состояния (state) или пропсов (props).
// React использует Virtual DOM для оптимизации и минимизации перерисовок.
