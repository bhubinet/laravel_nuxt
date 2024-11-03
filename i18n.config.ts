export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      general: {
        save: 'Save',
        upload: 'Upload',
        delete: 'Delete',
      },
      upload: {
        max_size: 'Max size: {size}MB',
        allowed_formats: 'Allowed formats: {formats}',
      },
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
      },
      account: {
        general: 'Account settings',
        my_profile: 'My profile',
        devices: 'My devices',
        signed_in_as: 'Signed in as',
        sign_out: 'Sign out',
        current_password: 'Current password',
        new_password: 'New password',
        profile_information: 'Profile information',
        profile_information_desc: 'Update your account\'s profile information and email address.',
        update_password: 'Update password',
        update_password_desc: 'Ensure your account is using a long, random password to stay secure.'
      }
    },
    fr: {
      general: {
        save: 'Enregistrer',
        upload: 'Télécharger',
        delete: 'Supprimer',
      },
      upload: {
        max_size: 'Taille max : {size}MB',
        allowed_formats: 'Formats autorisés : {formats}',
      },
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
      },
      account: {
        general: 'Paramètres du compte',
        my_profile: 'Mon profil',
        devices: 'Mes appareils',
        signed_in_as: 'Connecté en tant que',
        sign_out: 'Se déconnecter',
        current_password: 'Mot de passe actuel',
        new_password: 'Nouveau mot de passe',
        profile_information: 'Informations du profil',
        profile_information_desc: 'Mettez à jour les informations de profil et l\'adresse e-mail de votre compte.',
        update_password: 'Mettre à jour le mot de passe',
        update_password_desc: 'Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester sécurisé.'
      }
    }
  }
}))
