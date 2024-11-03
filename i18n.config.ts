export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      login: {
        title: 'Sign in to ...',
        or: 'Or login with email',
        email: 'Email',
        password: 'Password',
        remember_duration: 'for 1 month',
        remember_me: 'Remember me',
        forgot_your_password: 'Forgot your password?',
        btn_action: 'Login',
        dont_have_account: 'Don\'t have an account yet?',
        register_now: 'Click here to register',
        google: 'Sign in with Google',
        github: 'Sign in with GitHub',
      },
      register: {
        title: 'Create an account',
        btn_action: 'Register',
        fullname: 'Full name',
        password_hint: 'At least 8 characters',
        password_repeat: 'Repeat password',
        already_have_account: 'Already have an account?',
        login_now: 'Click here to login',
      },
      forgot_password: {
        title: 'Reset your password',
        btn_action: 'Send reset link',
        back_login: 'Back to login page',
      }
    },
    fr: {
      login: {
        title: 'Se connecter à ...',
        or: 'Ou connectez-vous avec votre email',
        email: 'E-mail',
        password: 'Mot de passe',
        remember_duration: 'pendant 1 mois',
        remember_me: 'Se souvenir de moi',
        forgot_your_password: 'Mot de passe oublié ?',
        btn_action: 'Se connecter',
        dont_have_account: 'Vous n\'avez pas encore de compte ?',
        register_now: 'Cliquez ici pour vous inscrire',
        google: 'Se connecter avec Google',
        github: 'Se connecter avec GitHub',
      },
      register: {
        title: 'Créer un compte',
        btn_action: 'S\'inscrire',
        fullname: 'Nom complet',
        password_hint: 'Au moins 8 caractères',
        password_repeat: 'Répéter le mot de passe',
        already_have_account: 'Vous avez déjà un compte ?',
        login_now: 'Cliquez ici pour vous connecter',
      },
      forgot_password: {
        title: 'Réinitialiser votre mot de passe',
        btn_action: 'Envoyer le lien de réinitialisation',
        back_login: 'Retour à la page de connexion',
      }
    }
  }
}))
