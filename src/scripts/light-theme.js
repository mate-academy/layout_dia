'use strict';

const page = document.documentElement;
const switchers = document.querySelectorAll('.page__theme-switcher');
const links = document.querySelectorAll('.link');
const buttons = document.querySelectorAll('.button');
const inputs = document.querySelectorAll('.input');
const services = document.querySelectorAll('.service');
const contactUs = document.querySelector('.contact-us');
const avas = document.querySelectorAll('.ava');
const customers = document.querySelectorAll('.customer');

function setThemeBasedOnUserPreference() {
  if (window.matchMedia
    && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (page.classList.contains('.page--theme--light')) {
      page.classList.remove('page--theme--light');
      contactUs.classList.remove('contact-us--theme--light');

      links.forEach(link => {
        link.classList.remove('link--theme--light');
      });

      buttons.forEach(button => {
        button.classList.remove('button--theme--light');
      });

      inputs.forEach(input => {
        input.classList.remove('input--theme--light');
      });

      services.forEach(service => {
        service.classList.remove('service--theme--light');
      });

      avas.forEach(ava => {
        ava.classList.remove('ava--theme--light');
      });

      customers.forEach(customer => {
        customer.classList.remove('customer--theme--light');
      });
    }
  } else {
    page.classList.add('page--theme--light');
    contactUs.classList.add('contact-us--theme--light');

    links.forEach(link => {
      link.classList.add('link--theme--light');
    });

    buttons.forEach(button => {
      button.classList.add('button--theme--light');
    });

    inputs.forEach(input => {
      input.classList.add('input--theme--light');
    });

    services.forEach(service => {
      service.classList.add('service--theme--light');
    });

    avas.forEach(ava => {
      ava.classList.add('ava--theme--light');
    });

    customers.forEach(customer => {
      customer.classList.add('customer--theme--light');
    });
  }
}

setThemeBasedOnUserPreference();

switchers.forEach(switcher => {
  switcher.addEventListener('click', () => {
    if (page.classList.contains('page--theme--light')) {
      page.classList.remove('page--theme--light');
      contactUs.classList.remove('contact-us--theme--light');

      links.forEach(link => {
        link.classList.remove('link--theme--light');
      });

      buttons.forEach(button => {
        button.classList.remove('button--theme--light');
      });

      inputs.forEach(input => {
        input.classList.remove('input--theme--light');
      });

      services.forEach(service => {
        service.classList.remove('service--theme--light');
      });

      avas.forEach(ava => {
        ava.classList.remove('ava--theme--light');
      });

      customers.forEach(customer => {
        customer.classList.remove('customer--theme--light');
      });
    } else {
      page.classList.add('page--theme--light');
      contactUs.classList.add('contact-us--theme--light');

      links.forEach(link => {
        link.classList.add('link--theme--light');
      });

      buttons.forEach(button => {
        button.classList.add('button--theme--light');
      });

      inputs.forEach(input => {
        input.classList.add('input--theme--light');
      });

      services.forEach(service => {
        service.classList.add('service--theme--light');
      });

      avas.forEach(ava => {
        ava.classList.add('ava--theme--light');
      });

      customers.forEach(customer => {
        customer.classList.add('customer--theme--light');
      });
    }
  });
});
