function Card() {
  return (
    <div className="resume">
      <h1>Арлан</h1>
      <p className="subtitle">Студент</p>

      <h2>Контакты</h2>
      <p>Телефон: [+77478148675]</p>
      <p>Email: [theedamee@gmail.com]</p>
      <p>Город: [Almaty]</p>

      <h2>О себе</h2>
      <p>
        Учусь в колледже и изучаю создание сайтов.
        Хочу развивать свои навыки и получать практический опыт.
      </p>

      <h2>Образование</h2>
      <p>Колледж: [Digital College]</p>
      <p>Специальность: [ПО]</p>
      <p>Курс: [4]</p>

      <h2>Навыки</h2>
      <ul>
        <li>Создание страниц на HTML</li>
        <li>Оформление страниц с помощью CSS</li>
        <li>Основы JavaScript и React</li>
      </ul>

      <h2>Опыт</h2>
      <p>Учебные проекты: создание страниц и карточек на React.</p>
    </div>
  );
}

export default Card;