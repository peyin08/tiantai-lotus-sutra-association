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
3. In the site Admin panel, fill:
   - Project URL
   - Anon key
   - Posts table (`association_posts`)
   - Storage bucket (`association-media`)
4. Click `Save Cloud Settings`, then `Connect / Test`.
5. Click `Sync From Cloud` to pull existing posts.

## 3) Bilingual posts (English + Chinese)
- The site now has `EN / 中文` language toggle.
- New posts support English and Chinese title/body fields.
- If one language is missing, the site falls back to the other language.

## Important security note
The included Supabase SQL uses open/public demo policies so the site works quickly without login.
For production, add authentication and restrict insert/update/delete policies.
