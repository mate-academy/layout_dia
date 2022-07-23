import { Route, Switch, Redirect } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useLanguage } from '../components/language/useLanguage';

import { Layout } from '../components/Layout/Layout';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { Services } from '../components/Services/Services';
import { App } from '../App';

import 'dayjs/locale/uk';

export const Root = () => {
  const language = useLanguage();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale={language === 'ua' ? 'uk' : language}>
      <Layout>
        <Switch>
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/services" component={Services} />
          <Route path="/" component={App} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </LocalizationProvider>
  );
};
