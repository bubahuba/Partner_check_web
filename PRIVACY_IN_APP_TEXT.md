# Privacy & Contact Access - In-App Text

## Short Version (For Permission Dialog Context)

**Why we need contact access:**
PartnerCheck needs access to your contacts so you can select which contacts to add through your device's contact picker. We only access contacts you explicitly choose - we never read all your contacts automatically.

**What we do with your data:**
- We read the name and phone number of contacts you select
- We convert the phone number to a color (for visual display)
- We store only the name and color value on your device
- We never store the actual phone number
- All data stays on your device - nothing is shared

**You're in control:**
- You choose which contacts to add
- You can add contacts manually without permission
- You can delete contacts anytime
- You can revoke permission in settings

---

## Medium Version (For Settings/About Screen)

### Contact Access & Privacy

**Why We Request Contact Permission**

PartnerCheck requests read-only access to your contacts so you can select contacts to add through your device's contact picker. We do not automatically access or import all your contacts - you have complete control over which contacts are added.

**What Happens When You Grant Permission**

1. The app opens your device's standard contact picker
2. You browse and select individual contacts yourself
3. Only the contact you explicitly choose is processed
4. The app never accesses your contacts without your direct action

**What Data We Access**

When you select a contact, we access:
- Contact name
- Phone number (first available)

**What Data We Store**

We store only on your device:
- Contact name
- Color value (derived from phone number)

**We do NOT store:**
- The actual phone number
- Email addresses
- Addresses
- Any other contact information

**How Phone Numbers Are Used**

The phone number is used only to generate a unique color for visual display. The last 6 digits are converted to a color code, and then the phone number itself is discarded. Only the resulting color value is stored.

**Your Privacy**

- All data stays on your device - nothing is sent to servers
- No third-party data sharing
- Read-only access - we never modify your contacts
- You can delete contacts anytime
- You can use the app without permission by adding contacts manually

---

## Long Version (For Full Privacy Policy Page)

### Privacy Policy - Contact Access

#### Why PartnerCheck Requests Contact Access

PartnerCheck is a compatibility checking app that helps you visualize and compare contacts using color-based matching. To provide this functionality, the app requests read-only access to your contacts.

**Important:** The app does NOT automatically access, read, or import all your contacts. You have complete control over which contacts are added.

#### How Contact Access Works

When you grant contact permission and choose to add a contact:

1. **Contact Selection:** The app opens your device's native contact picker
2. **Your Choice:** You browse and manually select the contact you want to add
3. **Data Processing:** Only the contact you explicitly select is processed
4. **No Automatic Access:** The app never accesses your contacts without your direct action

#### What Data We Access

When you select a contact through the picker, the app accesses:
- **Contact Name:** The display name of the selected contact
- **Phone Number:** The first phone number associated with the contact (if available)

#### What Data We Store

All data is stored **locally on your device only**. We store:

- **Contact Name:** The name of the contact you selected
- **Color Value:** A numeric color code derived from the phone number

**We do NOT store:**
- The actual phone number
- Email addresses
- Physical addresses
- Photos or images
- Any other contact information beyond the name

#### How Phone Numbers Are Used

The phone number is used **exclusively** to generate a unique color for visual display:

1. The app extracts the last 6 digits from the phone number
2. These digits are converted to a hexadecimal color code
3. The color is used to display the contact in the app
4. **The phone number itself is never stored** - only the resulting color value

This ensures:
- Each contact gets a unique, consistent color based on their phone number
- The color helps visualize compatibility between contacts
- The original phone number is discarded after color calculation

#### Data Storage & Privacy

**Local Storage Only**

All data is stored exclusively on your device using local storage. This means:
- Your data never leaves your device
- No data is sent to servers or third parties
- No internet connection is required for core functionality
- You can delete all data by uninstalling the app

**Data Retention**

- Data persists on your device until you manually delete contacts or uninstall the app
- You can delete individual contacts at any time through the app interface
- Uninstalling the app removes all stored data

#### Permissions Explained

**READ_CONTACTS Permission**

- **Why needed:** To open the native contact picker so you can select contacts to add
- **What it allows:** Opening the system contact picker and reading only the contact you explicitly select
- **What it does NOT allow:** Accessing all contacts automatically, reading contacts without your selection, or modifying contacts
- **Permission Type:** Read-only

**WRITE_CONTACTS Permission**

While this permission is declared for compatibility with the contact picker library, **we do not write, modify, or delete any contacts in your address book**. The app only reads the contact you select and stores minimal data locally.

#### Your Rights & Control

You have complete control over your data:

1. **Choose which contacts to add** - Only contacts you explicitly select are processed
2. **Delete contacts anytime** - Remove any contact from the app at any time
3. **Revoke permission** - You can revoke contact access in your device settings
4. **Manual entry option** - You can add contacts manually without using the contact picker
5. **Complete data removal** - Uninstalling the app removes all stored data

#### Security & Best Practices

- All data processing happens locally on your device
- No network transmission of contact data
- No third-party data sharing
- Minimal data collection (only name and derived color value)
- Read-only contact access

#### Contact Limit (Free Version)

The free version allows up to 10 contacts. This limit:
- Applies only to contacts stored within the app
- Does not affect your device's contact list
- Does not limit your ability to use your contacts elsewhere
- Can be upgraded by purchasing PartnerCheck Pro for unlimited contacts

#### Frequently Asked Questions

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

#### Transparency Commitment

We believe in transparency and user privacy. This app:
- Requests minimal permissions necessary for functionality
- Processes data locally on your device
- Does not collect, share, or sell your data
- Gives you complete control over what data is stored

---

**Last Updated:** [Current Date]  
**App Version:** PartnerCheck

