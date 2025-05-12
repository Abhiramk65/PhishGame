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
    body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #000000; padding: 20px; text-align: center;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" style="width: 120px;">
      </div>
      <div style="padding: 30px 25px; color: #221f1f;">
        <h2 style="margin-top: 0; color: #e50914;">Your monthly subscription was processed</h2>
        <p style="font-size: 16px; line-height: 1.5;">Hi there,</p>
        <p style="font-size: 16px; line-height: 1.5;">We wanted to let you know that your monthly subscription was successfully processed. Your next billing date will be June 15, 2025.</p>
        <p style="font-size: 16px; line-height: 1.5;">If you have any questions about your account, please visit our <a href="https://help.netflix.com" style="color: #e50914; text-decoration: none; font-weight: bold;">Help Center</a>.</p>
        <p style="font-size: 16px; line-height: 1.5;">Thanks for being a valued Netflix member!</p>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 0;">The Netflix Team</p>
      </div>
      <div style="background-color: #f3f3f3; padding: 15px; text-align: center; font-size: 12px; color: #777;">
        <p style="margin: 0 0 10px;">This message was sent to user@example.com</p>
        <p style="margin: 0;">© 2025 Netflix, Inc.</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Amazon Ember', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #232f3e; padding: 20px; text-align: left;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" style="width: 100px;">
      </div>
      <div style="padding: 30px 25px; color: #111;">
        <h2 style="margin-top: 0; color: #232f3e; font-weight: 500;">Your Order Has Shipped</h2>
        <div style="background-color: #f6f6f6; border-radius: 4px; padding: 15px; margin-bottom: 20px;">
          <p style="font-size: 14px; margin: 0 0 5px;">Arriving by <strong>Tuesday, May 20, 2025</strong></p>
          <p style="font-size: 14px; margin: 0 0 5px;">Order #: <strong>111-222333-4445555</strong></p>
        </div>
        <div style="margin-bottom: 20px; border-bottom: 1px solid #e7e7e7; padding-bottom: 20px;">
          <div style="display: flex; align-items: center;">
            <div style="width: 80px; min-width: 80px;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Placeholder_image.png/600px-Placeholder_image.png" alt="Package" style="width: 100%; border-radius: 4px;">
            </div>
            <div style="padding-left: 15px;">
              <p style="font-size: 14px; font-weight: bold; margin: 0 0 5px;">Your package</p>
              <p style="font-size: 14px; color: #565959; margin: 0;">1 item shipped</p>
            </div>
          </div>
        </div>
        <p style="font-size: 14px; line-height: 1.5;">Hello,</p>
        <p style="font-size: 14px; line-height: 1.5;">Your package with order #111-222333-4445555 is on its way and will arrive by Tuesday, May 20, 2025.</p>
        <a href="https://amazon.com/gp/your-account/ship-track" style="display: inline-block; background-color: #febd69; color: #000; text-decoration: none; padding: 10px 20px; margin: 15px 0; border-radius: 4px; font-weight: bold; text-align: center;">Track Your Package</a>
        <p style="font-size: 14px; line-height: 1.5;">Thank you for shopping with Amazon!</p>
      </div>
      <div style="background-color: #fafafa; padding: 15px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e7e7e7;">
        <p style="margin: 0 0 10px;">© 2025 Amazon.com, Inc. or its affiliates. All rights reserved.</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #ffffff; padding: 20px; text-align: center; border-bottom: 1px solid #e5e5e5;">
        <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" style="width: 100px;">
      </div>
      <div style="padding: 30px 25px; color: #2c2e2f; background-color: #f5f7fa;">
        <h2 style="margin-top: 0; color: #253b80; font-weight: 300; font-size: 24px;">You've got money!</h2>
        <div style="background-color: #ffffff; border-radius: 4px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #169bd7; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <p style="font-size: 20px; margin: 0 0 10px; color: #009cde; font-weight: bold;">$50.00 USD</p>
          <p style="font-size: 14px; margin: 0 0 5px;">From: <strong>John Doe</strong></p>
          <p style="font-size: 12px; margin: 0; color: #666;">Note: Thanks for your help!</p>
        </div>
        <div style="margin-bottom: 25px; padding: 15px; background-color: #fff; border-radius: 4px; border: 1px solid #eaeaea;">
          <p style="font-size: 14px; margin: 0 0 5px; color: #666;">Transaction ID: <span style="color: #2c2e2f; font-family: monospace;">6AB789CD0EF1</span></p>
          <p style="font-size: 14px; margin: 0 0 5px; color: #666;">Date: <span style="color: #2c2e2f;">May 19, 2025</span></p>
        </div>
        <a href="https://www.paypal.com" style="display: inline-block; background-color: #009cde; color: #fff; text-decoration: none; padding: 12px 30px; margin: 15px 0; border-radius: 4px; font-weight: bold; text-align: center;">Go to PayPal</a>
        <p style="font-size: 14px; line-height: 1.5; margin-top: 25px;">Thanks,<br>PayPal</p>
      </div>
      <div style="background-color: #f5f7fa; padding: 15px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #eaeaea;">
        <p style="margin: 0 0 10px;">Please do not reply to this email. To get in touch with us, go to the PayPal website and click <strong>Help & Contact</strong>.</p>
        <p style="margin: 0;">© 2025 PayPal, Inc. All rights reserved.</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Amazon Ember', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #1a242f; padding: 20px; text-align: left;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" style="width: 120px;">
      </div>
      <div style="padding: 0; color: #111; background-color: #0f171e;">
        <div style="position: relative; overflow: hidden;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Placeholder_image.png/600px-Placeholder_image.png" alt="Action Hero Returns" style="width: 100%; display: block;">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, rgba(15,23,30,0) 0%, rgba(15,23,30,0.7) 70%, rgba(15,23,30,1) 100%);"></div>
          <div style="position: absolute; bottom: 20px; left: 20px; color: white;">
            <h2 style="margin: 0 0 10px; font-size: 24px; font-weight: 700;">Action Hero Returns</h2>
            <p style="margin: 0; font-size: 14px; color: #aaa;">New on Prime • Action, Adventure • 2h 20m</p>
          </div>
        </div>
        <div style="padding: 30px 25px; color: #fff;">
          <p style="font-size: 16px; line-height: 1.5;">Hi,</p>
          <p style="font-size: 16px; line-height: 1.5;">Check out the latest blockbuster added to Prime Video: "Action Hero Returns". When a former agent is called back into action, he must confront enemies from his past while protecting his family.</p>
          <div style="margin: 20px 0;">
            <p style="font-size: 14px; color: #aaa; margin: 0 0 5px;">Starring:</p>
            <p style="font-size: 14px; margin: 0 0 15px;">John Smith, Emma Johnson, Michael Brown</p>
            <p style="font-size: 14px; color: #aaa; margin: 0 0 5px;">Director:</p>
            <p style="font-size: 14px; margin: 0;">Robert Wilson</p>
          </div>
          <a href="https://www.primevideo.com" style="display: inline-block; background-color: #00a8e1; color: #fff; text-decoration: none; padding: 12px 40px; margin: 15px 0; border-radius: 2px; font-weight: bold; text-align: center;">Watch Now</a>
          <p style="font-size: 16px; line-height: 1.5; margin-top: 25px;">Enjoy the show!</p>
          <p style="font-size: 16px; line-height: 1.5;">The Prime Video Team</p>
        </div>
      </div>
      <div style="background-color: #1a242f; padding: 15px; text-align: center; font-size: 12px; color: #8197a4; border-top: 1px solid #31414e;">
        <p style="margin: 0 0 10px;">© 2025 Amazon.com, Inc. or its affiliates. All rights reserved.</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Google Sans', Roboto, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; color: #202124;">
      <div style="padding: 24px; text-align: center; border-bottom: 1px solid #f1f3f4;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" alt="Google" style="width: 74px;">
      </div>
      <div style="padding: 24px 40px 36px;">
        <div style="padding-bottom: 24px;">
          <h2 style="color: #202124; font-size: 16px; font-weight: 500; margin: 0 0 8px;">We detected a new sign-in to your Google Account</h2>
          <div style="font-size: 14px; color: #5f6368;">
            <p style="margin: 16px 0;">user@example.com</p>
          </div>
        </div>
        
        <div style="background-color: #f1f3f4; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <div style="display: flex; align-items: center;">
            <div style="margin-right: 16px;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/88px-Windows_logo_-_2012.svg.png" alt="Windows" style="width: 40px; height: 40px;">
            </div>
            <div>
              <p style="margin: 0 0 4px; font-weight: 500; font-size: 14px;">Windows Device</p>
              <p style="margin: 0; font-size: 12px; color: #5f6368;">May 21, 2025, 9:45 AM (UTC)</p>
              <p style="margin: 4px 0 0; font-size: 12px; color: #5f6368;">IP Address: 192.0.XXX.XXX</p>
            </div>
          </div>
        </div>

        <p style="font-size: 14px; line-height: 1.5; color: #202124; margin-bottom: 24px;">If this was you, you don't need to do anything. If not, we'll help you secure your account.</p>
        
        <div style="margin-bottom: 32px; text-align: center;">
          <a href="https://myaccount.google.com/" style="display: inline-block; text-decoration: none; color: #fff; background-color: #1a73e8; border-radius: 4px; padding: 10px 24px; font-weight: 500; font-size: 14px;">Check activity</a>
        </div>
        
        <div style="border-top: 1px solid #f1f3f4; padding-top: 16px; font-size: 12px; color: #5f6368;">
          <p>You received this email to let you know about important changes to your Google Account and services.</p>
          <p style="margin-bottom: 0;">© 2025 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</p>
        </div>
      </div>
    </div>`,
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
            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal Logo" style="width: 55px; height: 34px; margin-bottom: 20px;">
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
<<<<<<< HEAD
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg" alt="Bank of America Logo" style="width: 150px; margin-bottom: 25px;">
=======
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bank_of_America_logo.svg/2560px-Bank_of_America_logo.svg.png" alt="Bank of America Logo" style="width: 150px; margin-bottom: 25px;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
            <h3 style="color: #D81E05; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Account Security Notice</h3>
            <p style="color: #333; margin-bottom: 15px;">Dear valued customer,</p>
            <p style="color: #333; margin-bottom: 15px;">As part of our continuous security measures, we have detected unusual activity associated with your Bank of America account.</p>
            <p style="color: #333; margin-bottom: 25px;">For your protection, we need you to verify your account information by 
              <a href="https://secure-bankofamerica.com/verify" data-real-url="https://secure-bankofamerica.com/verify" style="display: inline-block; background-color: #D81E05; color: white; padding: 11px 22px; text-decoration: none; border-radius: 4px; font-weight: bold;">clicking here</a> and confirming your identity.
            </p>
            <p style="color: #333; margin-bottom: 15px;">This verification process is mandatory. Failure to complete this verification within 24 hours will result in your account being temporarily suspended.</p>
<<<<<<< HEAD
            <p style="font-size: 12px; color: #555;">If you need assistance, please call our customer service at 1-800-XXX-XXXX</p>
=======
            <p style="font-size: 12px; color: #555;">If you need assistance, please call our customer service at 1-800-XXX-XXXX (Do not call this number - it is fake).</p>
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
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
    body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
<<<<<<< HEAD
      <div style="background-color:rgb(255, 255, 255); padding: 20px; text-align: left;">
=======
      <div style="background-color: #e31836; padding: 20px; text-align: left;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg" alt="Bank of America" style="width: 200px;">
      </div>
      <div style="padding: 30px 25px; color: #333;">
        <h2 style="margin-top: 0; font-size: 20px; color: #333; font-weight: 500;">Your statement is ready to view</h2>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Hello,</p>
        
<<<<<<< HEAD
        <div style="background-color: #f8f8f8; border-left: 4px solidrgb(255, 255, 255); padding: 15px; margin-bottom: 25px;">
=======
        <div style="background-color: #f8f8f8; border-left: 4px solid #e31836; padding: 15px; margin-bottom: 25px;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
          <p style="margin: 0 0 10px; font-weight: bold;">Statement information:</p>
          <p style="margin: 0 0 5px;">Account: ••••••••<span style="font-weight: 600;">4567</span></p>
          <p style="margin: 0 0 5px;">Statement period: April 15 - May 15, 2025</p>
          <p style="margin: 0;">Available: <a href="https://www.bankofamerica.com" style="color: #0052C2; text-decoration: none; font-weight: bold;">May 16, 2025</a></p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Your Bank of America statement for ending May 15, 2025 is now available online. Please log in to your account to view your statement.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.bankofamerica.com" style="display: inline-block; background-color: #0052C2; color: white; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-weight: bold; font-size: 16px;">View Your Statement</a>
        </div>
        
        <div style="border-top: 1px solid #e5e5e5; margin-top: 30px; padding-top: 20px;">
          <p style="font-size: 14px; color: #666; margin-bottom: 15px;">For your security, please don't reply to this email. This mailbox isn't monitored.</p>
          <p style="font-size: 14px; color: #666; margin-bottom: 0;">Thank you for banking with Bank of America.</p>
        </div>
      </div>
      <div style="background-color: #f3f3f3; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">Please do not reply to this email. This mailbox is not monitored and you will not receive a response.</p>
        <p style="margin: 0 0 10px;">Bank of America, N.A. Member FDIC. Equal Housing Lender</p>
        <p style="margin: 0;">© 2025 Bank of America Corporation. All rights reserved.</p>
      </div>
    </div>`,
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
<<<<<<< HEAD
    body: `<div style="font-family: 'Amazon Ember', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 6px; overflow: hidden; background: #fff;">
      <div style="background-color: #232f3e; padding: 24px 0 16px 0; text-align: center; border-bottom: 1px solid #e5e5e5;">
        <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" alt="AWS" style="width: 120px;">
      </div>
      <div style="padding: 32px 28px 24px 28px; color: #232f3e;">
        <h2 style="margin-top: 0; color: #ff9900; font-size: 22px; font-weight: 700;">Announcing Amazon Neptune Global Database</h2>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 18px; color: #232f3e;">Dear AWS Customer,</p>
        <p style="font-size: 16px; line-height: 1.6; color: #232f3e; margin-bottom: 18px;">We're excited to announce <b>Amazon Neptune Global Database</b>, allowing you to build graph applications across multiple AWS Regions with high availability and low latency.</p>
        <ul style="font-size: 15px; color: #232f3e; margin-bottom: 18px; padding-left: 20px;">
          <li>Multi-region, fully managed graph database</li>
          <li>Automated failover and disaster recovery</li>
          <li>Low-latency global reads</li>
          <li>Seamless scaling for enterprise workloads</li>
        </ul>
        <p style="font-size: 16px; color: #232f3e; margin-bottom: 18px;">Learn more about the benefits and use cases on our blog:</p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="https://aws.amazon.com/blogs/database/" style="display: inline-block; background-color: #ff9900; color: #232f3e; text-decoration: none; padding: 12px 32px; border-radius: 4px; font-weight: bold; font-size: 16px;">AWS Database Blog</a>
        </div>
        <p style="font-size: 16px; color: #232f3e; margin-bottom: 0;">Sincerely,<br>The Amazon Web Services Team</p>
      </div>
      <div style="background-color: #f3f3f3; padding: 18px; text-align: center; font-size: 12px; color: #767676; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 8px;">This message was sent to user@example.com</p>
        <p style="margin: 0;">© 2025 Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
      </div>
    </div>`,
