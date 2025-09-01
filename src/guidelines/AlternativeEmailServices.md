# Services d'email alternatifs pour Vitrine Culture

## 1. Formspree (Recommandé pour la simplicité)

Formspree est très simple à utiliser et ne nécessite aucune configuration JavaScript complexe.

### Configuration :

1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte gratuit
3. Créez un nouveau formulaire
4. Obtenez l'URL de votre formulaire

### Modification du code :

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        type: formData.type
      }),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      // Reset form...
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 2. Netlify Forms (Si hébergé sur Netlify)

Si vous hébergez votre site sur Netlify, vous pouvez utiliser leurs formulaires intégrés.

### Configuration :

Ajoutez simplement `data-netlify="true"` à votre formulaire :

```jsx
<form onSubmit={handleSubmit} data-netlify="true" name="contact">
  <input type="hidden" name="form-name" value="contact" />
  {/* Vos champs de formulaire */}
</form>
```

## 3. GetForm

Service simple et gratuit pour les formulaires.

### Configuration :

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://getform.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 4. Solution avec Backend personnalisé

Pour un contrôle total, vous pouvez créer votre propre API.

### Backend Node.js/Express avec Nodemailer :

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'votre-email@gmail.com',
    pass: 'votre-mot-de-passe-app'
  }
});

app.post('/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message, type } = req.body;
    
    const mailOptions = {
      from: 'votre-email@gmail.com',
      to: 'contact@vitrineculture.sn',
      subject: `[Vitrine Culture] ${subject}`,
      html: `
        <h2>Nouveau message de ${firstName} ${lastName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

### Frontend pour backend personnalisé :

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const result = await response.json();
    
    if (result.success) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 5. Supabase Edge Functions

Si vous utilisez Supabase, vous pouvez créer une Edge Function.

### Créer la fonction Edge :

```typescript
// supabase/functions/send-email/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const { firstName, lastName, email, phone, subject, message, type } = await req.json()
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'noreply@vitrineculture.sn',
        to: ['contact@vitrineculture.sn'],
        subject: `[Vitrine Culture] ${subject}`,
        html: `
          <h2>Nouveau message de ${firstName} ${lastName}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
```

## Recommandations

### Pour un site simple :
- **EmailJS** : Le plus simple à configurer
- **Formspree** : Alternative fiable

### Pour un site professionnel :
- **Backend personnalisé** : Contrôle total
- **Supabase Edge Functions** : Si vous utilisez déjà Supabase

### Pour un site sur Netlify :
- **Netlify Forms** : Intégration native

## Sécurité

Quelque soit la solution choisie :

1. **Validez toujours les données côté serveur**
2. **Utilisez HTTPS**
3. **Implémentez un rate limiting**
4. **Ajoutez un CAPTCHA pour éviter le spam**
5. **Ne jamais exposer vos clés API côté client**