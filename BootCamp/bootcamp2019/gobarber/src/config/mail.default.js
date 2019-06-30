export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};

/*
 Providers:
  Amazon SES
  Mailgun
  Sparkpost
  Mandril( mailchimp)


  para funcionar em dev existe o
  Mailtrap ( nao funciona online, apenas em dev local)
*/