=======
    body: `<div><p>Dear AWS Customer,</p><p>We're excited to announce Amazon Neptune Global Database, allowing you to build graph applications across multiple AWS Regions.</p><p>Learn more about the benefits and use cases on our blog: <a href="https://aws.amazon.com/blogs/database/">AWS Database Blog</a></p><p>Sincerely,<br>The Amazon Web Services Team</p></div>`,
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
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
    body: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #0a66c2; padding: 20px; text-align: center;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/200px-LinkedIn_Logo.svg.png" alt="LinkedIn" style="width: 100px;">
      </div>
      <div style="padding: 30px 25px; color: #000000;">
        <h2 style="margin-top: 0; font-size: 18px; color: rgba(0,0,0,0.9); font-weight: 600;">You have a new message</h2>
        
        <div style="margin: 25px 0; display: flex; align-items: center;">
          <div style="margin-right: 15px;">
            <div style="width: 72px; height: 72px; background-color: #f5f5f5; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center;">
              <div style="font-size: 24px; font-weight: bold; color: #0a66c2;">SC</div>
            </div>
          </div>
          <div>
            <p style="margin: 0; font-weight: 600; font-size: 16px;">Sarah Chen</p>
            <p style="margin: 4px 0 0; font-size: 14px; color: rgba(0,0,0,0.6);">Project Manager at Acme Corporation</p>
          </div>
        </div>
        
        <div style="background-color: #f9fafb; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
          <p style="font-size: 14px; line-height: 1.5; margin: 0; color: rgba(0,0,0,0.9);">Hi there! I wanted to follow up about the Project Manager position we discussed last week. Do you have time for a call tomorrow to discuss next steps?</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0 20px;">
          <a href="https://www.linkedin.com/messaging/" style="display: inline-block; background-color: #0a66c2; color: white; text-decoration: none; padding: 10px 24px; border-radius: 24px; font-weight: 600; font-size: 16px;">Reply to Sarah</a>
        </div>
        
        <p style="font-size: 14px; line-height: 1.5; margin-top: 30px; color: rgba(0,0,0,0.6); border-top: 1px solid #e0e0e0; padding-top: 20px;">You can respond to this message by replying directly to this email or by visiting LinkedIn.</p>
        
      </div>
      <div style="background-color: #f3f6f8; padding: 20px; text-align: center; font-size: 12px; color: rgba(0,0,0,0.6); border-top: 1px solid #e0e0e0;">
        <p style="margin: 0 0 10px;">This email was sent to user@example.com.</p>
        <p style="margin: 0 0 10px;">© 2025 LinkedIn Corporation, 1000 West Maude Avenue, Sunnyvale, CA 94085. LinkedIn and the LinkedIn logo are registered trademarks of LinkedIn.</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Open Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #ffffff; padding: 20px; text-align: center; border-bottom: 1px solid #e5e5e5;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/120px-Dropbox_Icon.svg.png" alt="Dropbox" style="width: 42px;">
      </div>
      <div style="padding: 30px 25px; color: #1E1919;">
        <h2 style="margin-top: 0; font-size: 22px; font-weight: 600; color: #1E1919;">Your Dropbox is almost full</h2>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Hi there,</p>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Your Dropbox account (user@example.com) is currently at 95% capacity.</p>
        
        <div style="margin: 30px 0;">
          <div style="position: relative; height: 20px; background-color: #f7f9fa; border-radius: 10px; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; height: 100%; width: 95%; background-color: #0061ff; border-radius: 10px;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 14px;">
            <span>1.9 GB used</span>
            <span>2 GB total</span>
          </div>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 30px;">To avoid interruptions, consider upgrading your plan or freeing up space by removing files you no longer need.</p>
        
        <div style="display: flex; gap: 20px; margin-bottom: 30px;">
          <div style="flex: 1; border: 1px solid #e5e5e5; border-radius: 8px; padding: 15px; text-align: center;">
            <h3 style="margin-top: 0; font-size: 16px; font-weight: 600; color: #1E1919;">Upgrade</h3>
            <p style="font-size: 14px; color: #637282; margin-bottom: 15px;">Get more space and additional features</p>
            <a href="https://www.dropbox.com/account/plan" style="display: inline-block; background-color: #0061ff; color: white; text-decoration: none; padding: 8px 16px; border-radius: 4px; font-weight: 600; font-size: 14px;">View Plans</a>
          </div>
          <div style="flex: 1; border: 1px solid #e5e5e5; border-radius: 8px; padding: 15px; text-align: center;">
            <h3 style="margin-top: 0; font-size: 16px; font-weight: 600; color: #1E1919;">Free up space</h3>
            <p style="font-size: 14px; color: #637282; margin-bottom: 15px;">Review and delete unused files</p>
            <a href="https://www.dropbox.com/account" style="display: inline-block; background-color: #ffffff; color: #0061ff; text-decoration: none; padding: 8px 16px; border-radius: 4px; border: 1px solid #0061ff; font-weight: 600; font-size: 14px;">Go to Dropbox</a>
          </div>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 0;">Thanks,<br>The Dropbox Team</p>
        
      </div>
      <div style="background-color: #f7f9fa; padding: 20px; text-align: center; font-size: 12px; color: #637282; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">Dropbox, Inc., 1800 Owens St. San Francisco, CA 94158</p>
        <p style="margin: 0;">© 2025 Dropbox</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #ffffff; padding: 20px; text-align: left; border-bottom: 2px solid #0078d4;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" style="width: 120px;">
      </div>
      <div style="padding: 30px 25px; color: #333333;">
        <h2 style="margin-top: 0; font-size: 24px; font-weight: 600; color: #000000;">Microsoft account password was changed</h2>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Hi User,</p>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">The password for your Microsoft account <span style="font-weight: 600;">us***@example.com</span> was changed on 5/26/2025 11:15 AM (UTC).</p>
        
        <div style="background-color: #f2f2f2; border-left: 4px solid #0078d4; padding: 15px; margin: 25px 0;">
          <p style="margin: 0; font-weight: bold; color: #000000; font-size: 16px;">Account activity timeline:</p>
          <div style="display: flex; margin-top: 15px; align-items: flex-start;">
            <div style="min-width: 20px; height: 20px; background-color: #0078d4; border-radius: 50%; margin-right: 10px; margin-top: 2px;"></div>
            <div>
              <p style="margin: 0 0 5px; font-weight: 600;">Password change</p>
              <p style="margin: 0; font-size: 14px; color: #666;">May 26, 2025, 11:15 AM (UTC)</p>
              <p style="margin: 5px 0 0; font-size: 14px; color: #666;">IP address: 104.XXX.XXX.XXX</p>
            </div>
          </div>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">If this was you, then you can safely ignore this email.</p>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px; font-weight: 600; color: #d83b01;">If this wasn't you, your account has been compromised.</p>
        
        <div style="background-color: #d1e8ff; padding: 15px; margin: 25px 0; border-radius: 4px;">
          <p style="margin: 0 0 10px; font-weight: 600; color: #000000;">If your account is compromised:</p>
          <ol style="margin: 0; padding-left: 25px;">
            <li style="margin-bottom: 10px;">Reset your password immediately.</li>
            <li style="margin-bottom: 0;">Review your security info.</li>
          </ol>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://account.microsoft.com/" style="display: inline-block; background-color: #0078d4; color: white; text-decoration: none; padding: 12px 30px; border-radius: 2px; font-weight: 600; font-size: 16px;">Review recent activity</a>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-top: 30px;">Thanks,<br>The Microsoft account team</p>
        
      </div>
      <div style="background-color: #f2f2f2; padding: 20px; text-align: left; font-size: 12px; color: #666; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">Microsoft respects your privacy. To learn more, please read our <a href="https://privacy.microsoft.com/privacystatement" style="color: #0067b8; text-decoration: none;">Privacy Statement</a>.</p>
        <p style="margin: 0;">Microsoft Corporation, One Microsoft Way, Redmond, WA 98052 USA</p>
      </div>
    </div>`,
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg" alt="Bank of America Logo" style="width: 150px; margin-bottom: 25px;">
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
    body: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1d1d1f;">
      <div style="padding: 20px 0 10px; text-align: center;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/320px-Apple_logo_black.svg.png" alt="Apple" style="width: 40px;">
      </div>
      <div style="padding: 20px 40px 40px; background-color: #ffffff;">
        <h1 style="margin-top: 30px; margin-bottom: 24px; font-size: 22px; font-weight: 600; text-align: center; color: #1d1d1f;">New sign-in to iCloud</h1>
        
        <p style="margin-bottom: 24px; font-size: 16px; line-height: 1.5; color: #1d1d1f;">Dear Customer,</p>
        
        <p style="margin-bottom: 16px; font-size: 16px; line-height: 1.5; color: #1d1d1f;">Your Apple ID (user@example.com) was used to sign in to iCloud via a web browser.</p>
        
        <div style="background-color: #f5f5f7; border-radius: 10px; padding: 16px 20px; margin: 25px 0;">
          <table style="width: 100%; font-size: 14px; color: #1d1d1f;">
            <tr>
              <td style="padding: 8px 0; vertical-align: top; width: 130px;"><strong>Date and Time:</strong></td>
              <td style="padding: 8px 0;">May 16, 2025 at 2:30 PM</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; vertical-align: top;"><strong>Location:</strong></td>
              <td style="padding: 8px 0;">Near New York, United States</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; vertical-align: top;"><strong>Device:</strong></td>
              <td style="padding: 8px 0;">Safari on Mac</td>
            </tr>
          </table>
        </div>
        
        <p style="margin-bottom: 16px; font-size: 16px; line-height: 1.5; color: #1d1d1f;">If you recently signed in to your account, you can disregard this email.</p>
        
        <p style="margin-bottom: 30px; font-size: 16px; line-height: 1.5; color: #1d1d1f;">If you did not sign in and believe someone may have accessed your account, you should change your password immediately.</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://appleid.apple.com" style="display: inline-block; background-color: #0071e3; color: white; text-decoration: none; padding: 12px 30px; border-radius: 18px; font-weight: 400; font-size: 16px;">Change Password</a>
        </div>
        
        <div style="border-top: 1px solid #e5e5e5; margin-top: 40px; padding-top: 20px; font-size: 14px; color: #86868b;">
          <p style="margin-bottom: 16px; line-height: 1.5;">If you need additional help with your Apple ID, visit <a href="https://support.apple.com/apple-id" style="color: #0066cc; text-decoration: none;">Apple ID Support</a>.</p>
          <p style="margin-bottom: 0; line-height: 1.5;">Apple Support</p>
        </div>
      </div>
      <div style="text-align: center; padding: 20px; font-size: 12px; color: #86868b;">
        <p style="margin-bottom: 16px;">This is an automatically generated email—please do not reply to this message. For more information, visit <a href="https://support.apple.com" style="color: #0066cc; text-decoration: none;">Apple Support</a>.</p>
        <p style="margin-bottom: 16px;">Privacy Policy | <a href="https://www.apple.com/legal/terms/site.html" style="color: #0066cc; text-decoration: none;">Terms of Use</a></p>
        <p style="margin-bottom: 0;">Copyright © 2025 Apple Inc. One Apple Park Way, Cupertino, CA 95014, United States. All rights reserved.</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #0f287f; padding: 25px; text-align: left;">
<<<<<<< HEAD
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Chase-logo.png" alt="Chase" style="width: 140px;">
=======
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chase_logo_2007.svg/320px-Chase_logo_2007.svg.png" alt="Chase" style="width: 140px;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
      </div>
      <div style="padding: 30px 25px; color: #333333;">
        <h2 style="margin-top: 0; font-size: 20px; color: #0f287f; font-weight: 600;">Policy Updates for Your Chase Account</h2>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Dear Customer,</p>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">We've updated our Privacy Policy and User Agreement. These changes will take effect on <strong>June 15, 2025</strong>.</p>
        
        <div style="background-color: #f4f8fb; border-left: 4px solid #0f287f; padding: 20px; margin-bottom: 25px; border-radius: 2px;">
          <h3 style="margin-top: 0; font-size: 16px; color: #0f287f; font-weight: 600;">Summary of Updates</h3>
          <ul style="padding-left: 20px; margin: 15px 0 0;">
            <li style="margin-bottom: 10px; font-size: 14px;">Enhanced information on how we collect and use data to protect against fraud</li>
            <li style="margin-bottom: 10px; font-size: 14px;">Updated terms for digital banking features</li>
            <li style="margin-bottom: 0; font-size: 14px;">Revised dispute resolution process</li>
          </ul>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">You can review the updated documents by logging into your account. No immediate action is required from you at this time.</p>
        
        <div style="text-align: center; margin: 30px 0 20px;">
          <a href="https://www.chase.com" style="display: inline-block; background-color: #0f287f; color: white; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-weight: 600; font-size: 16px;">Log In to Your Account</a>
        </div>
        
        <div style="border-top: 1px solid #e5e5e5; margin-top: 30px; padding-top: 20px; font-size: 14px; color: #666666;">
          <p style="margin-bottom: 15px; line-height: 1.5;">If you have any questions about these changes, please contact Chase Customer Service at the number on the back of your card or visit your local Chase branch.</p>
          <p style="line-height: 1.5; margin-bottom: 0;">Thank you for banking with Chase.</p>
        </div>
      </div>
      <div style="background-color: #f2f2f2; padding: 20px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">Please do not reply to this email. This mailbox is not monitored and you will not receive a response.</p>
        <p style="margin: 0 0 10px;">For security reasons, we recommend that you log in directly by typing chase.com in your browser.</p>
        <p style="margin: 0;">© 2025 JPMorgan Chase & Co.</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #0072c6; padding: 20px; text-align: left;">
        <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 500;">YOUR COMPANY</h1>
      </div>
      <div style="padding: 30px 25px; color: #333333;">
        <h2 style="margin-top: 0; font-size: 20px; color: #0072c6; font-weight: 600;">Annual Compliance Training Reminder</h2>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Hello Team,</p>
        
        <div style="background-color: #fff4e5; border-left: 4px solid #ff9800; padding: 15px; margin-bottom: 25px;">
          <p style="margin: 0 0 5px; font-weight: 600; font-size: 16px;">⚠️ Deadline Approaching</p>
          <p style="margin: 0; font-size: 14px;">The mandatory annual compliance training deadline is <strong>May 31, 2025</strong> (9 days remaining).</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">This is a reminder that all employees must complete the assigned training modules by the deadline. Failure to complete the training may result in disciplinary action as outlined in our company policies.</p>
        
        <div style="background-color: #f5f5f5; border: 1px solid #e0e0e0; border-radius: 4px; padding: 20px; margin-bottom: 25px;">
          <h3 style="margin-top: 0; font-size: 16px; color: #333333; font-weight: 600;">Required Training Modules:</h3>
          <ul style="padding-left: 20px; margin: 15px 0 20px;">
            <li style="margin-bottom: 10px; font-size: 14px;">Data Privacy and Security (30 minutes)</li>
            <li style="margin-bottom: 10px; font-size: 14px;">Code of Business Conduct (45 minutes)</li>
            <li style="margin-bottom: 10px; font-size: 14px;">Workplace Harassment Prevention (25 minutes)</li>
            <li style="margin-bottom: 0; font-size: 14px;">Ethics and Compliance Overview (20 minutes)</li>
          </ul>
          
          <div style="display: flex; align-items: center; background-color: #e8f4fd; padding: 12px; border-radius: 4px;">
            <div style="margin-right: 15px; min-width: 40px; text-align: center;">
              <span style="display: inline-block; width: 32px; height: 32px; border-radius: 50%; background-color: #0072c6; color: white; line-height: 32px; font-size: 16px; font-weight: bold;">i</span>
            </div>
            <div style="font-size: 14px;">Your current completion status: <strong>1 of 4 modules completed</strong></div>
          </div>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Please log in to the company training portal to complete your assigned modules. Most employees can complete all required training in under 2 hours.</p>
        
        <div style="text-align: center; margin: 30px 0 20px;">
          <a href="https://internal.yourcompanydomain.com/training" style="display: inline-block; background-color: #0072c6; color: white; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-weight: 600; font-size: 16px;">Access Training Portal</a>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 0;">If you have any questions or technical issues with the training portal, please contact the HR department at <a href="mailto:hrhelp@yourcompanydomain.com" style="color: #0072c6; text-decoration: none;">hrhelp@yourcompanydomain.com</a>.</p>
      </div>
      <div style="background-color: #f2f2f2; padding: 20px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">Thank you for your commitment to maintaining our company's culture of compliance and integrity.</p>
        <p style="margin: 0;">Human Resources Department | Your Company | This is an internal communication</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e4e8; border-radius: 6px; overflow: hidden;">
      <div style="background-color: #24292e; padding: 24px; text-align: center;">
        <img src="https://github.githubassets.com/images/email/global/octocat-logo.png" alt="GitHub" style="width: 32px;">
      </div>
      <div style="padding: 24px; background-color: #ffffff; color: #24292e;">
        <h1 style="margin-top: 0; margin-bottom: 16px; font-size: 20px; font-weight: 600; color: #24292e;">A new SSH key was added to your account</h1>
        
        <p style="margin-bottom: 16px; font-size: 16px; line-height: 1.5;">Hey @User,</p>
        
        <p style="margin-bottom: 16px; font-size: 16px; line-height: 1.5;">A new SSH key was added to your GitHub account:</p>
        
        <div style="background-color: #f6f8fa; border: 1px solid #e1e4e8; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
          <p style="margin: 0 0 12px; font-size: 14px; line-height: 1.5;"><strong>MacBook Pro</strong></p>
          <p style="margin: 0; font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; font-size: 12px; overflow-wrap: break-word; line-height: 1.5; color: #444d56;">SHA256:abcdef123456789abcdef123456789abcdef123456789abc</p>
        </div>
        
        <div style="background-color: #fffbdd; border: 1px solid #eed888; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
          <h3 style="margin-top: 0; margin-bottom: 8px; font-size: 14px; font-weight: 600; line-height: 1.5;">Details</h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.5;">
            <li><strong>Key:</strong> SHA256:abcdef123456...</li>
            <li><strong>Added by:</strong> User (that's you)</li>
            <li><strong>Added from:</strong> 198.51.100.1 (Example City, Country)</li>
            <li><strong>Added at:</strong> May 29, 2025 at 3:00 PM UTC</li>
          </ul>
        </div>
        
        <p style="margin-bottom: 24px; font-size: 16px; line-height: 1.5;">If you did not add this key, you should <a href="https://github.com/settings/keys" style="color: #0366d6; text-decoration: none;">remove it immediately</a> and change your GitHub account password.</p>
        
        <div style="text-align: center; margin: 32px 0;">
          <a href="https://github.com/settings/keys" style="display: inline-block; background-color: #2ea44f; color: white; text-decoration: none; padding: 10px 24px; border-radius: 6px; font-weight: 600; font-size: 14px;">View your SSH keys</a>
        </div>
        
        <p style="font-size: 14px; color: #6a737d; margin-top: 32px; margin-bottom: 0; border-top: 1px solid #e1e4e8; padding-top: 16px;">GitHub takes the security of your account seriously. Whenever a new SSH key is added to your account, we'll send an email like this one to ensure that you are aware of the changes to your account. <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github" style="color: #0366d6; text-decoration: none;">Learn more about account security</a>.</p>
      </div>
      <div style="background-color: #f6f8fa; padding: 24px; text-align: center; font-size: 12px; color: #6a737d; border-top: 1px solid #e1e4e8;">
        <img src="https://github.githubassets.com/images/email/icons/github-mark.png" alt="GitHub" style="width: 24px; opacity: 0.3; margin-bottom: 8px;">
        <p style="margin: 0 0 8px;">GitHub, Inc. • 88 Colin P Kelly Jr Street • San Francisco, CA 94107 • USA</p>
        <p style="margin: 0 0 8px;">Questions? Please contact <a href="https://support.github.com" style="color: #0366d6; text-decoration: none;">GitHub Support</a></p>
      </div>
    </div>`,
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
    body: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #003865; padding: 25px; text-align: left;">
        <table style="width: 100%;" cellpadding="0" cellspacing="0">
          <tr>
            <td style="vertical-align: middle; width: 50px;">
