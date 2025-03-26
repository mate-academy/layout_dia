import {
  headerNavMenu,
  navMenuBurger,
  page,
} from '../vars/vars';

export default function updateMenu(action) {
  headerNavMenu?.classList[action](
    'header__nav-menu--active',
  );
  navMenuBurger?.classList[action](
    'header__burger-menu--active',
  );
  page?.classList[action]('page--no-scroll');
}
