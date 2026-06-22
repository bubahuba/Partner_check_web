# PartnerCheck Privacy & Permissions Documentation

## Overview

PartnerCheck is a compatibility checking app that helps you visualize and compare contacts using color-based matching. This document explains why the app requests access to your contacts and how your data is handled.

## Why We Request Contact Access

PartnerCheck requests **read-only access** to your contacts for one specific purpose:

### Contact Selection Only

The app uses your device's native contact picker to allow you to **manually select** contacts you want to add to the app. We do **NOT** automatically access, read, or import all your contacts. You have complete control over which contacts are added.

**What happens when you grant permission:**
- The app opens your device's standard contact picker
- You browse and select individual contacts yourself
- Only the contact you explicitly choose is processed
- The app never accesses your contacts without your direct action

## What Data We Access

When you select a contact through the picker, the app accesses:

1. **Contact Name** - The display name of the selected contact
2. **Phone Number** - The first phone number associated with the contact (if available)

## What Data We Store

The app stores data **locally on your device only**. We store:

1. **Contact Name** - The name you selected
2. **Color Value** - A numeric color code derived from the phone number

**Important:** We do **NOT** store:
- The actual phone number
- Email addresses
- Addresses
- Any other contact information
- Photos or images

## How Phone Numbers Are Used

The phone number is used **only** to generate a unique color for visual display:

1. The app extracts the last 6 digits from the phone number
2. These digits are converted to a hexadecimal color code
3. The color is used to display the contact in the app
4. **The phone number itself is never stored** - only the resulting color value

This means:
- Each contact gets a unique, consistent color based on their phone number
- The color helps visualize compatibility between contacts
- The original phone number is discarded after color calculation

## Data Storage & Privacy

### Local Storage Only

All data is stored **exclusively on your device** using local storage (SharedPreferences). This means:

- ✅ Your data never leaves your device
- ✅ No data is sent to servers or third parties
- ✅ No internet connection is required for core functionality
- ✅ You can delete all data by uninstalling the app

### Data Retention

- Data persists on your device until you manually delete contacts or uninstall the app
- You can delete individual contacts at any time through the app interface
- Uninstalling the app removes all stored data

## Permissions Explained

### READ_CONTACTS Permission

**Why needed:** To open the native contact picker so you can select contacts to add.

**What it allows:**
- Opening the system contact picker interface
- Reading only the contact you explicitly select
- Reading the name and phone number of that selected contact

**What it does NOT allow:**
- Accessing all contacts automatically
- Reading contacts without your selection
- Modifying or deleting contacts in your address book
- Accessing any other contact information beyond what you select

**Permission Type:** Read-only (we request `readonly: true`)

### WRITE_CONTACTS Permission

**Note:** While this permission is declared in the Android manifest for compatibility with the contact picker library, **we do not write, modify, or delete any contacts in your address book**. The app only reads the contact you select and stores a minimal amount of data locally.

## Your Rights & Control

You have complete control over your data:

1. **Choose which contacts to add** - Only contacts you explicitly select are processed
2. **Delete contacts anytime** - Remove any contact from the app at any time
3. **Revoke permission** - You can revoke contact access in your device settings
4. **Manual entry option** - You can add contacts manually without using the contact picker
5. **Complete data removal** - Uninstalling the app removes all stored data

## Security & Best Practices

- All data processing happens locally on your device
- No network transmission of contact data
- No third-party data sharing
- Minimal data collection (only name and derived color value)
- Read-only contact access

## Contact Limit (Free Version)

The free version allows up to 10 contacts. This limit:
- Applies only to contacts stored within the app
- Does not affect your device's contact list
- Does not limit your ability to use your contacts elsewhere
- Can be upgraded by purchasing PartnerCheck Pro for unlimited contacts

## Frequently Asked Questions

**Q: Does the app access all my contacts?**  
A: No. The app only accesses contacts you explicitly select through the contact picker.

**Q: Is my contact data sent to servers?**  
A: No. All data stays on your device. No contact information is transmitted over the internet.

**Q: Can the app modify my contacts?**  
A: No. The app has read-only access and does not modify, delete, or add contacts to your address book.

**Q: What happens if I revoke contact permission?**  
A: You can still use the app by adding contacts manually. The contact picker feature will be unavailable until you grant permission again.

**Q: How is my phone number used?**  
A: The phone number is used only to calculate a color code. The actual phone number is never stored - only the resulting color value.

**Q: Can I use the app without granting contact permission?**  
A: Yes. You can add contacts manually by entering the name and phone number yourself.

## Transparency Commitment

We believe in transparency and user privacy. This app:
- Requests minimal permissions necessary for functionality
- Processes data locally on your device
- Does not collect, share, or sell your data
- Gives you complete control over what data is stored

## Contact Us

If you have questions about privacy or data handling, please contact us through the app's support channels.

---

**Last Updated:** [Current Date]  
**App Version:** PartnerCheck  
**Platforms:** iOS, Android