<<<<<<< HEAD
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="IRS Logo" style="width: 50px; height: 50px; display: block;">
=======
              <img src="https://www.irs.gov/themes/custom/equity/logo.svg" alt="IRS Logo" style="width: 50px; height: 50px; display: block;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
            </td>
            <td style="vertical-align: middle; padding-left: 15px;">
              <h1 style="color: white; margin: 0; font-size: 18px; font-weight: 500;">Internal Revenue Service</h1>
              <p style="color: white; margin: 5px 0 0; font-size: 14px; font-weight: normal;">Department of the Treasury</p>
            </td>
          </tr>
        </table>
      </div>
      <div style="padding: 30px 25px; color: #333333;">
        <h2 style="margin-top: 0; font-size: 20px; color: #003865; font-weight: 600;">Tax Refund Status Information</h2>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Dear Taxpayer,</p>
        
        <div style="background-color: #f0f7fc; border-left: 4px solid #003865; padding: 15px; margin-bottom: 25px;">
          <p style="margin: 0; font-size: 15px; line-height: 1.5;">The IRS reminds you that you can check the status of your federal income tax refund using the <strong>Where's My Refund?</strong> tool on IRS.gov. This tool is updated once every 24 hours.</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">To check your refund status, you will need to provide:</p>
        
        <ul style="padding-left: 20px; margin-bottom: 25px;">
          <li style="margin-bottom: 10px; font-size: 16px; line-height: 1.5;">Your Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN)</li>
          <li style="margin-bottom: 10px; font-size: 16px; line-height: 1.5;">Your filing status (e.g., Single, Married Filing Jointly, etc.)</li>
          <li style="margin-bottom: 0; font-size: 16px; line-height: 1.5;">The exact whole dollar amount of your expected refund</li>
        </ul>
        
        <div style="text-align: center; margin: 30px 0 25px;">
          <a href="https://www.irs.gov/refunds" style="display: inline-block; background-color: #003865; color: white; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-weight: 600; font-size: 16px;">Where's My Refund?</a>
        </div>
        
        <div style="background-color: #fff1f0; border: 1px solid #ffccc7; border-radius: 4px; padding: 20px; margin-bottom: 25px;">
          <h3 style="margin-top: 0; font-size: 16px; color: #cf1322; font-weight: 600;">Important Security Notice</h3>
          <p style="margin: 0; font-size: 14px; line-height: 1.5;">The IRS will <strong>never</strong> initiate contact with taxpayers by email, text messages, or social media channels to request personal or financial information. Any communication claiming to be from the IRS that asks for immediate payment or personal information should be treated with caution.</p>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 0;">If you suspect fraudulent activity or have further questions about your refund status, please visit <a href="https://www.irs.gov/help/contact-your-local-irs-office" style="color: #003865; text-decoration: none;">Contact Your Local IRS Office</a> or call 800-829-1040.</p>
      </div>
      <div style="background-color: #f6f6f6; padding: 20px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">This is an official email from the Internal Revenue Service (IRS).</p>
        <p style="margin: 0 0 10px;">For tax help, visit <a href="https://www.irs.gov" style="color: #003865; text-decoration: none;">www.irs.gov</a></p>
        <p style="margin: 0;">Internal Revenue Service • 1111 Constitution Ave. NW • Washington, DC 20224</p>
      </div>
    </div>`,
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
<<<<<<< HEAD
            <img src="https://1000logos.net/wp-content/uploads/2021/05/Chase-logo.png" alt="Chase Logo" style="width: 100px; margin-bottom: 25px;">
=======
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Chase_logo_2007.svg" alt="Chase Logo" style="width: 100px; margin-bottom: 25px;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
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
<<<<<<< HEAD
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="IRS Logo" style="width: 50px; height: 50px; margin-bottom: 20px;">
=======
            <img src="https://www.irs.gov/themes/custom/equity/logo.svg" alt="IRS Logo" style="width: 50px; height: 50px; margin-bottom: 20px;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
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
    body: `<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #ffffff; padding: 20px; text-align: center; border-bottom: 1px solid #e5e5e5;">
