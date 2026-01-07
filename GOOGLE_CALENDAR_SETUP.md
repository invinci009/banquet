 # Google Calendar Setup Guide

## For Client: How to Add Booked Dates

**After setup, simply add events to your Google Calendar and they will automatically appear as "Booked" on the website!**

---

## One-Time Setup (15 minutes)

### Step 1: Create or Use a Google Calendar

1. Go to [Google Calendar](https://calendar.google.com)
2. Either use your existing calendar OR create a new one:
   - Click `+` next to "Other calendars"
   - Select "Create new calendar"
   - Name it "Alba Banquet Bookings"
   - Click "Create calendar"

### Step 2: Make the Calendar Public

1. Click the ⚙️ gear icon → **Settings**
2. Click on your calendar name in the left sidebar
3. Scroll to **Access permissions for events**
4. Check ✅ **"Make available to public"**
5. Select "See all event details"

> ⚠️ This is safe! The calendar is read-only - no one can add or modify your events.

### Step 3: Copy the Calendar ID

1. Still in Settings, scroll down to **Integrate calendar**
2. Copy the **Calendar ID** (looks like: `abc123@group.calendar.google.com`)
3. Save this for later

### Step 4: Get a Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use existing)
3. Go to **APIs & Services** → **Library**
4. Search for "Google Calendar API" and **Enable** it
5. Go to **APIs & Services** → **Credentials**
6. Click **Create Credentials** → **API Key**
7. Copy the API key
8. (Recommended) Click "Restrict key" and add HTTP referrer restrictions for your domain

### Step 5: Add Credentials to Website

Create a file called `.env.local` in the website root with:

```
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=your-calendar-id-here
NEXT_PUBLIC_GOOGLE_API_KEY=your-api-key-here
```

Then redeploy the website.

---

## How to Use

### Adding Booked Dates

1. Open Google Calendar
2. Click on a date
3. Add an event with any name (e.g., "Wedding - Sharma Family")
4. Save

That's it! The website will show that date as "Booked" within 5 minutes.

### For Multi-Day Events

Just create an event spanning multiple days - all days will show as booked.

### Removing Bookings

Delete the event from Google Calendar. It will be available again within 5 minutes.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Dates not showing as booked | Wait 5 minutes for cache to refresh, or click the refresh icon on the calendar |
| "Loading availability..." stuck | Check that API key and Calendar ID are correct |
| Calendar API error | Ensure the calendar is public and API key has Calendar API enabled |

---

## Need Help?

Contact your web developer if you encounter any issues with the setup.
