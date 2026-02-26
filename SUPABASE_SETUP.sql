-- Tiantai Lotus Sutra Association website (Supabase setup)
-- Run this in the Supabase SQL editor for your project.

create extension if not exists pgcrypto;

create table if not exists public.association_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  title_zh text,
  body text not null,
  body_zh text,
  event_date date,
  created_at timestamptz not null default now(),
  media jsonb not null default '[]'::jsonb
);

alter table public.association_posts enable row level security;

create table if not exists public.association_site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.association_site_settings enable row level security;

-- Demo/open setup: public read + anon insert/update/delete.
-- Tighten these policies if you add authentication later.
drop policy if exists "association_posts_select_all" on public.association_posts;
create policy "association_posts_select_all"
on public.association_posts
for select
using (true);

drop policy if exists "association_posts_insert_all" on public.association_posts;
create policy "association_posts_insert_all"
on public.association_posts
for insert
with check (true);

drop policy if exists "association_posts_update_all" on public.association_posts;
create policy "association_posts_update_all"
on public.association_posts
for update
using (true)
with check (true);

drop policy if exists "association_posts_delete_all" on public.association_posts;
create policy "association_posts_delete_all"
on public.association_posts
for delete
using (true);

drop policy if exists "association_site_settings_select_all" on public.association_site_settings;
create policy "association_site_settings_select_all"
on public.association_site_settings
for select
using (true);

drop policy if exists "association_site_settings_insert_all" on public.association_site_settings;
create policy "association_site_settings_insert_all"
on public.association_site_settings
for insert
with check (true);

drop policy if exists "association_site_settings_update_all" on public.association_site_settings;
create policy "association_site_settings_update_all"
on public.association_site_settings
for update
using (true)
with check (true);

drop policy if exists "association_site_settings_delete_all" on public.association_site_settings;
create policy "association_site_settings_delete_all"
on public.association_site_settings
for delete
using (true);

-- Storage bucket for images/videos
insert into storage.buckets (id, name, public)
values ('association-media', 'association-media', true)
on conflict (id) do update set public = excluded.public;

-- Public read access to media
drop policy if exists "media_public_read" on storage.objects;
create policy "media_public_read"
on storage.objects
for select
using (bucket_id = 'association-media');

-- Open uploads for demo use (tighten later with auth)
drop policy if exists "media_public_insert" on storage.objects;
create policy "media_public_insert"
on storage.objects
for insert
with check (bucket_id = 'association-media');

drop policy if exists "media_public_update" on storage.objects;
create policy "media_public_update"
on storage.objects
for update
using (bucket_id = 'association-media')
with check (bucket_id = 'association-media');

drop policy if exists "media_public_delete" on storage.objects;
create policy "media_public_delete"
on storage.objects
for delete
using (bucket_id = 'association-media');
