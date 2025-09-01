# Configuration EmailJS pour Vitrine Culture

## Introduction

Le formulaire de contact de Vitrine Culture utilise EmailJS pour envoyer des emails réels directement depuis le frontend. EmailJS est un service qui permet d'envoyer des emails sans avoir besoin d'un serveur backend.

## Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (jusqu'à 200 emails/mois)
3. Confirmez votre email

### 2. Configurer un service d'email

1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** généré

### 3. Créer un template d'email

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez votre template avec les variables suivantes :

```
Subject: [Vitrine Culture] Nouveau message de {{from_name}} - {{subject}}

Contenu:
Nouveau message reçu via le site Vitrine Culture

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Type de demande: {{type}}
Sujet: {{subject}}

Message:
{{message}}

---
Pour répondre, utilisez l'adresse: {{reply_to}}
```

4. Notez le **Template ID** généré

### 4. Obtenir la clé publique

1. Allez dans "Account" → "General"
2. Trouvez votre **Public Key**
3. Notez cette clé

### 5. Mettre à jour le code

Dans le fichier `/components/ContactPage.tsx`, remplacez ces lignes :

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // À remplacer par votre Service ID EmailJS
const templateId = 'YOUR_TEMPLATE_ID'; // À remplacer par votre Template ID EmailJS
const publicKey = 'YOUR_PUBLIC_KEY'; // À remplacer par votre Public Key EmailJS
```

Par vos vraies valeurs :

```javascript
const serviceId = 'service_xxxxxxx'; // Votre Service ID
const templateId = 'template_xxxxxxx'; // Votre Template ID
const publicKey = 'xxxxxxxxxxxxxx'; // Votre Public Key
```

### 6. Configurer l'email de réception

Assurez-vous que l'email `contact@vitrineculture.sn` dans la ligne :

```javascript
to_email: 'contact@vitrineculture.sn', // Votre email de réception
```

correspond à l'email où vous voulez recevoir les messages.

## Test de la configuration

1. Sauvegardez vos modifications
2. Allez sur la page contact de votre site
3. Remplissez et envoyez un message de test
4. Vérifiez que vous recevez l'email dans votre boîte de réception

## Dépannage

### Messages d'erreur courants

- **"Service not found"** : Vérifiez que le Service ID est correct
- **"Template not found"** : Vérifiez que le Template ID est correct
- **"Forbidden"** : Vérifiez que la Public Key est correcte et que le domaine est autorisé

### Domaines autorisés

Pour plus de sécurité, vous pouvez configurer dans EmailJS les domaines autorisés à utiliser votre service dans "Account" → "Security".

## Alternatives

Si vous préférez ne pas utiliser EmailJS, voici d'autres options :

1. **Formspree** : Service similaire à EmailJS
2. **Netlify Forms** : Si vous hébergez sur Netlify
3. **Backend personnalisé** : Avec Node.js/Express et un service comme SendGrid
4. **Supabase Edge Functions** : Pour une solution backend complète

## Limites du plan gratuit

- 200 emails par mois
- Support basique
- Branding EmailJS dans les emails

Pour plus d'emails ou pour retirer le branding, considérez l'upgrade vers un plan payant.