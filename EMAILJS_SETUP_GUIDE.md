# 📧 EmailJS Setup Guide - Get Emails Directly in Your Inbox!

## 🎯 **What This Does**
Instead of opening the user's email client, your contact form will send emails directly to your Gmail inbox (`neellohitdsgpt@gmail.com`) automatically!

---

## 🚀 **Step 1: Create EmailJS Account**

### **1.1: Sign Up**
1. **Go to:** https://www.emailjs.com/
2. **Click:** "Sign Up" (Free plan - 200 emails/month)
3. **Sign up with your Gmail:** `neellohitdsgpt@gmail.com`
4. **Verify your email** when you get the confirmation

### **1.2: Complete Setup**
1. **Choose:** "I'm a developer"
2. **Skip the tutorial** (we'll do it manually)

---

## 📨 **Step 2: Connect Your Gmail**

### **2.1: Add Email Service**
1. **In EmailJS dashboard, click:** "Email Services"
2. **Click:** "Add New Service"
3. **Choose:** "Gmail" 
4. **Click:** "Connect Account"
5. **Sign in with:** `neellohitdsgpt@gmail.com`
6. **Allow all permissions** when Google asks
7. **Service Name:** `Gmail Service`
8. **Click:** "Create Service"

### **2.2: Copy Service ID**
- **You'll see something like:** `service_abc1234`
- **COPY THIS ID** - you'll need it later!

---

## 📝 **Step 3: Create Email Template**

### **3.1: Create Template**
1. **Click:** "Email Templates" in dashboard
2. **Click:** "Create New Template"
3. **Template Name:** `Portfolio Contact Form`

### **3.2: Set Up Template**
**Subject Line:**
```
New Contact from Portfolio - {{from_name}}
```

**Email Content:**
```
Hello Neellohit,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent automatically from your portfolio contact form.

Best regards,
Your Portfolio Website
```

### **3.3: Save Template**
1. **Click:** "Save"
2. **You'll get a Template ID** like `template_xyz5678`
3. **COPY THIS ID** - you'll need it!

---

## 🔑 **Step 4: Get Your Public Key**

1. **Go to:** "Account" → "General" in the dashboard
2. **Find:** "Public Key" section
3. **Copy the key** (looks like `abcd1234efgh5678`)
4. **SAVE THIS KEY** - you'll need it!

---

## 💻 **Step 5: Update Your Portfolio Code**

### **5.1: Open Your Script File**
Open `portfolio/script.js` and find this section (around line 150):

```javascript
// EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',      // Replace with your Gmail service ID
    templateID: 'YOUR_TEMPLATE_ID',    // Replace with your template ID
    publicKey: 'YOUR_PUBLIC_KEY'       // Replace with your public key
};
```

### **5.2: Replace the Values**
Replace with your actual values:

```javascript
const EMAILJS_CONFIG = {
    serviceID: 'service_abc1234',      // Your actual service ID
    templateID: 'template_xyz5678',    // Your actual template ID
    publicKey: 'abcd1234efgh5678'      // Your actual public key
};
```

### **5.3: Save the File**
Save `script.js` with your updated values.

---

## 🧪 **Step 6: Test Your Contact Form**

### **6.1: Test Locally**
1. **Open your portfolio** in a web browser
2. **Go to the contact section**
3. **Fill out the form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. **Click:** "Send Message"
5. **You should see:** "✅ Message sent successfully!"

### **6.2: Check Your Email**
1. **Check your Gmail:** `neellohitdsgpt@gmail.com`
2. **You should receive an email** with the test message
3. **If you don't see it, check spam folder**

---

## 🎯 **Step 7: Upload to GitHub**

After testing locally:

1. **Upload your updated files** to GitHub:
   - `index.html` (with EmailJS script)
   - `script.js` (with your EmailJS config)

2. **Test the live version** on GitHub Pages

---

## 🔧 **Troubleshooting**

### **Problem: "Failed to send message"**
**Solutions:**
1. **Check your IDs** - make sure Service ID, Template ID, and Public Key are correct
2. **Check EmailJS dashboard** - ensure Gmail service is connected
3. **Check browser console** (F12) for error messages

### **Problem: "Not receiving emails"**
**Solutions:**
1. **Check spam folder** in Gmail
2. **Verify Gmail service** is properly connected in EmailJS
3. **Check EmailJS dashboard** for delivery logs

### **Problem: "Service not found"**
**Solutions:**
1. **Double-check Service ID** in your code
2. **Ensure Gmail service is active** in EmailJS dashboard

---

## 📊 **EmailJS Dashboard Features**

### **Monitor Emails:**
- **Go to:** "Logs" in EmailJS dashboard
- **See:** All sent emails, delivery status, errors
- **Track:** Monthly usage (200 emails free per month)

### **Email Templates:**
- **Edit templates** anytime in the dashboard
- **Changes apply immediately** - no code updates needed
- **Test templates** before going live

---

## 🎉 **Final Result**

**After setup, when someone fills your contact form:**

1. **User fills form** on your portfolio
2. **Clicks "Send Message"**
3. **Sees success notification**
4. **You receive email** in your Gmail inbox immediately!
5. **Email contains** all form details (name, email, message)

---

## 📧 **Your Email Will Look Like:**

```
Subject: New Contact from Portfolio - John Doe

Hello Neellohit,

You have received a new message from your portfolio website:

Name: John Doe
Email: john.doe@company.com

Message:
Hi Neellohit, I saw your portfolio and I'm impressed with your AI/ML projects. 
We have an opening for a Machine Learning Engineer position. 
Would you be interested in discussing this opportunity?

---
This email was sent automatically from your portfolio contact form.

Best regards,
Your Portfolio Website
```

---

## 🚀 **Benefits of EmailJS**

✅ **Direct to inbox** - no email client needed
✅ **Professional appearance** - formatted emails
✅ **Automatic delivery** - works 24/7
✅ **Mobile friendly** - works on all devices
✅ **Free tier** - 200 emails/month
✅ **Reliable** - 99.9% delivery rate
✅ **Analytics** - track email delivery in dashboard

---

## 🎯 **Quick Setup Checklist**

- [ ] Create EmailJS account
- [ ] Connect Gmail service
- [ ] Create email template
- [ ] Copy Service ID, Template ID, Public Key
- [ ] Update script.js with your IDs
- [ ] Test locally
- [ ] Upload to GitHub
- [ ] Test live version
- [ ] Receive first email!

**Once set up, you'll never miss a potential job opportunity or client inquiry again!** 🎉

---

**Need help? The exact IDs you need are in your EmailJS dashboard after completing steps 2-4.**