<<<<<<< HEAD
        <img src="https://cdn.worldvectorlogo.com/logos/docusign-1.svg" alt="DocuSign" style="width: 180px;">
=======
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/DocuSign_official_logo.svg/320px-DocuSign_official_logo.svg.png" alt="DocuSign" style="width: 180px;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
      </div>
      <div style="padding: 30px 25px; color: #333333;">
        <div style="text-align: center; margin-bottom: 25px;">
          <h2 style="margin: 0 0 15px; font-size: 20px; color: #333333; font-weight: 600;">Please review and sign</h2>
          <p style="font-size: 16px; color: #666666; margin: 0;">Jennifer Miller (jennifer.miller@acme.com) has sent you a document to review and sign.</p>
        </div>
        
        <div style="background-color: #f8f8f8; border: 1px solid #e5e5e5; border-radius: 4px; padding: 20px; margin-bottom: 25px;">
          <p style="margin: 0 0 10px; font-weight: 600; font-size: 16px; color: #333333;">Project Proposal May 2025</p>
          <div style="display: flex; align-items: center; margin-bottom: 15px;">
            <div style="margin-right: 15px;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/64px-PDF_file_icon.svg.png" alt="PDF" style="width: 40px; height: 40px;">
            </div>
            <div>
              <p style="margin: 0 0 3px; font-size: 14px; color: #666666;">10 pages</p>
              <p style="margin: 0; font-size: 14px; color: #666666;">Expires: Jun 17, 2025</p>
            </div>
          </div>
          
          <div style="text-align: center;">
            <a href="https://docusign.net/sign/proposal-may2025" style="display: inline-block; background-color: #00b7c3; color: white; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-weight: 600; font-size: 16px;">REVIEW DOCUMENT</a>
          </div>
        </div>
        
        <div style="border-top: 1px solid #e5e5e5; padding-top: 20px; font-size: 14px; color: #666666;">
          <p style="margin-bottom: 15px;">If you believe this email was sent to you in error, please contact the sender.</p>
          <p style="margin: 0;">Thank you for using DocuSign!</p>
        </div>
      </div>
      <div style="background-color: #f8f8f8; padding: 20px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">This message contains information from DocuSign, Inc. which may be confidential or privileged.</p>
        <p style="margin: 0 0 10px;">If you are not the intended recipient, please advise the sender immediately and delete this message.</p>
        <p style="margin: 0;">© DocuSign Inc. | 221 Main St. | Suite 1500 | San Francisco, CA 94105 | USA</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #0046ad; padding: 25px; text-align: left;">
        <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 500;">IT SERVICE NOTIFICATION</h1>
      </div>
      <div style="padding: 30px 25px; color: #333333;">
        <h2 style="margin-top: 0; font-size: 18px; color: #0046ad; font-weight: 600;">Planned System Maintenance</h2>
        <p style="font-size: 15px; line-height: 1.5; margin-bottom: 20px;">Team,</p>
        
        <div style="background-color: #fffde7; border-left: 4px solid #fbc02d; padding: 15px; margin-bottom: 25px;">
          <p style="margin: 0 0 5px; font-weight: 600; font-size: 15px;">⚠️ Important Notice</p>
          <p style="margin: 0; font-size: 14;">During the maintenance window, access to internal systems may be intermittent.</p>
        </div>
        
        <div style="background-color: #f8f8f8; border: 1px solid #e0e0e0; border-radius: 4px; padding: 20px; margin-bottom: 25px;">
          <p style="margin: 0 0 15px; font-weight: 600; font-size: 15px;">Maintenance Details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
            <tr>
              <td style="padding: 8px 5px; border-bottom: 1px solid #e0e0e0; width: 120px; font-weight: 600; color: #555;">Date:</td>
              <td style="padding: 8px 5px; border-bottom: 1px solid #e0e0e0;">Saturday, June 1st, 2025</td>
            </tr>
            <tr>
              <td style="padding: 8px 5px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #555;">Time:</td>
              <td style="padding: 8px 5px; border-bottom: 1px solid #e0e0e0;">2:00 AM - 6:00 AM EST</td>
            </tr>
            <tr>
              <td style="padding: 8px 5px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #555;">Impact:</td>
              <td style="padding: 8px 5px; border-bottom: 1px solid #e0e0e0;">CRM, File Shares, Internal Applications</td>
            </tr>
          </table>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 0 0 10px; font-weight: 600; font-size: 14px;">Maintenance Timeline:</p>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0046ad; margin-right: 10px;"></div>
              <div style="font-size: 13px;">2:00 AM - Systems taken offline</div>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0046ad; margin-right: 10px;"></div>
              <div style="font-size: 13px;">2:15 AM - Database updates applied</div>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0046ad; margin-right: 10px;"></div>
              <div style="font-size: 13px;">4:30 AM - System testing begins</div>
            </div>
            <div style="display: flex; align-items: center;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0046ad; margin-right: 10px;"></div>
              <div style="font-size: 13px;">6:00 AM - Systems fully operational</div>
            </div>
          </div>
        </div>
        
        <p style="font-size: 15px; line-height: 1.5; margin-bottom: 20px;">While we anticipate a smooth transition, please verify connectivity to critical applications post-maintenance. If you encounter issues, refer to the troubleshooting guide on the intranet or contact the Service Desk.</p>
        
        <div style="text-align: center; margin: 30px 0 20px;">
          <a href="https://internal.yourcompanydomain.com/it/help" style="display: inline-block; background-color: #0046ad; color: white; text-decoration: none; padding: 10px 24px; border-radius: 4px; font-weight: 600; font-size: 15px;">IT Help Portal</a>
        </div>
        
        <p style="font-size: 15px; line-height: 1.5; margin-top: 30px;">Regards,<br>IT Department</p>
        
      </div>
      <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0;">
        <p style="margin: 0 0 10px;">For urgent assistance during the maintenance window, contact the IT Service Desk at ext. 4500</p>
        <p style="margin: 0;">Internal Communication - Company Confidential</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Salesforce Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #0176d3; padding: 25px 25px 20px; text-align: left;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/320px-Salesforce.com_logo.svg.png" alt="Salesforce" style="width: 150px;">
      </div>
      <div style="padding: 30px 25px; color: #032d60;">
        <h2 style="margin-top: 0; font-size: 22px; color: #032d60; font-weight: 400;">Get ready for the Summer '25 Release</h2>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Hi User,</p>
        
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">The Summer '25 release is coming soon! We've prepared resources to help you and your team leverage the latest features.</p>
        
        <div style="background-color: #f3f3f3; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
          <h3 style="margin-top: 0; color: #032d60; font-size: 18px; font-weight: 400; margin-bottom: 15px;">Key Summer '25 Highlights</h3>
          
          <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
            <div style="min-width: 30px; margin-right: 15px; text-align: center;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Lightningbolt.svg/64px-Lightningbolt.svg.png" alt="Lightning" style="width: 24px;">
            </div>
            <div>
              <p style="margin: 0 0 5px; font-weight: 600; font-size: 16px;">Enhanced Lightning Experience</p>
              <p style="margin: 0; font-size: 14px; color: #444;">Improved performance and user interface updates</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
            <div style="min-width: 30px; margin-right: 15px; text-align: center;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Cloud_computing.svg/64px-Cloud_computing.svg.png" alt="Cloud" style="width: 24px;">
            </div>
            <div>
              <p style="margin: 0 0 5px; font-weight: 600; font-size: 16px;">Flow Builder Improvements</p>
              <p style="margin: 0; font-size: 14px; color: #444;">New automation capabilities and templates</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: flex-start;">
            <div style="min-width: 30px; margin-right: 15px; text-align: center;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Circle-icons-shield.svg/64px-Circle-icons-shield.svg.png" alt="Security" style="width: 24px;">
            </div>
            <div>
              <p style="margin: 0 0 5px; font-weight: 600; font-size: 16px;">Enhanced Security Features</p>
              <p style="margin: 0; font-size: 14px; color: #444;">Additional MFA options and session management tools</p>
            </div>
          </div>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">Prepare your organization for the upcoming automatic upgrade window specific to your instance.</p>
        
        <div style="margin: 30px 0; text-align: center;">
          <a href="https://www.salesforce.com/releases/" style="display: inline-block; background-color: #0176d3; color: white; text-decoration: none; padding: 12px 25px; border-radius: 4px; font-weight: 400; font-size: 16px;">Explore Release Resources</a>
        </div>
        
        <div style="border-top: 1px solid #e5e5e5; padding-top: 20px; margin-top: 30px;">
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 0;">Best regards,<br>The Salesforce Team</p>
        </div>
      </div>
      <div style="background-color: #f3f3f3; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">©2025 Salesforce, Inc. All rights reserved.</p>
        <p style="margin: 0;">Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Google Sans', Roboto, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #f8f9fa; padding: 24px; text-align: left; border-bottom: 1px solid #e0e0e0;">
