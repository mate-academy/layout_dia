
# Checklist for preparing a portfolio project

## Tech review

1. Add favicon
2. Add a smooth scroll for the whole page (`scroll-behavior: smooth;`)
3. Logos in header and footer should be links to home page
4. Make sure when you click on logo there is no 404 error (Use `href="#"` in `anchor tag`)
5. In the PROCESS section add a hover effect to cards (for example, let them increase in size a little)
6. In the Testimonials and Our expertise section add hover effects for each review
7. All interactive elements(*links, buttons, pictures, icons*) ***should have a hover effect and cursor pointer***. User must intuitively understand that he can interact with them
8. When a user clicks on Address Google Maps is opened in a new tab (Use `target="_blank"`)
9. Make sure when you click on logo there is no 404 error (Use `href="#"` in `anchor tag`)
10. The user must have the opportunity to conveniently write 2-3 lines of text in the message input field
11. When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
12. The form shouldn’t submit empty
13. After autocomplete the form, change the [default styles](http://joxi.ru/EA4xgG8HXwL4lA). Read more about [changing autocomplete styles](https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/)
14. OPTIONAL: After everything is done, you can implement the slider in the first section

## HR review

1. To make it clear to the recruiter what exactly this landing page is, it is better to give the whole web page the title “Air”
2. A landing page is implemented strictly according to the design in Figma
3. Links in the header and footer menus should lead to the corresponding blocks of the landing page
4. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
5. Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
6. Make sure everything looks neat on mobile and without horizontal scrolling
7. The "Learn more" button should lead to the closest block (Our expertise)
8. The "Hire Us" button in the header menu should lead to the contact form
9. In the `Vision`, `Passion`, `Results` sections, the “Apply” button also should lead to the contact form
10. All the social icons in the footer should be clickable and open the social networks in a new tab





Реализовать лендинг согласно дизайну в Figma — использовать BEM и SCSS.

Адаптировать страницу под следующие экраны:

Большие экраны — 2560px
Дизайн — 1600px
Desktop — 1280px
Маленький desktop — 1024px
Планшет — 640px
Mobile (> 320px)
Требования
Реализовать header с навигацией.
Реализовать блок Strategic agency.
Реализовать слайдер (можно начать с одного изображения).
Реализовать блок слайдера как абсолютно позиционированный элемент с right: 0 и bottom: 0 внутри черного контейнера.
На больших экранах ограничить ширину черного контейнера до 1600px, чтобы слева оставалось стандартное серое фоновое пространство.
Реализовать блок Who we are.
Реализовать блок Our expertise с карточкой, переиспользуемой 3 раза.
Реализовать блок Process с 4 карточками процесса.
Использовать translateY(-50%) для смещения карточек вверх.
Реализовать блок Testimonials.
Каждая карточка должна иметь фиксированную ширину, а на маленьких экранах весь блок должен переключаться в колонку.
Реализовать блок Vision, Passion, Results.
Использовать https://github.com/mate-academy/layout_dia/blob/master/src/images/Shapes.png как фоновое изображение.
Реализовать блок Send us a message.
Реализовать блок Contact us.
Реализовать footer.

Чеклист для подготовки портфолио-проекта к HR review
Не забудь добавить заголовок “Air” для всей веб-страницы.
Лендинг должен быть реализован строго по дизайну из Figma.
Добавить favicon.
Стрелки внизу первого блока не должны медленно реагировать на нажатие (это возможно, если изображения слишком большие).
Пользователь должен иметь возможность удобно написать 2–3 строки текста в поле сообщения.
Опционально: после завершения всего можно реализовать слайдер на hero-экране (изображения можно взять с Unsplash).
Github flow
Сделать fork репозитория.
Клонировать fork.
(Ссылка проекта должна содержать твое имя, а не mate-academy)
Выполнить npm install (или просто npm i).
Выполнить npm start.
Открыть еще одно окно терминала для следующих шагов.

Выполнить:

git checkout -b develop

чтобы создать новую ветку и переключиться на нее.

Писать код в папке src.

Выполнить:

npm run lint

и исправить ошибки стиля кода.

Выполнить:

npm run deploy

чтобы задеплоить решение в gh-pages.

Сохранить изменения:
git add . && git commit -m 'solution'
Отправить код:
git push origin develop
Создать Pull Request (PR) из ветки develop в ветку master оригинального репозитория.
Заменить <your_account> на свой GitHub username в DEMO LINK.
Скопировать DEMO LINK в описание PR.




Добавить favicon
Все интерактивные элементы (ссылки, кнопки, изображения, иконки) должны иметь hover-эффект и cursor: pointer. Пользователь должен интуитивно понимать, что с ними можно взаимодействовать
НЕОБЯЗАТЕЛЬНО: после завершения всего можно реализовать слайдер в первой секции
Проверка HR
Чтобы рекрутеру было понятно, что это за лендинг, лучше назвать всю веб-страницу “Air”
Лендинг должен быть реализован строго по дизайну в Figma
Ссылки в меню header и footer должны вести к соответствующим блокам лендинга
Скорость анимаций должна быть одинаковой по всему лендингу (например, увеличение при hover или появление блоков при скролле)
Placeholder’ы в формах должны подсказывать, что вводить, а если есть валидация формы — должно быть понятно, в каком формате вводить номер телефона
Убедиться, что на мобильных устройствах всё выглядит аккуратно и нет горизонтального скролла
Кнопка “Learn more” должна вести к ближайшему блоку (Our expertise)
Кнопка “Hire Us” в header должна вести к контактной форме
В секциях Vision, Passion, Results кнопка “Apply” также должна вести к контактной форме
Все иконки социальных сетей в footer должны быть кликабельными и открывать соцсети в новой вкладке
