# Tiantai Lotus Sutra Association Website Setup Notes

## 1) Real donation links and contacts
Open `/Users/ssgyin/Documents/New project/tiantai-lotus-website/index.html` in a browser, go to **Admin -> Donation Settings**, and save:

- PayPal donation URL
- Stripe donation URL
- Zelle/bank info URL (or a page with bank transfer instructions)
- Email / phone / donation note

These are stored in the browser local storage for that device.

## 2) Cloud sync (Supabase)
1. Create a Supabase project.
2. Run `/Users/ssgyin/Documents/New project/tiantai-lotus-website/SUPABASE_SETUP.sql` in the Supabase SQL editor.
   - If you already ran an older version before, run the updated SQL again to create `association_site_settings`.
3. In the site Admin panel, fill:
   - Project URL
   - Anon key
   - Posts table (`association_posts`)
   - Storage bucket (`association-media`)
4. Click `Save Cloud Settings`, then `Connect / Test`.
5. Click `Sync From Cloud` to pull existing posts.
6. Donation settings and About/Contact/Location settings can now sync to cloud too.

## 3) Bilingual posts (English + Chinese)
- The site now has `EN / 中文` language toggle.
- New posts support English and Chinese title/body fields.
- If one language is missing, the site falls back to the other language.

## 4) Backups (recommended)
- Use `Admin -> Backup / Restore` to export a JSON backup of local posts and settings.
- Keep backups before major edits, browser changes, or migrations.

## Important security note
The included Supabase SQL uses open/public demo policies so the site works quickly without login.
For production, add authentication and restrict insert/update/delete policies.