<<<<<<< HEAD
        <img src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png" alt="Google" style="height: 24px; margin-right: 10px; vertical-align: middle;">
=======
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png" alt="Google" style="width: 30px; margin-right: 10px; vertical-align: middle;">
>>>>>>> 2cf5bc7565df977324be440446a4175e0d405224
        <span style="font-size: 20px; font-weight: 500; color: #5f6368; vertical-align: middle;">Workspace</span>
      </div>
      <div style="padding: 30px 25px; color: #202124;">
        <h2 style="margin-top: 0; font-size: 20px; color: #202124; font-weight: 500;">New security features for Google Drive</h2>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px; color: #3c4043;">Hello Google Workspace Admin,</p>
        
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px; color: #3c4043;">We're enhancing security in Google Drive with new features for data loss prevention (DLP) and file sharing controls. These updates will begin rolling out to Rapid Release domains next week.</p>
        
        <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px; border: 1px solid #dadce0;">
          <h3 style="margin-top: 0; font-size: 16px; color: #202124; font-weight: 500; margin-bottom: 15px;">Security Enhancements Include:</h3>
          
          <div style="margin-bottom: 15px; display: flex; align-items: flex-start;">
            <div style="background-color: #1a73e8; width: 8px; height: 8px; border-radius: 50%; margin: 6px 10px 0 0;"></div>
            <div>
              <p style="margin: 0; font-weight: 500; font-size: 14px; color: #3c4043;">Enhanced DLP Rules</p>
              <p style="margin: 5px 0 0; font-size: 14px; color: #5f6368;">Detect sensitive content with improved pattern matching</p>
            </div>
          </div>
          
          <div style="margin-bottom: 15px; display: flex; align-items: flex-start;">
            <div style="background-color: #1a73e8; width: 8px; height: 8px; border-radius: 50%; margin: 6px 10px 0 0;"></div>
            <div>
              <p style="margin: 0; font-weight: 500; font-size: 14px; color: #3c4043;">Advanced Sharing Controls</p>
              <p style="margin: 5px 0 0; font-size: 14px; color: #5f6368;">Set default sharing permissions at folder level</p>
            </div>
          </div>
          
          <div style="display: flex; align-items: flex-start;">
            <div style="background-color: #1a73e8; width: 8px; height: 8px; border-radius: 50%; margin: 6px 10px 0 0;"></div>
            <div>
              <p style="margin: 0; font-weight: 500; font-size: 14px; color: #3c4043;">Security Dashboard Updates</p>
              <p style="margin: 5px 0 0; font-size: 14px; color: #5f6368;">Improved visibility into external sharing and potential risks</p>
            </div>
          </div>
        </div>
        
        <div style="background-color: #e8f0fe; border-radius: 8px; padding: 15px; margin-bottom: 25px; border-left: 4px solid #1a73e8;">
          <p style="margin: 0; font-size: 14px; color: #1a73e8;">No immediate action is required, but familiarizing yourself with the new options is recommended.</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0 20px;">
          <a href="https://workspaceupdates.googleblog.com/" style="display: inline-block; background-color: #1a73e8; color: white; text-decoration: none; padding: 10px 24px; border-radius: 4px; font-weight: 500; font-size: 14px;">View Detailed Updates</a>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 0; color: #3c4043;">The Google Workspace Team</p>
      </div>
      <div style="background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #5f6368; border-top: 1px solid #e0e0e0;">
        <p style="margin: 0 0 10px;">© 2025 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</p>
        <p style="margin: 0;">You received this mandatory email to update you about important changes to Google Workspace.</p>
      </div>
    </div>`,
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
    body: `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <div style="background-color: #006fcf; padding: 25px; text-align: center;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/320px-American_Express_logo_%282018%29.svg.png" alt="American Express" style="width: 140px;">
      </div>
      <div style="padding: 30px 25px; color: #333333;">
        <h2 style="margin-top: 0; font-size: 20px; color: #006fcf; font-weight: 500;">Changes to Your Cardmember Agreement</h2>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Dear Valued Cardmember,</p>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">We are writing to inform you about upcoming changes to your Cardmember Agreement. These changes relate to arbitration provisions and will take effect on July 15, 2025.</p>
        
        <div style="background-color: #f7f7f7; border-left: 4px solid #006fcf; padding: 15px; margin-bottom: 25px;">
          <p style="margin: 0; font-size: 16px; line-height: 1.5;">You can review the full notice of changes by logging into your account online and navigating to the Document Center.</p>
        </div>
        
        <div style="background-color: #f7f7f7; border-radius: 4px; padding: 20px; margin-bottom: 25px;">
          <h3 style="margin-top: 0; font-size: 16px; color: #333333; font-weight: 600; margin-bottom: 15px;">Summary of Key Changes:</h3>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 0 0 5px; font-weight: 600; font-size: 14px;">• Arbitration Provisions</p>
            <p style="margin: 0 0 0 15px; font-size: 14px; color: #555;">Updates to the process for resolving disputes</p>
          </div>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 0 0 5px; font-weight: 600; font-size: 14px;">• Fee Schedule</p>
            <p style="margin: 0 0 0 15px; font-size: 14px; color: #555;">Minor adjustments to certain transaction fees</p>
          </div>
          
          <div>
            <p style="margin: 0 0 5px; font-weight: 600; font-size: 14px;">• Digital Communications</p>
            <p style="margin: 0 0 0 15px; font-size: 14px; color: #555;">Enhanced options for electronic delivery of statements</p>
          </div>
        </div>
        
        <div style="margin: 30px 0; text-align: center;">
          <a href="https://www.americanexpress.com" style="display: inline-block; background-color: #006fcf; color: white; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-weight: 600; font-size: 16px;">Access Your Account</a>
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 15px;">If you have questions, please call the number on the back of your card.</p>
        
        <p style="font-size: 16px; line-height: 1.5; margin-top: 30px; margin-bottom: 0;">Sincerely,<br>American Express Customer Care</p>
      </div>
      <div style="background-color: #f7f7f7; padding: 20px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e5e5e5;">
        <p style="margin: 0 0 10px;">Please do not reply to this email. This mailbox is not monitored.</p>
        <p style="margin: 0 0 10px;">This email was sent to: user@example.com</p>
        <p style="margin: 0;">© 2025 American Express. All Rights Reserved.</p>
      </div>
    </div>`,
    date: '2025-06-03T09:45:00',
    hasAttachment: false,
    isPhishing: false,
    unread: true
  },
  
  // ===================================
  // Expert difficulty emails - Phishing (5 total)
  // ===================================
];