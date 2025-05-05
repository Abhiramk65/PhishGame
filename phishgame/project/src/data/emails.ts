import { Email } from '../types';

export const emails: Email[] = [
  // ===================================
  // Easy difficulty emails - Legitimate (5 total)
  // ===================================
  {
    id: '1', // Original Netflix Legit
    from: { name: 'Netflix', email: 'info@netflix.com' },
    to: 'user@example.com',
    subject: 'Your monthly Netflix subscription',
    body: `<div><p>Hi there,</p><p>We wanted to let you know that your monthly subscription was successfully processed. Your next billing date will be June 15, 2025.</p><p>If you have any questions about your account, please visit our <a href="https://help.netflix.com">Help Center</a>.</p><p>Thanks for being a valued Netflix member!</p><p>The Netflix Team</p></div>`,
    date: '2025-05-15T10:23:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'easy-legit-2', // Amazon Shipment
    from: { name: 'Amazon', email: 'shipment-tracking@amazon.com' },
    to: 'user@example.com',
    subject: 'Your Amazon.com order has shipped',
    body: `<div><p>Hello,</p><p>Your package with order #111-222333-4445555 is on its way. It will arrive by Tuesday, May 20, 2025.</p><p>Track your package <a href="https://amazon.com/gp/your-account/ship-track">here</a>.</p><p>Thank you for shopping with Amazon!</p></div>`,
    date: '2025-05-18T08:15:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'easy-legit-3', // PayPal Payment Received
    from: { name: 'PayPal', email: 'service@paypal.com' },
    to: 'user@example.com',
    subject: 'You\'ve received a payment',
    body: `<div><p>Hello User,</p><p>You received a payment of $50.00 USD from John Doe.</p><p>Transaction ID: 6AB789CD0EF1</p><p>Log in to your PayPal account to see the details: <a href="https://www.paypal.com">paypal.com</a></p><p>Thanks,<br>PayPal</p></div>`,
    date: '2025-05-19T11:00:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'easy-legit-4', // Prime Video New Content
    from: { name: 'Prime Video', email: 'primevideo@amazon.com' },
    to: 'user@example.com',
    subject: 'New movie added to Prime Video!',
    body: `<div><p>Hi,</p><p>Check out the latest blockbuster added to Prime Video: "Action Hero Returns".</p><p>Start watching now: <a href="https://www.primevideo.com">Prime Video</a></p><p>Enjoy the show!</p><p>The Prime Video Team</p></div>`,
    date: '2025-05-20T16:30:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'easy-legit-5', // Google Security Alert (Real)
    from: { name: 'Google', email: 'no-reply@accounts.google.com' },
    to: 'user@example.com',
    subject: 'Security alert',
    body: `<div><p>We detected a new sign-in to your Google Account on a Windows device.</p><p>If this was you, you don't need to do anything. If not, we'll help you secure your account.</p><p>Check activity: <a href="https://myaccount.google.com/">Google Account</a></p><p>Thanks,<br>The Google Accounts team</p></div>`,
    date: '2025-05-21T09:45:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  
  // ===================================
  // Easy difficulty emails - Phishing (5 total)
  // ===================================
  {
    id: '2', // Original Netflix Phish
    from: { name: 'Netflíx', email: 'support@netflix-account-verify.com' },
    to: 'user@example.com',
    subject: 'URGENT: Billing Information Update Required',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Netflix Logo" style="width: 100px; margin-bottom: 20px;">
            <div style="background-color: #ffffff; padding: 25px; border-radius: 5px;">
              <h2 style="color: #333; margin-bottom: 15px;">Update Your Billing Information</h2>
              <p style="color: #555; margin-bottom: 15px;">Dear Customer,</p>
              <p style="color: #555; margin-bottom: 15px;">We were unable to validate your billing information for your recent charge of $12.99. To avoid service interruption, you must verify your payment details immediately.</p>
              <p style="margin-bottom: 25px;">
                <a href="http://netflix-verify-payment.com/login" data-real-url="http://netflixbilling-update.com/verify" style="display: inline-block; background-color: #e50914; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold;">Update Account Settings</a>
              </p>
              <p style="color: #555; margin-bottom: 15px;">If this issue is not resolved within 24 hours, your subscription will be suspended and your account may be terminated.</p>
              <p style="color: #555; margin-bottom: 15px;">If you did not subscribe to our services, contact us immediately to protect your account.</p>
              <p style="color: #555; margin-top: 20px;">Thanks,<br>The Netflix Team</p>
            </div>
            <p style="text-align: center; font-size: 12px; color: #999; margin-top: 20px;">© 2025 Netflix, Inc.</p>
    </div>`,
    date: '2025-05-15T14:37:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
      { type: 'sender', description: 'The sender email domain "netflix-account-verify.com" is not an official Netflix domain' },
      { type: 'urgency', description: 'Creates a false sense of urgency with threats of account suspension and termination' },
      { type: 'subject', description: 'Subject line with urgent language to trigger immediate action' },
      { type: 'link', description: 'The button link redirects to a suspicious non-Netflix domain' },
      { type: 'generic_greeting', description: 'Uses generic "Dear Customer" instead of your actual name' }
    ],
    unread: true
  },
  {
    id: 'easy-phish-2', // Amazon Order Problem
    from: { name: 'Amazon', email: 'order-notification@amazonsecure-checkout.com' },
    to: 'user@example.com',
    subject: 'Your Amazon Order Cannot Be Shipped - Action Required',
    body: `<div style="font-family: Arial, sans-serif; padding: 15px; border: 1px solid #ddd; max-width: 650px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" style="width: 100px; margin-bottom: 20px;">
            <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px;">Order Update</h3>
            <p style="margin-bottom: 15px;">Hello valued customer,</p>
            <p style="margin-bottom: 15px;">We regret to inform you that we're having difficulty processing your recent Amazon order (#A8852YZ92) due to a problem with your payment method.</p>
            <p style="margin-bottom: 25px;">To avoid order cancellation, please verify your billing details by 
              <a href="https://amazonsecure-checkout.com/billing/verify" data-real-url="https://amazonsecure-checkout.com/billing/verify" style="display: inline-block; background-color: #FF9900; color: white; padding: 10px 18px; text-decoration: none; border-radius: 4px; font-weight: bold;">clicking here</a>.
            </p>
            <p style="margin-bottom: 15px;">If we do not receive the updated information within 48 hours, your order will be cancelled automatically.</p>
            <p style="font-size: 12px; color: #555; margin-top: 20px;">This is an automated message. Please do not reply.</p>
            <p style="font-size: 11px; color: #777; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">© 2025 Amazon.com, Inc. or its affiliates. All rights reserved.</p>
           </div>`,
    date: '2025-05-18T10:05:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "amazonsecure-checkout.com" is not the official Amazon domain' },
        { type: 'generic_greeting', description: 'Uses generic "Hello valued customer" instead of your actual name' },
        { type: 'link', description: 'The button link points to a suspicious domain, not amazon.com' },
        { type: 'urgency', description: 'Creates urgency with threat of order cancellation within 48 hours' }
    ],
    unread: true
  },
  {
    id: 'easy-phish-3', // PayPal Unusual Login
    from: { name: 'PayPal', email: 'security@paypal-accountsecurity.com' },
    to: 'user@example.com',
    subject: 'Unauthorized PayPal Login Attempt Detected',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: auto;">
            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.png" alt="PayPal Logo" style="width: 55px; height: 34px; margin-bottom: 20px;">
            <h3 style="color: #003087; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Security Alert: Unusual Activity</h3>
            <p style="color: #333; margin-bottom: 15px;">Dear PayPal User,</p>
            <p style="color: #333; margin-bottom: 15px;">Our security systems have detected unusual login activity on your PayPal account from an unknown device with the following details:</p>
            <div style="background-color: #f7f7f7; padding: 10px; margin-bottom: 15px; border: 1px solid #eee;">
              <p style="margin: 5px 0;"><strong>Location:</strong> Kiev, Ukraine</p>
              <p style="margin: 5px 0;"><strong>IP Address:</strong> 185.25.xx.xx</p>
              <p style="margin: 5px 0;"><strong>Date & Time:</strong> May 19, 2025, 10:23 AM</p>
            </div>
            <p style="color: #333; margin-bottom: 15px;">If this was not you, your account may be compromised. Please verify your identity and secure your account immediately.</p>
            <p style="margin-bottom: 25px;">
              <a href="http://paypal-accountsecurity.com/secure/verify" data-real-url="http://paypal-accountsecurity.com/secure/verify" style="display: inline-block; background-color: #0070ba; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold;">Secure Your Account</a>
            </p>
            <p style="color: #333; margin-bottom: 15px;">If you ignore this message, your account access will be limited for security purposes.</p>
            <p style="color: #333; margin-top: 20px;">Regards,<br>PayPal Security Team</p>
           </div>`,
    date: '2025-05-19T14:20:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "paypal-accountsecurity.com" is not the official PayPal domain' },
        { type: 'link', description: 'The button link points to a fraudulent domain, not paypal.com' },
        { type: 'urgency', description: 'Creates urgency by describing a large, unusual transaction and limited account access' },
        { type: 'generic_greeting', description: 'Uses generic "Dear PayPal User" rather than the recipient\'s name' },
        { type: 'request_sensitivity', description: 'Encourages clicking links that likely lead to credential harvesting pages' }
    ],
    unread: true
  },
  {
    id: 'easy-phish-4', // Prime Video Subscription Expiring
    from: { name: 'PrimeVideo Update', email: 'alert@primevideo-login.net' },
    to: 'user@example.com',
    subject: 'Action Required: Update Your PrimeVideo Account',
    body: `<div style="font-family: Arial, sans-serif; padding: 15px; border: 1px solid #ccc; max-width: 600px; margin: auto; background-color: #0F171E; color: #fff;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/1280px-Amazon_Prime_Video_logo.svg.png" alt="Prime Video Logo" style="width: 120px; margin-bottom: 20px;">
            <div style="background-color: #1a242f; padding: 20px; border-radius: 4px;">
              <h3 style="color: #fff; margin-bottom: 15px;">Subscription Alert</h3>
              <p style="color: #ccc; margin-bottom: 15px;">Hi,</p>
              <p style="color: #ccc; margin-bottom: 15px;">Your PrimeVideo subscription is expire soon. To keep watching, update billing info.</p>
              <p style="margin-bottom: 25px;">
                <a href="http://primevideo-login.net/update-billing" data-real-url="http://primevideo-login.net/update-billing" style="display: inline-block; background-color: #00A8E1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 3px; font-weight: bold;">Update Now</a>
              </p>
              <p style="color: #ccc; margin-bottom: 15px;">Dont miss you're favorite shows!</p>
              <p style="color: #ccc; margin-top: 20px;">PrimeVideo Team</p>
            </div>
           </div>`,
    date: '2025-05-20T18:00:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Sender email domain "primevideo-login.net" is suspicious' },
        { type: 'grammar', description: 'Grammar errors ("is expire", "Dont miss you\'re")' },
        { type: 'link', description: 'Button link prompts for billing information update' },
        { type: 'urgency', description: 'Urgency related to subscription expiration' }
    ],
    unread: true
  },
  {
    id: 'easy-phish-5', // Bank of America Confirm Details
    from: { name: 'Bank of America', email: 'security@secure-bankofamerica.com' },
    to: 'user@example.com',
    subject: 'Security Alert: Urgent Account Verification Required',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bank_of_America_logo.svg/2560px-Bank_of_America_logo.svg.png" alt="Bank of America Logo" style="width: 150px; margin-bottom: 25px;">
            <h3 style="color: #D81E05; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Account Security Notice</h3>
            <p style="color: #333; margin-bottom: 15px;">Dear valued customer,</p>
            <p style="color: #333; margin-bottom: 15px;">As part of our continuous security measures, we have detected unusual activity associated with your Bank of America account.</p>
            <p style="color: #333; margin-bottom: 25px;">For your protection, we need you to verify your account information by 
              <a href="https://secure-bankofamerica.com/verify" data-real-url="https://secure-bankofamerica.com/verify" style="display: inline-block; background-color: #D81E05; color: white; padding: 11px 22px; text-decoration: none; border-radius: 4px; font-weight: bold;">clicking here</a> and confirming your identity.
            </p>
            <p style="color: #333; margin-bottom: 15px;">This verification process is mandatory. Failure to complete this verification within 24 hours will result in your account being temporarily suspended.</p>
            <p style="font-size: 12px; color: #555;">If you need assistance, please call our customer service at 1-800-XXX-XXXX (Do not call this number - it is fake).</p>
            <p style="font-size: 11px; color: #777; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">Bank of America, Member FDIC.</p>
           </div>`,
    date: '2025-05-22T11:30:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "secure-bankofamerica.com" is not the official Bank of America domain' },
        { type: 'generic_greeting', description: 'Uses generic "Dear valued customer" instead of the recipient\'s name' },
        { type: 'link', description: 'The button link points to a suspicious domain, not bankofamerica.com' },
        { type: 'urgency', description: 'Creates urgency with threat of account suspension within 24 hours' },
        { type: 'request_sensitivity', description: 'Asks for sensitive account verification through a suspicious link' }
    ],
    unread: true
  },
  
  // ===================================
  // Medium difficulty emails - Legitimate (5 total)
  // ===================================
  {
    id: '3', // Original BoA Legit
    from: { name: 'Bank of America', email: 'customerservice@bofa.com' },
    to: 'user@example.com',
    subject: 'Your Bank of America statement is ready',
    body: `<div><p>Hello,</p><p>Your Bank of America statement for ending May 15, 2025 is now available online.</p><p>Please log in to your account at <a href="https://www.bankofamerica.com">bankofamerica.com</a> to view your statement.</p><p>Thank you for banking with Bank of America.</p><p>This is an automated message, please do not reply.</p></div>`,
    date: '2025-05-16T09:12:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'medium-legit-2', // AWS Service Announcement
    from: { name: 'Amazon Web Services', email: 'aws-marketing@amazon.com' },
    to: 'user@example.com',
    subject: 'New AWS Service Announcement: Amazon Neptune Global Database',
    body: `<div><p>Dear AWS Customer,</p><p>We're excited to announce Amazon Neptune Global Database, allowing you to build graph applications across multiple AWS Regions.</p><p>Learn more about the benefits and use cases on our blog: <a href="https://aws.amazon.com/blogs/database/">AWS Database Blog</a></p><p>Sincerely,<br>The Amazon Web Services Team</p></div>`,
    date: '2025-05-23T14:00:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'medium-legit-3', // LinkedIn Message
    from: { name: 'LinkedIn', email: 'messages-noreply@linkedin.com' },
    to: 'user@example.com',
    subject: 'You have a new message from Sarah Chen',
    body: `<div><p>Hi User,</p><p>Sarah Chen sent you a message regarding the Project Manager position.</p><p>View message: <a href="https://www.linkedin.com/messaging/">LinkedIn Messaging</a></p><p>Best,<br>The LinkedIn Team</p></div>`,
    date: '2025-05-24T10:30:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'medium-legit-4', // Dropbox Storage Almost Full
    from: { name: 'Dropbox', email: 'no-reply@dropbox.com' },
    to: 'user@example.com',
    subject: 'Your Dropbox is almost full',
    body: `<div><p>Hi,</p><p>Your Dropbox account (user@example.com) is currently at 95% capacity.</p><p>To avoid interruptions, consider upgrading your plan or freeing up space.</p><p>Manage your storage: <a href="https://www.dropbox.com/account/plan">Dropbox Plans</a></p><p>Thanks,<br>The Dropbox Team</p></div>`,
    date: '2025-05-25T16:00:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'medium-legit-5', // Microsoft Password Change (Real)
    from: { name: 'Microsoft Account Team', email: 'account-security-noreply@accountprotection.microsoft.com' },
    to: 'user@example.com',
    subject: 'Microsoft account password change',
    body: `<div><p>Hi User,</p><p>The password for your Microsoft account us***@example.com was changed on 5/26/2025 11:15 AM (UTC).</p><p>If this was you, then you can safely ignore this email.</p><p>If this wasn't you, your account has been compromised. Please follow these steps:<br>1. Reset your password.<br>2. Review your security info.</p><p>Click here to review recent activity: <a href="https://account.microsoft.com/">Microsoft Account</a></p><p>Thanks,<br>The Microsoft account team</p></div>`,
    date: '2025-05-26T11:20:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  
  // ===================================
  // Medium difficulty emails - Phishing (5 total)
  // ===================================
  {
    id: '4', // Original BoA Phish
    from: { name: 'Bank of America', email: 'customer.service@bankofamerica-online.net' },
    to: 'user@example.com',
    subject: 'Suspicious Transaction Alert - Action Required',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bank_of_America_logo.svg/2560px-Bank_of_America_logo.svg.png" alt="Bank of America Logo" style="width: 150px; margin-bottom: 25px;">
            <h3 style="color: #D81E05; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Fraud Alert</h3>
            <p style="color: #333; margin-bottom: 15px;">Dear Bank of America Customer,</p>
            <p style="color: #333; margin-bottom: 15px;">Our fraud detection system has flagged a potentially unauthorized transaction on your account:</p>
            <div style="background-color: #f7f7f7; padding: 10px; margin-bottom: 15px; border: 1px solid #eee;">
              <p style="margin: 5px 0;"><strong>Amount:</strong> $750.29</p>
              <p style="margin: 5px 0;"><strong>Merchant:</strong> Electronics Store</p>
              <p style="margin: 5px 0;"><strong>Date:</strong> May 16, 2025</p>
              <p style="margin: 5px 0;"><strong>Location:</strong> Orlando, FL</p>
            </div>
            <p style="color: #333; margin-bottom: 15px;">If you do not recognize this transaction, please 
              <a href="http://bankofamerica-online.net/fraud-alert/report" data-real-url="http://bankofamerica-online.net/fraud-alert" style="display: inline-block; background-color: #D81E05; color: white; padding: 10px 18px; text-decoration: none; border-radius: 4px; font-weight: bold;">review and report it immediately</a>.
            </p>
            <p style="color: #333; margin-bottom: 15px;">For your security, we have temporarily limited certain features of your account until this matter is resolved.</p>
            <p style="color: #333; margin-top: 20px;">Bank of America Customer Security</p>
            <p style="font-size: 10px; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">Please do not reply to this email. This mailbox is not monitored and you will not receive a response.</p>
    </div>`,
    date: '2025-05-16T11:45:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
      { type: 'sender', description: 'The email domain "bankofamerica-online.net" is not an official Bank of America domain' },
      { type: 'link', description: 'The button link for reviewing transactions points to a suspicious domain' },
      { type: 'urgency', description: 'Creates a sense of urgency by mentioning suspicious activity and account limitations' },
      { type: 'request_sensitivity', description: 'Attempts to make you log in to review a supposedly fraudulent transaction' }
    ],
    unread: true
  },
  {
    id: 'medium-phish-2', // AWS Payment Problem
    from: { name: 'Amazon Web Services', email: 'aws-billing@aws-service-accounts.com' },
    to: 'user@example.com',
    subject: 'AWS Account Notice: Payment Method Declined',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; max-width: 650px; margin: auto;">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" alt="AWS Logo" style="width: 60px; margin-bottom: 20px;">
             <h3 style="color: #232F3E; margin-bottom: 15px;">Important: Payment Declined</h3>
             <p style="margin-bottom: 15px;">Dear AWS Customer,</p>
             <p style="margin-bottom: 15px;">This is an important notification regarding your AWS account. We were unable to process your most recent payment for AWS services due to a problem with your payment method.</p>
             <div style="background-color: #f1f1f1; padding: 10px; margin-bottom: 15px; font-size: 14px;">
               <strong>Account ID:</strong> XXXX-XXXX-XXXX<br>
               <strong>Failed payment amount:</strong> $247.32<br>
               <strong>Due date:</strong> May 22, 2025
             </div>
             <p style="margin-bottom: 20px;">To prevent service interruption, please update your payment information by 
               <a href="https://aws-service-accounts.com/billing/update-payment" data-real-url="https://aws-service-accounts.com/billing/update" style="display: inline-block; background-color: #FF9900; color: #111; padding: 10px 20px; text-decoration: none; border-radius: 3px; font-weight: bold;">clicking here</a>.
             </p>
             <p style="margin-bottom: 15px;">If your payment method is not updated within 48 hours, your AWS resources may be suspended, which could impact your applications and services.</p>
             <p style="margin-top: 20px;">Amazon Web Services</p>
            </div>`,
    date: '2025-05-23T15:30:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Sender uses unofficial domain "aws-service-accounts.com" instead of amazonaws.com' },
        { type: 'link', description: 'Link directs to a suspicious domain for payment updates' },
        { type: 'urgency', description: 'Creates urgency with threats of service suspension within 48 hours' },
        { type: 'generic_greeting', description: 'Uses generic "Dear AWS Customer" without specific account details' }
    ],
    unread: true
  },
  {
    id: 'medium-phish-3', // LinkedIn Restriction
    from: { name: 'LinkedIn Security', email: 'security-alert@linkedin-accounts.com' },
    to: 'user@example.com',
    subject: 'LinkedIn Security: Unusual Account Activity Detected',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/70px-LinkedIn_logo_initials.png" alt="LinkedIn Logo" style="width: 35px; margin-bottom: 20px;">
            <h3 style="color: #0A66C2; margin-bottom: 20px;">Account Security Alert</h3>
            <p style="margin-bottom: 15px;">Dear LinkedIn Member,</p>
            <p style="margin-bottom: 15px;">We recently detected unusual activity on your LinkedIn account that may indicate unauthorized access attempts.</p>
            <p style="margin-bottom: 5px;"><strong>Activity details:</strong></p>
            <ul style="margin-left: 20px; margin-bottom: 15px; list-style: disc;">
              <li>Multiple login attempts from unrecognized locations</li>
              <li>Changes to saved job searches</li>
              <li>Attempted profile modifications</li>
            </ul>
            <p style="margin-bottom: 15px;">As a security measure, we've temporarily limited some account features. To restore full access, please verify your identity here:</p>
            <p style="margin-bottom: 25px;">
              <a href="http://linkedin-accounts.com/security/start-verification" data-real-url="http://linkedin-accounts.com/security/verify" style="display: inline-block; background-color: #0A66C2; color: white; padding: 11px 22px; text-decoration: none; border-radius: 20px; font-weight: bold;">Verify Your Identity</a>
            </p>
            <p style="margin-bottom: 15px;">Ignoring this security alert may result in further restrictions to protect your professional information.</p>
            <p style="margin-top: 20px;">LinkedIn Trust & Safety Team</p>
           </div>`,
    date: '2025-05-24T11:15:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "linkedin-accounts.com" is not the official LinkedIn domain (linkedin.com)' },
        { type: 'link', description: 'The button link points to a suspicious domain, not linkedin.com' },
        { type: 'urgency', description: 'Creates urgency with threats of further account restrictions' },
        { type: 'generic_greeting', description: 'Uses the generic "Dear LinkedIn Member" instead of the recipient\'s name' }
    ],
    unread: true
  },
  {
    id: 'medium-phish-4', // Dropbox Malware Alert (Fake)
    from: { name: 'Dropbox', email: 'security-noreply@dropboxmail.services' },
    to: 'user@example.com',
    subject: 'Security Alert: Your Dropbox Files May Be Compromised',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/100px-Dropbox_Icon.svg.png" alt="Dropbox Logo" style="width: 50px; margin-bottom: 20px;">
            <h3 style="color: #0061FF; margin-bottom: 20px;">Account Security Notice</h3>
            <p style="margin-bottom: 15px;">Hi there,</p>
            <p style="margin-bottom: 15px;">Our security systems have detected potentially malicious activity involving files in your Dropbox account. Several documents appear to have been accessed from an unrecognized device in <strong>Mexico City, Mexico</strong>.</p>
            <p style="margin-bottom: 15px;">We have temporarily restricted external sharing capabilities on your account as a precautionary measure. To review the activity and restore full account functionality, please verify your identity here:</p>
            <p style="margin-bottom: 25px;">
              <a href="http://dropboxmail.services/security/activity-review" data-real-url="http://dropboxmail.services/security/review" style="display: inline-block; background-color: #0061FF; color: white; padding: 11px 22px; text-decoration: none; border-radius: 4px; font-weight: bold;">Review Account Activity</a>
            </p>
            <p style="margin-bottom: 15px;">If you don't recognize this activity, we recommend changing your password immediately after verifying your identity.</p>
            <p style="margin-top: 20px;">The Dropbox Security Team</p>
            <p style="font-size: 11px; color: #777; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">© 2025 Dropbox</p>
           </div>`,
    date: '2025-05-25T17:45:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "dropboxmail.services" is not the official Dropbox domain (dropboxmail.com)' },
        { type: 'link', description: 'The button link points to a fraudulent domain, not dropboxmail.com' },
        { type: 'urgency', description: 'Creates fear by claiming files were accessed from a foreign location' },
        { type: 'generic_greeting', description: 'Uses generic "Hi there" instead of addressing by name' }
    ],
    unread: true
  },
  {
    id: 'medium-phish-5', // Microsoft Unusual Sign-in (Fake)
    from: { name: 'Microsoft Account Team', email: 'security-noreply@microsoft-accountprotection.com' },
    to: 'user@example.com',
    subject: 'Critical Security Alert: Unusual Sign-in Activity',
    body: `<div style="font-family: Segoe UI, Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/100px-Microsoft_logo.svg.png" alt="Microsoft Logo" style="width: 100px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 15px;">Microsoft account security alert</h3>
            <p style="margin-bottom: 15px;">Dear Microsoft Customer,</p>
            <p style="margin-bottom: 15px;">We detected a sign-in attempt to your Microsoft account from an unfamiliar location.</p>
            <div style="background-color: #f3f3f3; padding: 10px; margin-bottom: 15px; border-left: 3px solid #0078D4;">
              <p style="margin: 5px 0;"><strong>Sign-in details:</strong></p>
              <p style="margin: 5px 0;">Date: May 26, 2025 9:47 AM UTC</p>
              <p style="margin: 5px 0;">IP address: 103.87.xx.xx</p>
              <p style="margin: 5px 0;">Location: <strong>Moscow, Russia</strong></p>
              <p style="margin: 5px 0;">Browser: Chrome on Windows</p>
            </div>
            <p style="margin-bottom: 15px;">If this wasn't you, your account password may be compromised. Please secure your account immediately:</p>
            <p style="margin-bottom: 25px;">
              <a href="http://microsoft-accountprotection.com/account/secure" data-real-url="http://microsoft-accountprotection.com/secure" style="display: inline-block; background-color: #0078D4; color: white; padding: 11px 22px; text-decoration: none; border-radius: 2px; font-weight: 500;">Secure My Account</a>
            </p>
            <p style="margin-bottom: 15px; font-size: 14px;">If you don't take action within 24 hours, we may temporarily suspend your account to protect your personal information.</p>
            <p style="margin-top: 20px;">The Microsoft Account Security Team</p>
           </div>`,
    date: '2025-05-26T10:10:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "microsoft-accountprotection.com" is not an official Microsoft domain' },
        { type: 'link', description: 'The button link points to a fraudulent domain, not microsoft.com' },
        { type: 'urgency', description: 'Creates fear with a sign-in from Russia and threatens account suspension' },
        { type: 'generic_greeting', description: 'Uses generic "Dear Microsoft Customer" instead of your actual name' }
    ],
    unread: true
  },
  
  // ===================================
  // Hard difficulty emails - Legitimate (5 total)
  // ===================================
  {
    id: '5', // Original Apple Legit
    from: { name: 'Apple', email: 'no_reply@apple.com' },
    to: 'user@example.com',
    subject: 'Your Apple ID was used to sign in to iCloud',
    body: `<div><p>Dear Customer,</p><p>Your Apple ID (user@example.com) was used to sign in to iCloud via a web browser.</p><p>Date and Time: May 16, 2025 at 2:30 PM</p><p>If you recently signed in to your account, you can disregard this email.</p><p>If you did not sign in and believe someone may have accessed your account, go to <a href="https://appleid.apple.com">Apple ID</a> to change your password immediately.</p><p>Apple Support</p></div>`,
    date: '2025-05-16T14:35:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'hard-legit-2', // Chase Policy Update
    from: { name: 'Chase Bank', email: 'no.reply@chase.com' },
    to: 'user@example.com',
    subject: 'Important Information Regarding Your Account',
    body: `<div><p>Dear Customer,</p><p>We've updated our Privacy Policy and User Agreement. These changes will take effect on June 15, 2025.</p><p>You can review the updated documents by logging into your account:</p><p><a href="https://www.chase.com">Chase Online</a></p><p>No action is required from you at this time. Thank you for banking with Chase.</p><p>Sincerely,<br>Chase Customer Service</p></div>`,
    date: '2025-05-27T09:00:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'hard-legit-3', // Company HR Compliance Training
    from: { name: 'Your Company HR', email: 'hr@yourcompanydomain.com' },
    to: 'user@example.com',
    subject: 'Action Required: Complete Your Annual Compliance Training',
    body: `<div><p>Hello Team,</p><p>This is a reminder that the mandatory annual compliance training deadline is approaching (May 31, 2025).</p><p>Please log in to the company portal to complete your assigned modules: <a href="https://internal.yourcompanydomain.com/training">Company Training Portal</a></p><p>Failure to complete the training by the deadline may result in disciplinary action.</p><p>Thank you,<br>HR Department</p></div>`,
    date: '2025-05-28T11:30:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true // Assuming 'yourcompanydomain.com' is the user's workplace domain
  },
  {
    id: 'hard-legit-4', // GitHub New Public Key
    from: { name: 'GitHub', email: 'noreply@github.com' },
    to: 'user@example.com',
    subject: '[GitHub] A new public key was added to your account',
    body: `<div><p>Hey User,</p><p>A new public key with the fingerprint SHA256:abcdef123456... was added to your account from IP address 198.51.100.1 (Example City, Country) on May 29, 2025 at 3:00 PM UTC.</p><p>If you did not add this key, please review your security settings and remove any unauthorized keys immediately: <a href="https://github.com/settings/keys">GitHub Security Settings</a></p><p>Thanks,<br>The GitHub Team</p></div>`,
    date: '2025-05-29T15:05:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'hard-legit-5', // IRS Refund Status Info (Real)
    from: { name: 'IRS (Internal Revenue Service)', email: 'info@irs.gov' },
    to: 'user@example.com',
    subject: 'Update on Your 2024 Tax Refund Status',
    body: `<div><p>Dear Taxpayer,</p><p>You can check the status of your federal income tax refund using the Where's My Refund? tool on IRS.gov.</p><p>You will need your Social Security number or ITIN, your filing status, and your exact refund amount.</p><p>Check your refund status here: <a href="https://www.irs.gov/refunds">Where's My Refund?</a></p><p>Please note: The IRS will not initiate contact with taxpayers by email, text messages or social media channels to request personal or financial information.</p><p>Internal Revenue Service</p></div>`,
    date: '2025-05-30T10:15:00',
    hasAttachment: false,
    isPhishing: false, // Legitimate informational email, points to official tool, includes warning about scams.
    unread: true
  },
  
  // ===================================
  // Hard difficulty emails - Phishing (5 total)
  // ===================================
  {
    id: '6', // Original Apple Phish
    from: { name: 'Apple Support', email: 'account-verification@apple-support.services' },
    to: 'user@example.com',
    subject: 'Your Apple Account: Action Required',
    body: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; border: 1px solid #e5e5e5; max-width: 600px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/60px-Apple_logo_black.svg.png" alt="Apple Logo" style="width: 40px; margin-bottom: 25px;">
            <h3 style="color: #1d1d1f; font-size: 20px; font-weight: 600; margin-bottom: 15px;">Your Apple ID has been limited</h3>
            <p style="color: #333; margin-bottom: 15px;">Dear Apple Customer,</p>
            <p style="color: #333; margin-bottom: 15px;">Our automated system has detected unusual activity on your Apple ID. As a security measure, your Apple account access has been limited until you verify your information.</p>
            <p style="color: #333; margin-bottom: 15px;">This security measure helps us ensure that your Apple services and personal information remain protected.</p>
            <p style="margin-bottom: 25px;">Please verify your account details by 
              <a href="http://apple-support.services/verify/account" data-real-url="http://apple-support.services/verification" style="display: inline-block; background-color: #007AFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: 500;">clicking here</a>.
            </p>
            <p style="color: #333; margin-bottom: 15px; font-size: 14px;">If we do not receive verification within 24 hours, your account access may be suspended as a precautionary measure.</p>
            <p style="color: #555; font-size: 13px; margin-top: 20px;">This is an automated message. Please do not reply.</p>
            <p style="color: #666; font-size: 12px; margin-top: 25px; border-top: 1px solid #e5e5e5; padding-top: 15px;">Apple Support<br>© 2025 Apple Inc. One Apple Park Way, Cupertino, CA 95014</p>
    </div>`,
    date: '2025-05-16T15:22:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
      { type: 'sender', description: 'The email domain "apple-support.services" is not an official Apple domain (apple.com)' },
      { type: 'link', description: 'The button link points to a fraudulent domain, not apple.com' },
      { type: 'urgency', description: 'Creates fear with account limitations and threatens further suspension' },
      { type: 'generic_greeting', description: 'Uses generic "Dear Apple Customer" rather than your actual name' }
    ],
    unread: true
  },
  {
    id: 'hard-phish-2', // Chase Unusual Activity
    from: { name: 'Chase Bank', email: 'secure-alerts@chase-secure-banking.com' },
    to: 'user@example.com',
    subject: 'Chase Security Alert: Verify Recent Transaction',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: auto;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Chase_logo.svg/150px-Chase_logo.svg.png" alt="Chase Logo" style="width: 100px; margin-bottom: 25px;">
            <h3 style="color: #125BC0; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Account Security Alert</h3>
            <p style="color: #333; margin-bottom: 15px;">Dear Valued Chase Customer,</p>
            <p style="color: #333; margin-bottom: 15px;">For your protection, we have temporarily limited online access to your account. Our fraud monitoring system has detected unusual transaction activity:</p>
            <div style="background-color: #f4f8fb; padding: 15px; margin-bottom: 20px; border: 1px solid #d6e6f3;">
              <p style="margin: 0 0 10px 0; font-weight: bold; color: #125BC0;">Transaction Details:</p>
              <p style="margin: 5px 0;"><strong>Date:</strong> May 27, 2025</p>
              <p style="margin: 5px 0;"><strong>Time:</strong> 02:43 AM ET</p>
              <p style="margin: 5px 0;"><strong>Amount:</strong> $2,499.50</p>
              <p style="margin: 5px 0;"><strong>Merchant:</strong> Electronics Global Export</p>
              <p style="margin: 5px 0;"><strong>Method:</strong> Card Not Present</p>
            </div>
            <p style="color: #333; margin-bottom: 10px;">If you recognize this transaction, please 
              <a href="http://chase-secure-banking.com/account/verify" data-real-url="http://chase-secure-banking.com/verification" style="display: inline-block; background-color: #125BC0; color: white; padding: 10px 18px; text-decoration: none; border-radius: 4px; font-weight: bold;">confirm it here</a>.
            </p>
            <p style="color: #333; margin-bottom: 20px;">If you do not recognize this transaction, please 
              <a href="http://chase-secure-banking.com/account/dispute" data-real-url="http://chase-secure-banking.com/dispute" style="display: inline-block; background-color: #D81E05; color: white; padding: 10px 18px; text-decoration: none; border-radius: 4px; font-weight: bold;">report it here</a> and we will initiate our fraud investigation process.
            </p>
            <p style="color: #555; font-size: 13px; margin-bottom: 15px;">For security purposes, we may contact you by phone to verify additional details.</p>
            <p style="color: #333; margin-top: 20px;">Chase Online Banking Team</p>
            <p style="font-size: 11px; color: #777; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">JPMorgan Chase Bank, N.A.</p>
           </div>`,
    date: '2025-05-27T10:45:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "chase-secure-banking.com" is not an official Chase domain (chase.com)' },
        { type: 'link', description: 'Both verification links point to a fraudulent domain, not chase.com' },
        { type: 'urgency', description: 'Creates urgency by describing a large, unusual transaction and limited account access' },
        { type: 'generic_greeting', description: 'Uses generic "Dear Valued Chase Customer" instead of the recipient\'s name' },
        { type: 'request_sensitivity', description: 'Encourages clicking links that likely lead to credential harvesting pages' }
    ],
    unread: true
  },
  {
    id: 'hard-phish-3', // HR Payroll Update Request
    from: { name: 'Human Resources', email: 'hr-payroll@yourcompanydomain.employee-portal.net' },
    to: 'user@example.com',
    subject: 'May Payroll Processing: Action Required by May 30',
    body: `<div style="font-family: Calibri, Arial, sans-serif; padding: 20px; border: 1px solid #ccc; max-width: 650px; margin: auto; background-color: #f8f8f8;">
            <h3 style="color: #2F5496; border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 20px;">Payroll Information Update Required</h3>
            <p style="margin-bottom: 15px;">Hello Team,</p>
            <p style="margin-bottom: 15px;">Due to recent updates in our payroll processing system, all employees must validate their direct deposit information before the next payroll cycle.</p>
            <p style="margin-bottom: 15px;"><strong>Action Required:</strong> Please review and confirm your banking details through our secure employee portal:</p>
            <p style="margin-bottom: 25px;">
              <a href="http://yourcompanydomain.employee-portal.net/payroll/confirm-details" data-real-url="http://yourcompanydomain.employee-portal.net/payroll/verify" style="display: inline-block; background-color: #4472C4; color: white; padding: 11px 22px; text-decoration: none; border-radius: 0px; font-weight: bold;">Employee Payroll Portal</a>
            </p>
            <p style="margin-bottom: 10px;">Important details to verify:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px; list-style: disc;">
              <li>Bank account information</li>
              <li>Routing number</li>
              <li>Primary/secondary account allocations</li>
              <li>Tax withholding preferences</li>
            </ul>
            <p style="margin-bottom: 15px;">This verification must be completed by <strong>May 30, 2025</strong> to ensure timely processing of your upcoming paycheck.</p>
            <p style="font-size: 14px;">If you have any questions, please contact HR at extension 4500.</p>
            <p style="margin-top: 20px;">Thank you for your cooperation,<br>Human Resources Department</p>
           </div>`,
    date: '2025-05-28T14:00:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Domain "yourcompanydomain.employee-portal.net" uses a suspicious subdomain structure' },
        { type: 'link', description: 'Link requests sensitive banking information through a suspicious portal' },
        { type: 'request_sensitivity', description: 'Asks for highly sensitive financial information including bank accounts and routing numbers' },
        { type: 'urgency', description: 'Creates urgency with a firm deadline and threatens delay in receiving payment' }
    ],
    unread: true
  },
  {
    id: 'hard-phish-4', // GitHub Credentials Compromised
    from: { name: 'GitHub Security', email: 'security-alerts@github-safety.net' },
    to: 'user@example.com',
    subject: 'SECURITY: Your GitHub credentials may have been leaked',
    body: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'; padding: 20px; border: 1px solid #d0d7de; max-width: 600px; margin: auto; background-color: #f6f8fa;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/100px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" style="width: 50px; margin-bottom: 25px;">
            <h3 style="color: #CF222E; font-weight: 600; margin-bottom: 15px;">Security Alert: Potential Credential Leak</h3>
            <p style="color: #24292f; margin-bottom: 15px;">Hello,</p>
            <p style="color: #24292f; margin-bottom: 15px;">GitHub's security team has discovered that your account credentials may have been exposed in a recent security incident affecting multiple code repositories.</p>
            <p style="color: #24292f; margin-bottom: 15px;">We've detected that your account was used to access several private repositories from an unrecognized IP address in <strong>Hanoi, Vietnam</strong> at 15:42 UTC on May 29, 2025.</p>
            <p style="color: #24292f; font-weight: 600; margin-bottom: 10px;">Actions required:</p>
            <ol style="margin-left: 20px; margin-bottom: 15px;">
              <li style="margin-bottom: 8px;">
                <a href="http://github-safety.net/account/reset-password" data-real-url="http://github-safety.net/account/reset" style="display: inline-block; background-color: #2da44e; color: white; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-weight: 500;">Reset your password immediately</a>
              </li>
              <li style="margin-bottom: 8px;">Review authentication logs for unauthorized access</li>
              <li>Enable two-factor authentication if not already enabled</li>
            </ol>
            <p style="color: #24292f; margin-bottom: 15px;">Failure to secure your account may result in unauthorized access to your repositories and potentially expose sensitive information within your codebase.</p>
            <p style="color: #24292f; margin-top: 20px;">GitHub Security Operations</p>
           </div>`,
    date: '2025-05-29T16:20:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "github-safety.net" is not the official GitHub domain (github.com)' },
        { type: 'link', description: 'Password reset link points to a fraudulent domain' },
        { type: 'urgency', description: 'Creates fear by claiming account was used to access private repositories' },
        { type: 'generic_greeting', description: 'Uses generic "Hello" greeting without specific user information' }
    ],
    unread: true
  },
  {
    id: 'hard-phish-5', // IRS Verify Filing Info (Fake)
    from: { name: 'Internal Revenue Service', email: 'refund-status@irs-govmailservice.com' },
    to: 'user@example.com',
    subject: 'IRS: Your Tax Refund Is Pending Additional Verification',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #a9a9a9; max-width: 600px; margin: auto; background-color: #ffffff;">
            <img src="https://www.irs.gov/themes/custom/equity/logo.svg" alt="IRS Logo" style="width: 50px; height: 50px; margin-bottom: 20px;">
            <h3 style="color: #003f87; border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 20px;">Tax Refund Verification Required</h3>
            <p style="margin-bottom: 15px;">Dear Taxpayer,</p>
            <p style="margin-bottom: 15px;">The Internal Revenue Service has processed your 2024 tax return and determined that you are eligible for a refund of <strong>$1,873.42</strong>.</p>
            <p style="margin-bottom: 15px;">However, before we can release your refund, we require additional verification of your information due to new fraud prevention measures implemented this tax season.</p>
            <p style="margin-bottom: 15px;">Please complete the verification process by 
              <a href="http://irs-govmailservice.com/refund/verify-identity" data-real-url="http://irs-govmailservice.com/verify-refund" style="display: inline-block; background-color: #0070ba; color: white; padding: 11px 22px; text-decoration: none; border-radius: 4px; font-weight: bold;">clicking here</a> and providing the requested information.</p>
            <p style="margin-bottom: 5px;">Please note that you will need to provide your:</p>
            <ul style="margin-left: 20px; margin-bottom: 15px; list-style: disc;">
              <li>Social Security Number</li>
              <li>Date of birth</li>
              <li>Current address</li>
              <li>Banking information for direct deposit</li>
            </ul>
            <p style="margin-bottom: 15px;">Your refund will be issued within 5-7 business days after successful verification.</p>
            <p style="margin-top: 20px;">Internal Revenue Service<br>Department of the Treasury</p>
            <p style="font-size: 10px; color: #777; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">Note: The IRS will never initiate contact with taxpayers by email to request personal or financial information. This is an educational simulation.</p>
           </div>`,
    date: '2025-05-30T13:00:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Domain "irs-govmailservice.com" is not the official IRS domain (irs.gov). IRS does not initiate contact via email for sensitive info.' },
        { type: 'link', description: 'Link leads to a form requesting highly sensitive data (SSN, banking details).' },
        { type: 'request_sensitivity', description: 'Asks directly for SSN, DOB, and banking details via email link - the IRS never does this.' },
        { type: 'urgency', description: 'Entices action by promising a specific refund amount pending verification.' },
        { type: 'generic_greeting', description: 'Uses generic "Dear Taxpayer" greeting instead of specific taxpayer name.' }
    ],
    unread: true
  },
  
  // ===================================
  // Expert difficulty emails - Legitimate (5 total)
  // ===================================
  {
    id: '7', // Original DocuSign Legit
    from: { name: 'DocuSign', email: 'dse@docusign.net' },
    to: 'user@example.com',
    subject: 'Please DocuSign: Project Proposal May 2025',
    body: `<div><p>Hello,</p><p>Jennifer Miller (jennifer.miller@acme.com) has sent you a document to review and sign.</p><p><strong>Project Proposal May 2025</strong></p><p>Please click <a href="https://docusign.net/sign/proposal-may2025">here</a> to review and sign the document.</p><p>Thank you for using DocuSign!</p><p>This message contains information from DocuSign, Inc. which may be confidential or privileged.</p></div>`,
    date: '2025-05-17T09:10:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'expert-legit-2', // IT System Maintenance
    from: { name: 'IT Service Desk', email: 'servicedesk@yourcompanydomain.com' },
    to: 'user@example.com',
    subject: 'Planned System Maintenance - [Action Required May Be Needed Post-Maintenance]',
    body: `<div><p>Team,</p><p>Please be advised of planned system maintenance scheduled for Saturday, June 1st, from 2:00 AM to 6:00 AM EST. During this window, access to internal systems (CRM, Fileshares) may be intermittent.</p><p>While we anticipate a smooth transition, please verify connectivity to critical applications post-maintenance. If you encounter issues, refer to the troubleshooting guide on the intranet: <a href="https://internal.yourcompanydomain.com/it/help">IT Help Portal</a> or contact the Service Desk.</p><p>Regards,<br>IT Department</p></div>`,
    date: '2025-05-31T16:00:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true // Assumes 'yourcompanydomain.com' is the user's workplace domain
  },
  {
    id: 'expert-legit-3', // Salesforce Release Update
    from: { name: 'Salesforce', email: 'system@salesforce.com' },
    to: 'user@example.com',
    subject: 'Salesforce Release Readiness & Feature Updates',
    body: `<div><p>Hi User,</p><p>Get ready for the Summer '25 release! We've prepared resources to help you and your team leverage the latest features.</p><p>Explore the release notes, watch overview videos, and register for webinars here: <a href="https://www.salesforce.com/releases/">Salesforce Releases</a></p><p>Prepare your organization for the upcoming automatic upgrade window specific to your instance.</p><p>Best regards,<br>The Salesforce Team</p></div>`,
    date: '2025-06-01T11:00:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'expert-legit-4', // Google Workspace Security Update
    from: { name: 'Google Workspace Updates', email: 'workspace-updates-noreply@google.com' },
    to: 'user@example.com',
    subject: 'New security features rolling out for Google Drive',
    body: `<div><p>Hello Google Workspace Admin,</p><p>We're enhancing security in Google Drive with new features for data loss prevention (DLP) and file sharing controls. These updates will begin rolling out to Rapid Release domains next week.</p><p>Review the upcoming changes and admin settings on the Workspace Updates blog: <a href="https://workspaceupdates.googleblog.com/">Workspace Updates</a></p><p>No immediate action is required, but familiarizing yourself with the new options is recommended.</p><p>The Google Workspace Team</p></div>`,
    date: '2025-06-02T14:30:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  {
    id: 'expert-legit-5', // American Express Agreement Change
    from: { name: 'American Express', email: 'AmericanExpress@member.americanexpress.com' },
    to: 'user@example.com',
    subject: 'Important Information About Changes to Your Cardmember Agreement',
    body: `<div><p>Dear Valued Cardmember,</p><p>We are writing to inform you about upcoming changes to your Cardmember Agreement. These changes relate to arbitration provisions and will take effect on July 15, 2025.</p><p>You can review the full notice of changes by logging into your account online and navigating to the Document Center.</p><p>Access your account: <a href="https://www.americanexpress.com">American Express</a></p><p>If you have questions, please call the number on the back of your card.</p><p>Sincerely,<br>American Express Customer Care</p></div>`,
    date: '2025-06-03T09:45:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  
  // ===================================
  // Expert difficulty emails - Phishing (5 total)
  // ===================================
  {
    id: '8', // Original DocuSign Phish
    from: { name: 'DocuSign', email: 'documents@docus1gn.net' },
    to: 'user@example.com',
    subject: 'ACTION REQUIRED: Contract Documents Pending Signature',
    body: `<div><p>Document Requiring Signature</p><p>A document has been sent to you for electronic signature through DocuSign by: Jennifer Miller (jennifer.miller@business-partners.org)</p><p><strong>PLEASE SIGN IMMEDIATELY: Payment Processing Agreement</strong></p><p>The document requires your signature before processing can be completed. Please <a href="http://docus1gn.net/sign/document/123456" data-real-url="http://docus1gn.net/sign/123456">review and sign</a> at your earliest convenience.</p><p>Note: This document will expire in 24 hours. After expiration, you will need to request a new signature document.</p><p><strong>IMPORTANT</strong>: Review all documents carefully before signing.</p><p>Thank you for using DocuSign!</p></div>`,
    date: '2025-05-17T10:45:00',
    hasAttachment: true,
    attachmentName: 'Agreement_DocuSign.pdf.exe',
    isPhishing: true,
    phishingIndicators: [
      { type: 'sender', description: 'The email domain "docus1gn.net" uses the number "1" instead of the letter "i" to mimic docusign.net' },
      { type: 'link', description: 'The signature link points to a fake DocuSign domain' },
      { type: 'attachment', description: 'The attachment has a suspicious double extension (.pdf.exe) disguising an executable as a PDF' },
      { type: 'urgency', description: 'Multiple urgency indicators: "ACTION REQUIRED", "SIGN IMMEDIATELY", "will expire in 24 hours"' },
      { type: 'domain', description: 'The sender email uses character substitution (number "1" for letter "i") to appear legitimate at first glance' }
    ],
    unread: true
  },
  {
    id: 'expert-phish-2', // IT Mandatory Security Update (Bat file)
    from: { name: 'IT Service Desk', email: 'security-updates@yourcompanydomain.com.systems' },
    to: 'user@example.com',
    subject: 'CRITICAL: Security Vulnerability Patch - Immediate Action Required',
    body: `<div><p>To:</p><p>All Employees</p><p>Our security team has identified that your workstation requires an urgent security patch to address the recently discovered CVE-2025-03892 vulnerability affecting Windows systems. This zero-day vulnerability allows remote attackers to gain access to company resources.</p><p>The Information Security team has prepared a patch that must be installed immediately on all affected systems. As per our security protocols, this patch must be applied no later than EOD today.</p><p><strong>Required Action:</strong></p><p>1. Download and run the attached patch utility (<strong>SecurityPatch_May2025.bat</strong>)<br>2. Allow the utility to complete (approximately 2-3 minutes)<br>3. Restart your computer when prompted</p><p>Technical details about this vulnerability can be found in the <a href="http://yourcompanydomain.com.systems/it/security/bulletin-052025" data-real-url="http://yourcompanydomain.com.systems/security/bulletin/05-2025">Security Bulletin</a>.</p><p>If you have any questions, please contact the IT Service Desk at extension 5500.</p><p>Thank you for your prompt attention to this critical security matter.</p><p>Information Security Team<br>IT Department</p></div>`,
    date: '2025-05-31T17:15:00',
    hasAttachment: true,
    attachmentName: 'SecurityPatch_May2025.bat',
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "yourcompanydomain.com.systems" uses a suspicious domain structure (TLD after the legitimate domain)' },
        { type: 'attachment', description: 'Requests running a potentially malicious batch script (.bat), which could contain harmful code' },
        { type: 'urgency', description: 'Creates extreme urgency with "zero-day vulnerability" and "EOD today" deadline' },
        { type: 'link', description: 'Link to "Security Bulletin" points to suspicious domain' },
        { type: 'request_sensitivity', description: 'Asks to run an executable file that could give attackers complete system access' }
    ],
    unread: true
  },
  {
    id: 'expert-phish-3', // Salesforce Suspicious Login
    from: { name: 'Salesforce Trust', email: 'security@salesforce-trust.security' },
    to: 'user@example.com',
    subject: 'Salesforce Security Alert: Unusual Login Activity Detected',
    body: `<div><p>Dear Salesforce Customer,</p><p>Salesforce Trust has detected unusual login activity on your organization's Salesforce instance. Our security monitoring systems have identified potentially unauthorized access to sensitive Salesforce data.</p><p><strong>Activity details:</strong><br>• Instance: NA139<br>• Time: June 1, 2025 09:42 UTC<br>• IP Address: 118.91.XX.XX (Guangzhou, China)<br>• Accessed: Customer data, Lead records, Opportunity data</p><p>As a precautionary measure, we've temporarily restricted access to certain API functionalities. To restore full access and secure your instance, an administrator must verify their identity and review recent activities.</p><p>Please complete the security verification process:</p><p><a href="https://salesforce-trust.security/app/verify-identity" data-real-url="https://salesforce-trust.security/verify">Salesforce Security Verification</a></p><p>If you do not recognize this activity, please complete the verification immediately, after which we recommend changing all user passwords.</p><p>Salesforce Trust & Security</p></div>`,
    date: '2025-06-01T12:30:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "salesforce-trust.security" is not an official Salesforce domain' },
        { type: 'link', description: 'Verification link points to a suspicious domain, not salesforce.com' },
        { type: 'urgency', description: 'Creates urgency by claiming unauthorized access to sensitive customer data' },
        { type: 'generic_greeting', description: 'Uses generic "Dear Salesforce Customer" instead of organization name' },
        { type: 'request_sensitivity', description: 'Asks for administrator verification, which likely involves entering credentials' }
    ],
    unread: true
  },
  {
    id: 'expert-phish-4', // Google Workspace Storage Quota (Docm file)
    from: { name: 'Google Workspace Admin', email: 'workspace-storage@google.administrator-tools.com' },
    to: 'user@example.com',
    subject: 'Critical: Google Workspace Storage Quota Exceeded (90%+)',
    body: `<div><p>Google Workspace Administrator Notice</p><p>Your organization's Google Workspace storage allocation is currently at 93% capacity. When storage reaches 100%, your organization may experience service disruptions including:</p><ul><li>Inability to receive or send emails</li><li>Document creation and editing limitations</li><li>File syncing failures across Drive</li><li>Calendar and Meet functionality issues</li></ul><p>As the designated administrator contact, please take immediate action to prevent service interruption. You have two options:</p><p>1. <a href="https://google.administrator-tools.com/workspace/billing/upgrade" data-real-url="https://google.administrator-tools.com/workspace/upgrade">Upgrade your storage plan</a><br>2. Complete the attached storage management form to request temporary quota increase (<strong>'Workspace_Storage_Request.docm'</strong>)</p><p>Note: The attached document contains automated macros to securely communicate with the Google Workspace API. Please enable macros when prompted.</p><p>Google Workspace Administration</p></div>`,
    date: '2025-06-02T15:45:00',
    hasAttachment: true,
    attachmentName: 'Workspace_Storage_Request.docm',
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "google.administrator-tools.com" is not an official Google domain' },
        { type: 'attachment', description: 'Contains a macro-enabled Word document (.docm) and explicitly asks to enable macros' },
        { type: 'link', description: 'Storage plan upgrade link points to a suspicious domain' },
        { type: 'urgency', description: 'Creates urgency by warning about imminent service disruptions' },
        { type: 'request_sensitivity', description: 'Requests enabling macros, which could execute malicious code' }
    ],
    unread: true
  },
  {
    id: 'expert-phish-5', // American Express Transaction Review
    from: { name: 'American Express Fraud Protection', email: 'security-alerts@americanexpress-secureservice.com' },
    to: 'user@example.com',
    subject: 'AMEX Security Alert: Unusual Charges Require Verification',
    body: `<div><p>Dear American Express Member,</p><p>Our fraud detection system has identified unusual spending patterns on your American Express account ending in ****4281.</p><p><strong>Recent transactions flagged for review:</strong></p><table style="border-collapse: collapse; width: 100%; margin: 10px 0; border: 1px solid #ccc;"><tr style="background-color: #f2f2f2;"><th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Date</th><th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Merchant</th><th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Amount</th></tr><tr><td style="padding: 8px; border: 1px solid #ccc;">Jun 3, 2025</td><td style="padding: 8px; border: 1px solid #ccc;">LONDON LUXURY RETAIL LTD</td><td style="padding: 8px; border: 1px solid #ccc;">$3,452.00</td></tr><tr><td style="padding: 8px; border: 1px solid #ccc;">Jun 3, 2025</td><td style="padding: 8px; border: 1px solid #ccc;">EMIRATES AIRLINES</td><td style="padding: 8px; border: 1px solid #ccc;">$4,890.75</td></tr></table><p>For your protection, we have temporarily suspended charging privileges on your card. To verify these transactions and restore your card access:</p><p><a href="https://americanexpress-secureservice.com/account/verify-charges" data-real-url="https://americanexpress-secureservice.com/verify">Verify Transactions</a></p><p>If these transactions are unauthorized, you can report them as fraudulent during the verification process.</p><p>Please complete verification within 24 hours to avoid any inconvenience when using your card.</p><p>American Express Customer Protection</p></div>`,
    date: '2025-06-03T11:00:00',
    hasAttachment: false,
    isPhishing: true,
    phishingIndicators: [
        { type: 'sender', description: 'Email domain "americanexpress-secureservice.com" is not an official American Express domain' },
        { type: 'link', description: 'Verification link points to a suspicious domain, not americanexpress.com' },
        { type: 'urgency', description: 'Creates urgency with suspended card privileges and 24-hour deadline' },
        { type: 'generic_greeting', description: 'Uses generic "Dear American Express Member" greeting' },
        { type: 'request_sensitivity', description: 'Prompts for verification of high-value transactions, likely leading to credential theft' }
    ],
    unread: true
  },
  {
    id: 'google-phish-new', 
    from: { name: 'Google', email: 'no-reply.accounts.google@wpereview.org' }, // Suspicious domain
    to: 'user@example.com',
    subject: 'Your account is in danger',
    body: `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; max-width: 600px; margin: auto;">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" style="width: 92px; height: 30px; margin-bottom: 20px;">
            <p style="margin-bottom: 15px;">Hi</p>
            <p style="margin-bottom: 15px;">Our security system detected several unexpected sign-in attempts on your account. To improve your account safety use our new official application "Google Defender".</p>
            <a href="http://google-defender-install.com/setup.exe" data-real-url="http://malware-site.xyz/googledfndr.exe" style="display: inline-block; background-color: #4285F4; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold; margin-bottom: 20px;">Install Google Defender</a>
            <div style="display: flex; align-items: center; margin-top: 20px; border-top: 1px solid #e0e0e0; padding-top: 15px;">
              <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="Gmail logo" style="width: 28px; height: 21px; margin-right: 10px;">
              <span style="font-size: 14px; color: #5f6368;">Best, The Mail Team</span>
            </div>
           </div>
           <div style="text-align: center; font-size: 12px; color: #9aa0a6; margin-top: 15px;">
             2016 Mail Corp. 1997 Amphitheatre Parkway, Mountain View, CA 92042
           </div>`,
    date: '2025-08-19T10:00:00', // Example date
    hasAttachment: false, // The threat is the link/button
    isPhishing: true,
    phishingIndicators: [
      { type: 'sender', description: 'Sender email uses a non-google domain (wpereview.org)' },
      { type: 'urgency', description: 'Claims account is in danger to prompt quick action.' },
      { type: 'link', description: 'Button links to a suspicious download URL (google-defender-install.com / malware-site.xyz). Google Defender is not a real Google app.' },
      { type: 'generic_greeting', description: 'Uses a very generic "Hi".' },
      { type: 'grammar', description: 'Minor grammatical awkwardness ("account safety use").' },
      { type: 'domain', description: 'Signature mentions "Mail Corp." and uses a Gmail logo, but the sender isn\'t google.com.' }
    ],
    unread: true
  }
];