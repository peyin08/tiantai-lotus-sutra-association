const STORAGE_KEYS = {
  posts: "tiantian-lotus-posts-v2",
  donation: "tiantian-lotus-donation-settings-v1",
  siteProfile: "tiantian-lotus-site-profile-v1",
  cloud: "tiantian-lotus-cloud-settings-v1",
  lang: "tiantian-lotus-language-v1",
};

const PUBLIC_CLOUD_CONFIG =
  window.PUBLIC_CLOUD_CONFIG && typeof window.PUBLIC_CLOUD_CONFIG === "object"
    ? window.PUBLIC_CLOUD_CONFIG
    : null;

const I18N = {
  en: {
    nav_about: "About",
    nav_updates: "Updates",
    nav_gallery: "Gallery",
    nav_donate: "Donate",
    nav_upload: "Upload",
    hero_eyebrow: "Community Practice • Compassion • Service",
    hero_title: "Share our practice, preserve our moments, support our mission.",
    hero_text:
      "A welcoming home for Tiantai Lotus Sutra Association to publish updates, share event photos and videos, and receive donations for community programs.",
    hero_donate: "Donate Now",
    hero_post: "Post Update",
    hero_card_title: "Open for Donations",
    hero_card_text:
      "Support scripture study sessions, community meals, youth learning, and temple maintenance.",
    hero_card_li1: "Monthly supporters welcome",
    hero_card_li2: "One-time gifts accepted",
    hero_card_li3: "Sponsor an event or offering",
    hero_card_cta: "Support the Association",
    mission_eyebrow: "Mission",
    mission_title: "Rooted in the Lotus Sutra, expressed through daily kindness.",
    about_eyebrow: "About",
    about_title: "About Tiantai Lotus Sutra Association",
    about_sub:
      "A bilingual public page for our mission, contact details, and location information.",
    about_mission_title: "Who We Are",
    about_mission_text:
      "Tiantai Lotus Sutra Association is a community for Lotus Sutra study, chanting, compassionate service, and shared practice.",
    about_mission_note:
      "Add your founding story, teachers, and regular practice schedule here.",
    about_contact_title: "Contact",
    about_contact_text:
      "For events, volunteering, donations, or study group information, please contact us.",
    about_location_title: "Location",
    about_location_text:
      "Add your temple/association address here so members and visitors can find you on Google and maps.",
    about_location_label: "Address",
    about_location_placeholder: "Address to be updated",
    about_location_note:
      "Tip: use your full street address and city/state for better local search visibility.",
    intro_practice_title: "Practice Together",
    intro_practice_text:
      "Share chanting sessions, teachings, and study circle highlights so members and friends can stay connected.",
    intro_service_title: "Serve the Community",
    intro_service_text:
      "Publish outreach updates and invite support for charitable activities and local service events.",
    intro_preserve_title: "Preserve Memories",
    intro_preserve_text:
      "Upload event photos and videos to document growth, celebration, and intergenerational participation.",
    updates_eyebrow: "Latest",
    updates_title: "Association Updates",
    updates_sub:
      "Posts are stored locally and can optionally sync to Supabase for multi-device access.",
    search_placeholder: "Search updates by title or text",
    sync_now: "Sync From Cloud",
    clear_posts: "Clear All Posts",
    gallery_eyebrow: "Media",
    gallery_title: "Community Gallery",
    gallery_sub: "Images and videos from your published updates.",
    donate_eyebrow: "Support",
    donate_title: "Donate to Tiantai Lotus Sutra Association",
    donate_sub: "Donation links and contact info can be updated below in Donation Settings.",
    donate_panel_title: "Give Online",
    donate_panel_text: "Use the buttons below for online donations.",
    donate_paypal: "Donate via PayPal",
    donate_stripe: "Donate via Stripe",
    donate_zelle: "Zelle / Bank Transfer Info",
    impact_title: "Donation Impact",
    impact_25: "Supports tea and supplies for a study gathering",
    impact_108: "Sponsors one community chanting session",
    impact_300: "Helps fund outreach or volunteer meal service",
    impact_any_amount: "Any amount",
    impact_any_text: "Sustains ongoing association activities",
    contact_title: "Contact for Receipts / Sponsorship",
    label_email: "Email",
    label_phone: "Phone",
    label_message: "Message",
    studio_eyebrow: "Admin",
    studio_title: "Updates Studio (Upload Image / Video)",
    studio_sub:
      "Create bilingual posts and optionally upload media to cloud storage via Supabase.",
    compose_title: "Create Update",
    post_title_en: "Post Title (English)",
    post_title_zh: "Post Title (Chinese / 中文标题)",
    post_date: "Event Date",
    post_body_en: "Update Details (English)",
    post_body_zh: "Update Details (Chinese / 中文内容)",
    post_body_placeholder_en:
      "Share news, teachings, event details, volunteer notes, or announcements...",
    post_body_placeholder_zh: "可填写中文活动更新、法会信息、志工说明等...",
    upload_media: "Upload Images or Videos",
    upload_help: "Accepted: images and videos (multiple files allowed)",
    publish_update: "Publish Update",
    reset_form: "Reset",
    donation_settings_title: "Donation Settings",
    donation_settings_sub:
      "Save your real donation links and contact info (stored locally and can sync to cloud).",
    label_paypal_url: "PayPal Donation URL",
    label_stripe_url: "Stripe Donation URL",
    label_zelle_url: "Zelle / Bank Info URL",
    save_donation_settings: "Save Donation Settings",
    about_settings_title: "About / Contact / Location",
    about_settings_sub:
      "Edit public organization details shown on the homepage (saved locally and can sync to cloud).",
    about_form_mission: "Mission / Intro (English)",
    about_form_mission_zh: "Mission / Intro (Chinese)",
    about_form_contact: "Contact Text (English)",
    about_form_contact_zh: "Contact Text (Chinese)",
    about_form_address: "Address",
    about_form_schedule: "Practice Time / Schedule",
    save_about_settings: "Save About Info",
    cloud_settings_title: "Cloud Sync (Supabase)",
    cloud_settings_sub:
      "Optional: connect Supabase to sync posts and upload media across devices.",
    supabase_url: "Supabase Project URL",
    supabase_anon_key: "Supabase Anon Key",
    posts_table: "Posts Table",
    storage_bucket: "Storage Bucket",
    cloud_auto_publish: "Auto-publish new posts to cloud when connected",
    save_cloud_settings: "Save Cloud Settings",
    connect_test: "Connect / Test",
    delete_post: "Delete",
    donation_notice_configured: "Donation links are configured.",
    donation_notice_missing:
      "Add your real payment links in Donation Settings to activate these buttons.",
    post_meta_event: "Event",
    post_meta_posted: "Posted",
    empty_search: "No updates match your search.",
    empty_gallery:
      "No media uploaded yet. Publish a post with image or video to populate the gallery.",
    empty_preview: "Selected media previews will appear here.",
    upload_invalid_alert: "Some files were skipped because they are not images or videos.",
    upload_failed_alert: "Could not load selected media. Please try again.",
    storage_quota_alert:
      "This upload is too large for browser storage. Configure Supabase Cloud Sync for images/videos, or try smaller files.",
    post_required_alert: "Please add an English title and English update details.",
    delete_confirm: "Delete post",
    clear_confirm: "Clear all posts and uploaded media stored in this browser?",
    donation_saved: "Donation settings saved.",
    about_saved: "About/contact/location settings saved.",
    cloud_saved: "Cloud settings saved.",
    cloud_not_configured: "Cloud sync not configured yet.",
    cloud_connecting: "Connecting to Supabase...",
    cloud_connected: "Connected to Supabase.",
    cloud_connect_failed: "Supabase connection failed.",
    cloud_syncing: "Syncing posts from cloud...",
    cloud_sync_done: "Cloud sync complete.",
    cloud_site_settings_synced: "Cloud sync complete (posts + site settings).",
    cloud_sync_failed: "Cloud sync failed.",
    cloud_publish_failed: "Saved locally, but cloud upload failed.",
    cloud_publish_done: "Saved locally and published to cloud.",
    cloud_settings_sync_failed: "Local save succeeded, but cloud settings sync failed.",
    backup_title: "Backup / Restore",
    backup_sub: "Export local posts and settings to a JSON file or import from a backup.",
    backup_export: "Export Backup",
    backup_import: "Import Backup",
    backup_export_done: "Backup file downloaded.",
    backup_import_done: "Backup imported.",
    backup_import_failed: "Backup import failed. Please use a valid JSON backup file.",
    seed_title: "Welcome to Our New Association Website",
    seed_body:
      "This page is ready for Tiantai Lotus Sutra Association updates. Use the Upload section below to add announcements, images, and videos.",
    seed_title_zh: "欢迎来到协会新网站",
    seed_body_zh: "此页面已准备好发布协会动态。请在下方上传图片、视频并发布公告。",
  },
  zh: {
    nav_about: "关于",
    nav_updates: "动态",
    nav_gallery: "相册",
    nav_donate: "捐款",
    nav_upload: "上传",
    hero_eyebrow: "共修 • 慈悲 • 服务",
    hero_title: "分享修行、记录活动、支持协会弘法与公益。",
    hero_text:
      "这是天台法华经协会的网站，可发布最新消息、分享活动照片与视频，并接受捐款支持协会项目。",
    hero_donate: "立即捐款",
    hero_post: "发布动态",
    hero_card_title: "开放捐款",
    hero_card_text: "支持法华经共修、社区供餐、青少年学习与场地维护。",
    hero_card_li1: "欢迎每月定期支持",
    hero_card_li2: "接受一次性捐款",
    hero_card_li3: "可赞助法会或活动供养",
    hero_card_cta: "支持协会",
    mission_eyebrow: "使命",
    mission_title: "以法华经为根本，以日日善行落实慈悲。",
    about_eyebrow: "关于",
    about_title: "关于天台法华经协会",
    about_sub: "这是协会的公开双语介绍页面，包含使命、联络方式与地点信息。",
    about_mission_title: "我们是谁",
    about_mission_text: "天台法华经协会是一个共学法华经、诵经修持、慈悲服务与共同修行的社区。",
    about_mission_note: "可在这里补充协会缘起、法师/老师介绍与固定共修时间。",
    about_contact_title: "联络方式",
    about_contact_text: "如需活动、志工、捐款或共修小组资讯，请与我们联系。",
    about_location_title: "地点",
    about_location_text: "请在这里填写寺院/协会地址，方便会员与访客在 Google 与地图中找到您。",
    about_location_label: "地址",
    about_location_placeholder: "地址待更新",
    about_location_note: "建议填写完整街道地址与城市/州名，以提升本地搜索可见度。",
    intro_practice_title: "共同修学",
    intro_practice_text: "分享诵经、开示与读书会重点，让会员与朋友保持连接。",
    intro_service_title: "服务社区",
    intro_service_text: "发布公益与外展活动动态，邀请大众共同参与与支持。",
    intro_preserve_title: "保存回忆",
    intro_preserve_text: "上传活动照片与视频，记录成长、庆典与跨世代参与。",
    updates_eyebrow: "最新",
    updates_title: "协会动态",
    updates_sub: "动态可保存于本机，也可选配 Supabase 云端同步跨设备使用。",
    search_placeholder: "按标题或内容搜索动态",
    sync_now: "从云端同步",
    clear_posts: "清除全部动态",
    gallery_eyebrow: "媒体",
    gallery_title: "社区相册",
    gallery_sub: "显示已发布动态中的图片与视频。",
    donate_eyebrow: "护持",
    donate_title: "支持天台法华经协会",
    donate_sub: "捐款链接与联络信息可在下方“捐款设置”中修改。",
    donate_panel_title: "线上捐款",
    donate_panel_text: "请使用以下按钮进行线上捐款。",
    donate_paypal: "PayPal 捐款",
    donate_stripe: "Stripe 捐款",
    donate_zelle: "Zelle / 银行转账说明",
    impact_title: "捐款用途示例",
    impact_25: "支持一次共修茶点与用品",
    impact_108: "赞助一次共修诵经活动",
    impact_300: "支持社区外展或志工供餐",
    impact_any_amount: "任意金额",
    impact_any_text: "都能持续支持协会活动",
    contact_title: "收据 / 赞助联络",
    label_email: "邮箱",
    label_phone: "电话",
    label_message: "备注",
    studio_eyebrow: "管理",
    studio_title: "动态发布工作台（上传图片 / 视频）",
    studio_sub: "可建立中英双语动态，并可选用 Supabase 上传媒体至云端。",
    compose_title: "创建动态",
    post_title_en: "标题（英文）",
    post_title_zh: "标题（中文）",
    post_date: "活动日期",
    post_body_en: "内容（英文）",
    post_body_zh: "内容（中文）",
    post_body_placeholder_en: "填写英文活动动态、开示摘要、公告等...",
    post_body_placeholder_zh: "可填写中文活动更新、法会信息、志工说明等...",
    upload_media: "上传图片或视频",
    upload_help: "支持图片与视频（可多选）",
    publish_update: "发布动态",
    reset_form: "重置",
    donation_settings_title: "捐款设置",
    donation_settings_sub: "保存真实捐款链接与联络信息（仅存于此设备浏览器）。",
    
    label_paypal_url: "PayPal 捐款链接",
    label_stripe_url: "Stripe 捐款链接",
    label_zelle_url: "Zelle / 银行转账说明链接",
    save_donation_settings: "保存捐款设置",
    about_settings_title: "关于 / 联络 / 地点",
    about_settings_sub: "编辑首页公开信息（本地保存，并可同步到云端）。",
    about_form_mission: "简介（英文）",
    about_form_mission_zh: "简介（中文）",
    about_form_contact: "联络说明（英文）",
    about_form_contact_zh: "联络说明（中文）",
    about_form_address: "地址",
    about_form_schedule: "共修时间 / 活动时间",
    save_about_settings: "保存关于信息",
    cloud_settings_title: "云端同步（Supabase）",
    cloud_settings_sub: "可选：连接 Supabase 以跨设备同步动态并上传媒体。",
    supabase_url: "Supabase 项目网址",
    supabase_anon_key: "Supabase 匿名 Key",
    posts_table: "动态数据表",
    storage_bucket: "媒体存储 Bucket",
    cloud_auto_publish: "连接后自动将新动态发布到云端",
    save_cloud_settings: "保存云端设置",
    connect_test: "连接 / 测试",
    delete_post: "删除",
    donation_notice_configured: "捐款链接已设置。",
    donation_notice_missing: "请先在“捐款设置”中填入真实付款链接以启用按钮。",
    post_meta_event: "活动日期",
    post_meta_posted: "发布时间",
    empty_search: "没有符合搜索条件的动态。",
    empty_gallery: "尚未上传媒体。发布包含图片或视频的动态后会显示在这里。",
    empty_preview: "已选择的媒体预览会显示在这里。",
    upload_invalid_alert: "部分文件不是图片或视频，已跳过。",
    upload_failed_alert: "读取媒体失败，请重试。",
    storage_quota_alert: "上传内容超出浏览器本地存储容量。请配置 Supabase 云端同步（推荐用于图片/视频）或改用更小文件。",
    post_required_alert: "请至少填写英文标题和英文内容。",
    delete_confirm: "删除动态",
    clear_confirm: "确认清除当前浏览器中保存的全部动态与媒体？",
    donation_saved: "已保存捐款设置。",
    about_saved: "已保存关于/联络/地点设置。",
    cloud_saved: "已保存云端设置。",
    cloud_not_configured: "尚未配置云端同步。",
    cloud_connecting: "正在连接 Supabase...",
    cloud_connected: "已成功连接 Supabase。",
    cloud_connect_failed: "Supabase 连接失败。",
    cloud_syncing: "正在从云端同步动态...",
    cloud_sync_done: "云端同步完成。",
    cloud_site_settings_synced: "云端同步完成（动态 + 网站信息）。",
    cloud_sync_failed: "云端同步失败。",
    cloud_publish_failed: "已保存到本机，但云端发布失败。",
    cloud_publish_done: "已保存到本机并发布到云端。",
    cloud_settings_sync_failed: "本地已保存，但云端网站信息同步失败。",
    backup_title: "备份 / 还原",
    backup_sub: "将本机动态与设置导出为 JSON，或从备份导入。",
    backup_export: "导出备份",
    backup_import: "导入备份",
    backup_export_done: "备份文件已下载。",
    backup_import_done: "备份导入完成。",
    backup_import_failed: "备份导入失败，请选择有效的 JSON 备份文件。",
    seed_title: "Welcome to Our New Association Website",
    seed_body:
      "This page is ready for Tiantai Lotus Sutra Association updates. Use the Upload section below to add announcements, images, and videos.",
    seed_title_zh: "欢迎来到协会新网站",
    seed_body_zh: "此页面已准备好发布协会动态。请在下方上传图片、视频并发布公告。",
  },
};

const DEFAULT_DONATION_SETTINGS = {
  paypalUrl: "",
  stripeUrl: "",
  zelleUrl: "",
  email: "donations@tiantianlotus.org",
  phone: "(000) 000-0000",
  message: "",
};

const DEFAULT_SITE_PROFILE = {
  missionEn:
    "Tiantai Lotus Sutra Association is a community for Lotus Sutra study, chanting, compassionate service, and shared practice.",
  missionZh: "天台法华经协会是一个共学法华经、诵经修持、慈悲服务与共同修行的社区。",
  contactTextEn:
    "For events, volunteering, donations, or study group information, please contact us.",
  contactTextZh: "如需活动、志工、捐款或共修小组资讯，请与我们联系。",
  address: "",
  schedule: "",
  email: "donations@tiantianlotus.org",
  phone: "(000) 000-0000",
};

const DEFAULT_CLOUD_SETTINGS = {
  url: "",
  anonKey: "",
  postsTable: "association_posts",
  siteSettingsTable: "association_site_settings",
  bucket: "association-media",
  autoPublish: true,
};

const state = {
  posts: [],
  search: "",
  pendingFiles: [],
  language: "en",
  donationSettings: { ...DEFAULT_DONATION_SETTINGS },
  siteProfile: { ...DEFAULT_SITE_PROFILE },
  cloudSettings: { ...DEFAULT_CLOUD_SETTINGS },
  supabaseClient: null,
  supabaseClientKey: "",
  isAdminView: false,
};

const elements = {
  postForm: document.getElementById("postForm"),
  postTitle: document.getElementById("postTitle"),
  postTitleZh: document.getElementById("postTitleZh"),
  postDate: document.getElementById("postDate"),
  postBody: document.getElementById("postBody"),
  postBodyZh: document.getElementById("postBodyZh"),
  postMedia: document.getElementById("postMedia"),
  mediaPreview: document.getElementById("mediaPreview"),
  postsList: document.getElementById("postsList"),
  galleryGrid: document.getElementById("galleryGrid"),
  searchInput: document.getElementById("searchInput"),
  clearAllBtn: document.getElementById("clearAllBtn"),
  syncNowBtn: document.getElementById("syncNowBtn"),
  resetFormBtn: document.getElementById("resetFormBtn"),
  postTemplate: document.getElementById("postTemplate"),
  galleryItemTemplate: document.getElementById("galleryItemTemplate"),
  langButtons: Array.from(document.querySelectorAll("[data-lang-btn]")),
  donationSettingsForm: document.getElementById("donationSettingsForm"),
  paypalUrl: document.getElementById("paypalUrl"),
  stripeUrl: document.getElementById("stripeUrl"),
  zelleUrl: document.getElementById("zelleUrl"),
  donationEmail: document.getElementById("donationEmail"),
  donationPhone: document.getElementById("donationPhone"),
  donationMessage: document.getElementById("donationMessage"),
  donatePaypalBtn: document.getElementById("donatePaypalBtn"),
  donateStripeBtn: document.getElementById("donateStripeBtn"),
  donateZelleBtn: document.getElementById("donateZelleBtn"),
  donationEmailLink: document.getElementById("donationEmailLink"),
  donationPhoneText: document.getElementById("donationPhoneText"),
  donationMessageText: document.getElementById("donationMessageText"),
  donationNotice: document.getElementById("donationNotice"),
  donationSettingsStatus: document.getElementById("donationSettingsStatus"),
  aboutMissionText: document.getElementById("aboutMissionText"),
  aboutEmailLink: document.getElementById("aboutEmailLink"),
  aboutPhoneText: document.getElementById("aboutPhoneText"),
  aboutContactText: document.getElementById("aboutContactText"),
  aboutLocationText: document.getElementById("aboutLocationText"),
  aboutAddressText: document.getElementById("aboutAddressText"),
  aboutLocationNote: document.getElementById("aboutLocationNote"),
  aboutScheduleText: document.getElementById("aboutScheduleText"),
  aboutSettingsForm: document.getElementById("aboutSettingsForm"),
  aboutMissionInput: document.getElementById("aboutMissionInput"),
  aboutMissionZhInput: document.getElementById("aboutMissionZhInput"),
  aboutContactInput: document.getElementById("aboutContactInput"),
  aboutContactZhInput: document.getElementById("aboutContactZhInput"),
  aboutAddressInput: document.getElementById("aboutAddressInput"),
  aboutScheduleInput: document.getElementById("aboutScheduleInput"),
  aboutEmailInput: document.getElementById("aboutEmailInput"),
  aboutPhoneInput: document.getElementById("aboutPhoneInput"),
  aboutSettingsStatus: document.getElementById("aboutSettingsStatus"),
  cloudSettingsForm: document.getElementById("cloudSettingsForm"),
  supabaseUrl: document.getElementById("supabaseUrl"),
  supabaseAnonKey: document.getElementById("supabaseAnonKey"),
  supabasePostsTable: document.getElementById("supabasePostsTable"),
  supabaseBucket: document.getElementById("supabaseBucket"),
  cloudAutoPublish: document.getElementById("cloudAutoPublish"),
  cloudConnectBtn: document.getElementById("cloudConnectBtn"),
  cloudStatus: document.getElementById("cloudStatus"),
  exportBackupBtn: document.getElementById("exportBackupBtn"),
  importBackupBtn: document.getElementById("importBackupBtn"),
  importBackupFile: document.getElementById("importBackupFile"),
  backupStatus: document.getElementById("backupStatus"),
};

function uid() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function t(key) {
  return I18N[state.language]?.[key] ?? I18N.en[key] ?? key;
}

function setCloudStatus(message, type = "") {
  elements.cloudStatus.textContent = message;
  elements.cloudStatus.className = `status-line${type ? ` ${type}` : ""}`;
}

function hasCloudCreds(config) {
  return Boolean(config?.url && config?.anonKey && !String(config.anonKey).includes("PASTE_YOUR_SUPABASE_ANON_KEY_HERE"));
}

function setStatusLine(el, message, type = "") {
  if (!el) return;
  el.textContent = message;
  el.className = `status-line${type ? ` ${type}` : ""}`;
}

function seedPosts() {
  return [
    {
      id: uid(),
      title: I18N.en.seed_title,
      titleZh: I18N.en.seed_title_zh,
      body: I18N.en.seed_body,
      bodyZh: I18N.en.seed_body_zh,
      eventDate: "",
      createdAt: new Date().toISOString(),
      media: [],
      source: "local",
    },
  ];
}

function parseJsonStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function saveJsonStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function isQuotaExceededError(error) {
  if (!error) return false;
  return (
    error.name === "QuotaExceededError" ||
    error.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
    error.code === 22 ||
    error.code === 1014
  );
}

function normalizeMediaItem(item) {
  if (!item) return null;
  const type = item.type || item.mimeType || "";
  return {
    id: item.id || uid(),
    name: item.name || "",
    type,
    size: Number(item.size || 0),
    dataUrl: item.dataUrl || "",
    url: item.url || "",
    path: item.path || "",
  };
}

function normalizePost(post) {
  if (!post || typeof post !== "object") return null;
  return {
    id: post.id || uid(),
    title: String(post.title || ""),
    titleZh: String(post.titleZh || ""),
    body: String(post.body || ""),
    bodyZh: String(post.bodyZh || ""),
    eventDate: post.eventDate || "",
    createdAt: post.createdAt || new Date().toISOString(),
    media: Array.isArray(post.media) ? post.media.map(normalizeMediaItem).filter(Boolean) : [],
    source: post.source || "local",
  };
}

function loadState() {
  const savedLang = localStorage.getItem(STORAGE_KEYS.lang);
  if (savedLang === "en" || savedLang === "zh") {
    state.language = savedLang;
  }

  const savedPosts = parseJsonStorage(STORAGE_KEYS.posts, null);
  if (Array.isArray(savedPosts) && savedPosts.length) {
    state.posts = savedPosts.map(normalizePost).filter(Boolean);
  } else {
    state.posts = seedPosts();
    savePosts();
  }

  const savedDonation = parseJsonStorage(STORAGE_KEYS.donation, {});
  state.donationSettings = { ...DEFAULT_DONATION_SETTINGS, ...savedDonation };

  const savedSiteProfile = parseJsonStorage(STORAGE_KEYS.siteProfile, {});
  state.siteProfile = { ...DEFAULT_SITE_PROFILE, ...savedSiteProfile };

  const savedCloud = parseJsonStorage(STORAGE_KEYS.cloud, {});
  state.cloudSettings = { ...DEFAULT_CLOUD_SETTINGS, ...savedCloud };
}

function savePosts() {
  const sanitized = state.posts.map((post) => ({
    ...post,
    media: (post.media || []).map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      size: item.size,
      dataUrl: item.dataUrl || "",
      url: item.url || "",
      path: item.path || "",
    })),
  }));
  saveJsonStorage(STORAGE_KEYS.posts, sanitized);
}

function saveDonationSettings() {
  saveJsonStorage(STORAGE_KEYS.donation, state.donationSettings);
}

function saveSiteProfile() {
  saveJsonStorage(STORAGE_KEYS.siteProfile, state.siteProfile);
}

function saveCloudSettings() {
  saveJsonStorage(STORAGE_KEYS.cloud, state.cloudSettings);
}

function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat(state.language === "zh" ? "zh-CN" : undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text ?? "";
  return div.innerHTML;
}

function getPostDisplayTitle(post) {
  if (state.language === "zh") return post.titleZh || post.title;
  return post.title || post.titleZh;
}

function getPostDisplayBody(post) {
  if (state.language === "zh") return post.bodyZh || post.body;
  return post.body || post.bodyZh;
}

function getSecondaryTitle(post) {
  if (state.language === "zh") return post.title || "";
  return post.titleZh || "";
}

function getSecondaryBody(post) {
  if (state.language === "zh") return post.body || "";
  return post.bodyZh || "";
}

function applyTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";

  for (const node of document.querySelectorAll("[data-i18n]")) {
    const key = node.dataset.i18n;
    if (key) node.textContent = t(key);
  }

  for (const node of document.querySelectorAll("[data-i18n-placeholder]")) {
    const key = node.dataset.i18nPlaceholder;
    if (key) node.setAttribute("placeholder", t(key));
  }

  for (const btn of elements.langButtons) {
    btn.classList.toggle("active", btn.dataset.langBtn === state.language);
  }

  renderDonationPanel();
  renderAboutSection();
  renderPosts();
  renderGallery();
  renderPreview();
}

function fillSettingsForms() {
  elements.paypalUrl.value = state.donationSettings.paypalUrl || "";
  elements.stripeUrl.value = state.donationSettings.stripeUrl || "";
  elements.zelleUrl.value = state.donationSettings.zelleUrl || "";
  elements.donationEmail.value = state.donationSettings.email || "";
  elements.donationPhone.value = state.donationSettings.phone || "";
  elements.donationMessage.value = state.donationSettings.message || "";

  elements.aboutMissionInput.value = state.siteProfile.missionEn || "";
  elements.aboutMissionZhInput.value = state.siteProfile.missionZh || "";
  elements.aboutContactInput.value = state.siteProfile.contactTextEn || "";
  elements.aboutContactZhInput.value = state.siteProfile.contactTextZh || "";
  elements.aboutAddressInput.value = state.siteProfile.address || "";
  elements.aboutScheduleInput.value = state.siteProfile.schedule || "";
  elements.aboutEmailInput.value = state.siteProfile.email || "";
  elements.aboutPhoneInput.value = state.siteProfile.phone || "";

  elements.supabaseUrl.value = state.cloudSettings.url || "";
  elements.supabaseAnonKey.value = state.cloudSettings.anonKey || "";
  elements.supabasePostsTable.value = state.cloudSettings.postsTable || DEFAULT_CLOUD_SETTINGS.postsTable;
  elements.supabaseBucket.value = state.cloudSettings.bucket || DEFAULT_CLOUD_SETTINGS.bucket;
  elements.cloudAutoPublish.checked = state.cloudSettings.autoPublish !== false;
}

function configureDonationButton(anchor, url) {
  const trimmed = String(url || "").trim();
  const active = /^https?:\/\//i.test(trimmed);
  anchor.href = active ? trimmed : "#";
  anchor.setAttribute("aria-disabled", active ? "false" : "true");
}

function renderDonationPanel() {
  configureDonationButton(elements.donatePaypalBtn, state.donationSettings.paypalUrl);
  configureDonationButton(elements.donateStripeBtn, state.donationSettings.stripeUrl);
  configureDonationButton(elements.donateZelleBtn, state.donationSettings.zelleUrl);

  const email = state.donationSettings.email || DEFAULT_DONATION_SETTINGS.email;
  elements.donationEmailLink.textContent = email;
  elements.donationEmailLink.href = `mailto:${email}`;
  elements.donationPhoneText.textContent = state.donationSettings.phone || DEFAULT_DONATION_SETTINGS.phone;
  elements.donationMessageText.textContent = state.donationSettings.message || "-";

  const configuredAny =
    !!state.donationSettings.paypalUrl.trim() ||
    !!state.donationSettings.stripeUrl.trim() ||
    !!state.donationSettings.zelleUrl.trim();
  elements.donationNotice.textContent = configuredAny
    ? t("donation_notice_configured")
    : t("donation_notice_missing");
}

function renderAboutSection() {
  const mission =
    state.language === "zh"
      ? state.siteProfile.missionZh || state.siteProfile.missionEn
      : state.siteProfile.missionEn || state.siteProfile.missionZh;
  const contactText =
    state.language === "zh"
      ? state.siteProfile.contactTextZh || state.siteProfile.contactTextEn
      : state.siteProfile.contactTextEn || state.siteProfile.contactTextZh;

  elements.aboutMissionText.textContent = mission || t("about_mission_text");
  elements.aboutContactText.textContent = contactText || t("about_contact_text");

  const email = state.siteProfile.email || state.donationSettings.email || DEFAULT_SITE_PROFILE.email;
  const phone = state.siteProfile.phone || state.donationSettings.phone || DEFAULT_SITE_PROFILE.phone;
  elements.aboutEmailLink.textContent = email;
  elements.aboutEmailLink.href = `mailto:${email}`;
  elements.aboutPhoneText.textContent = phone;

  elements.aboutLocationText.textContent = t("about_location_text");
  elements.aboutLocationNote.textContent = t("about_location_note");
  elements.aboutAddressText.textContent = state.siteProfile.address || t("about_location_placeholder");
  elements.aboutScheduleText.textContent = state.siteProfile.schedule ? state.siteProfile.schedule : "";
  elements.aboutScheduleText.hidden = !state.siteProfile.schedule;
}

function matchesSearch(post) {
  const query = state.search.trim().toLowerCase();
  if (!query) return true;
  return [post.title, post.titleZh, post.body, post.bodyZh]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

function createMediaNode(item, options = {}) {
  const source = item.url || item.dataUrl || "";
  const type = item.type || "";
  const isVideo = type.startsWith("video/");
  const node = document.createElement(isVideo ? "video" : "img");

  if (isVideo) {
    node.src = source;
    node.controls = true;
    node.preload = "metadata";
    if (options.muted) node.muted = true;
  } else {
    node.src = source;
    node.alt = item.name ? `${item.name} upload` : "Uploaded image";
    node.loading = "lazy";
  }

  return node;
}

function renderPosts() {
  const posts = [...state.posts]
    .filter(matchesSearch)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  elements.postsList.innerHTML = "";

  if (!posts.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("empty_search");
    elements.postsList.append(empty);
    return;
  }

  for (const post of posts) {
    const fragment = elements.postTemplate.content.cloneNode(true);
    const title = fragment.querySelector(".post-title");
    const titleSecondary = fragment.querySelector(".post-title-secondary");
    const meta = fragment.querySelector(".post-meta");
    const body = fragment.querySelector(".post-body");
    const bodySecondary = fragment.querySelector(".post-body-secondary");
    const mediaGrid = fragment.querySelector(".post-media-grid");
    const deleteBtn = fragment.querySelector(".delete-post");

    title.textContent = getPostDisplayTitle(post);
    const secondTitle = getSecondaryTitle(post);
    titleSecondary.textContent = secondTitle;
    titleSecondary.hidden = !secondTitle;

    const created = formatDate(post.createdAt);
    const eventDate = formatDate(post.eventDate);
    meta.textContent = [eventDate ? `${t("post_meta_event")}: ${eventDate}` : "", created ? `${t("post_meta_posted")}: ${created}` : ""]
      .filter(Boolean)
      .join(" • ");

    body.innerHTML = escapeHtml(getPostDisplayBody(post)).replace(/\n/g, "<br>");
    const secondBody = getSecondaryBody(post);
    bodySecondary.innerHTML = secondBody ? escapeHtml(secondBody).replace(/\n/g, "<br>") : "";
    bodySecondary.hidden = !secondBody;

    for (const mediaItem of post.media || []) {
      mediaGrid.append(createMediaNode(mediaItem));
    }

    if (!post.media || post.media.length === 0) {
      mediaGrid.remove();
    }

    deleteBtn.textContent = t("delete_post");
    deleteBtn.addEventListener("click", async () => {
      const confirmed = window.confirm(`${t("delete_confirm")}: "${getPostDisplayTitle(post)}"?`);
      if (!confirmed) return;

      state.posts = state.posts.filter((p) => p.id !== post.id);
      savePosts();
      renderAll();

      if (canUseCloud()) {
        try {
          await ensureSupabaseClient();
          await deletePostInCloud(post.id);
        } catch (error) {
          console.warn("Cloud delete failed:", error);
        }
      }
    });

    elements.postsList.append(fragment);
  }
}

function renderGallery() {
  elements.galleryGrid.innerHTML = "";

  const mediaEntries = [];
  for (const post of state.posts) {
    for (const mediaItem of post.media || []) {
      mediaEntries.push({ post, mediaItem });
    }
  }

  if (!mediaEntries.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = t("empty_gallery");
    elements.galleryGrid.append(empty);
    return;
  }

  for (const { post, mediaItem } of mediaEntries.reverse()) {
    const fragment = elements.galleryItemTemplate.content.cloneNode(true);
    const wrap = fragment.querySelector(".gallery-media-wrap");
    const caption = fragment.querySelector("figcaption");
    wrap.append(createMediaNode(mediaItem));
    caption.textContent = `${getPostDisplayTitle(post)}${mediaItem.name ? ` • ${mediaItem.name}` : ""}`;
    elements.galleryGrid.append(fragment);
  }
}

function renderAll() {
  renderPosts();
  renderGallery();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

function renderPreview() {
  elements.mediaPreview.innerHTML = "";

  if (!state.pendingFiles.length) {
    elements.mediaPreview.dataset.emptyLabel = t("empty_preview");
  }

  for (const fileItem of state.pendingFiles) {
    const wrapper = document.createElement("div");
    wrapper.className = "media-preview-item";
    wrapper.append(createMediaNode(fileItem, { muted: true }));
    const label = document.createElement("p");
    label.textContent = fileItem.name;
    wrapper.append(label);
    elements.mediaPreview.append(wrapper);
  }
}

async function handleMediaSelection(event) {
  const files = Array.from(event.target.files || []);
  state.pendingFiles = [];
  renderPreview();
  if (!files.length) return;

  const valid = files.filter((file) => file.type.startsWith("image/") || file.type.startsWith("video/"));
  if (valid.length !== files.length) window.alert(t("upload_invalid_alert"));

  try {
    const prepared = await Promise.all(
      valid.map(async (file) => ({
        id: uid(),
        name: file.name,
        type: file.type,
        size: file.size,
        dataUrl: await fileToDataUrl(file),
        sourceFile: file,
      }))
    );
    state.pendingFiles = prepared;
    renderPreview();
  } catch (error) {
    console.error(error);
    window.alert(t("upload_failed_alert"));
  }
}

function resetComposer() {
  state.pendingFiles = [];
  elements.postForm.reset();
  renderPreview();
}

function handleClearAll() {
  if (!state.posts.length) return;
  const confirmed = window.confirm(t("clear_confirm"));
  if (!confirmed) return;
  state.posts = [];
  savePosts();
  renderAll();
}

function setLanguage(lang) {
  if (lang !== "en" && lang !== "zh") return;
  state.language = lang;
  localStorage.setItem(STORAGE_KEYS.lang, lang);
  applyTranslations();
}

function canUseCloud() {
  return Boolean(state.cloudSettings.url && state.cloudSettings.anonKey);
}

function getReadCloudConfig() {
  if (hasCloudCreds(state.cloudSettings)) {
    return state.cloudSettings;
  }
  if (hasCloudCreds(PUBLIC_CLOUD_CONFIG)) {
    return {
      ...DEFAULT_CLOUD_SETTINGS,
      ...PUBLIC_CLOUD_CONFIG,
      autoPublish: false,
    };
  }
  return null;
}

function canUseCloudRead() {
  return Boolean(getReadCloudConfig());
}

function getSupabaseFactory() {
  return window.supabase && typeof window.supabase.createClient === "function"
    ? window.supabase
    : null;
}

async function ensureSupabaseClient(configOverride = null) {
  const activeConfig = configOverride || state.cloudSettings;
  if (!hasCloudCreds(activeConfig)) throw new Error("Cloud settings are incomplete");
  const factory = getSupabaseFactory();
  if (!factory) throw new Error("Supabase client library not loaded");

  const clientKey = `${activeConfig.url.trim()}::${String(activeConfig.anonKey).trim()}`;
  if (!state.supabaseClient || state.supabaseClientKey !== clientKey) {
    state.supabaseClient = factory.createClient(
      activeConfig.url.trim(),
      String(activeConfig.anonKey).trim()
    );
    state.supabaseClientKey = clientKey;
  }
  return state.supabaseClient;
}

function resetSupabaseClient() {
  state.supabaseClient = null;
  state.supabaseClientKey = "";
}

function cloudTable(config = state.cloudSettings) {
  return config.postsTable || DEFAULT_CLOUD_SETTINGS.postsTable;
}

function cloudSettingsTable(config = state.cloudSettings) {
  return config.siteSettingsTable || DEFAULT_CLOUD_SETTINGS.siteSettingsTable;
}

function cloudBucket(config = state.cloudSettings) {
  return config.bucket || DEFAULT_CLOUD_SETTINGS.bucket;
}

async function testCloudConnection() {
  setCloudStatus(t("cloud_connecting"));
  const client = await ensureSupabaseClient();
  const { error } = await client.from(cloudTable()).select("id", { count: "exact", head: true });
  if (error) throw error;
  const settingsCheck = await client.from(cloudSettingsTable()).select("key", { head: true, count: "exact" });
  if (settingsCheck.error) throw settingsCheck.error;
  setCloudStatus(t("cloud_connected"), "ok");
}

async function upsertSiteSettingsToCloud() {
  const client = await ensureSupabaseClient();
  const rows = [
    {
      key: "donation_settings",
      value: state.donationSettings,
      updated_at: new Date().toISOString(),
    },
    {
      key: "site_profile",
      value: state.siteProfile,
      updated_at: new Date().toISOString(),
    },
  ];
  const { error } = await client.from(cloudSettingsTable()).upsert(rows);
  if (error) throw error;
}

async function syncSiteSettingsFromCloud(config = null) {
  const readConfig = config || getReadCloudConfig();
  if (!readConfig) return;
  const client = await ensureSupabaseClient(readConfig);
  const { data, error } = await client
    .from(cloudSettingsTable(readConfig))
    .select("key,value")
    .in("key", ["donation_settings", "site_profile"]);
  if (error) throw error;

  for (const row of data || []) {
    if (row.key === "donation_settings" && row.value && typeof row.value === "object") {
      state.donationSettings = { ...DEFAULT_DONATION_SETTINGS, ...row.value };
      saveDonationSettings();
    }
    if (row.key === "site_profile" && row.value && typeof row.value === "object") {
      state.siteProfile = { ...DEFAULT_SITE_PROFILE, ...row.value };
      saveSiteProfile();
    }
  }

  fillSettingsForms();
  renderDonationPanel();
  renderAboutSection();
}

async function uploadPendingMediaToCloud(postId) {
  const client = await ensureSupabaseClient();
  const results = [];

  for (const item of state.pendingFiles) {
    if (!item.sourceFile) {
      results.push({
        id: item.id || uid(),
        name: item.name,
        type: item.type,
        size: item.size,
        dataUrl: item.dataUrl || "",
        url: item.url || "",
        path: item.path || "",
      });
      continue;
    }

    const safeName = item.name.replace(/[^\w.\-]/g, "_");
    const filePath = `${postId}/${Date.now()}-${safeName}`;
    const { error: uploadError } = await client.storage
      .from(cloudBucket())
      .upload(filePath, item.sourceFile, {
        upsert: false,
        contentType: item.type || item.sourceFile.type || undefined,
      });

    if (uploadError) throw uploadError;

    const { data } = client.storage.from(cloudBucket()).getPublicUrl(filePath);
    results.push({
      id: item.id || uid(),
      name: item.name,
      type: item.type,
      size: item.size,
      url: data?.publicUrl || "",
      path: filePath,
      dataUrl: "",
    });
  }

  return results;
}

async function upsertPostToCloud(post) {
  const client = await ensureSupabaseClient();
  const payload = {
    id: post.id,
    title: post.title,
    title_zh: post.titleZh || null,
    body: post.body,
    body_zh: post.bodyZh || null,
    event_date: post.eventDate || null,
    created_at: post.createdAt,
    media: (post.media || []).map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      size: item.size,
      url: item.url || "",
      path: item.path || "",
    })),
  };

  const { error } = await client.from(cloudTable()).upsert(payload);
  if (error) throw error;
}

async function deletePostInCloud(postId) {
  const client = await ensureSupabaseClient();
  const { error } = await client.from(cloudTable()).delete().eq("id", postId);
  if (error) throw error;
}

function fromCloudRow(row) {
  return normalizePost({
    id: row.id,
    title: row.title,
    titleZh: row.title_zh,
    body: row.body,
    bodyZh: row.body_zh,
    eventDate: row.event_date || "",
    createdAt: row.created_at || new Date().toISOString(),
    media: Array.isArray(row.media) ? row.media.map((m) => ({ ...m, dataUrl: "" })) : [],
    source: "cloud",
  });
}

function mergePostsById(localPosts, incomingPosts) {
  const map = new Map();
  for (const post of localPosts) map.set(post.id, post);
  for (const post of incomingPosts) map.set(post.id, post);
  return [...map.values()].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

async function syncFromCloud(options = {}) {
  const { silent = false } = options;
  const readConfig = getReadCloudConfig();
  if (!readConfig) {
    if (!silent) setCloudStatus(t("cloud_not_configured"), "error");
    return;
  }

  try {
    if (!silent) setCloudStatus(t("cloud_syncing"));
    const client = await ensureSupabaseClient(readConfig);
    const { data, error } = await client
      .from(cloudTable(readConfig))
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw error;

    const incoming = (data || []).map(fromCloudRow).filter(Boolean);
    state.posts = mergePostsById(state.posts, incoming);
    savePosts();
    await syncSiteSettingsFromCloud(readConfig);
    renderAll();
    if (!silent) setCloudStatus(t("cloud_site_settings_synced"), "ok");
  } catch (error) {
    console.error(error);
    if (!silent) {
      setCloudStatus(`${t("cloud_sync_failed")} ${error.message || ""}`.trim(), "error");
    }
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  const title = elements.postTitle.value.trim();
  const titleZh = elements.postTitleZh.value.trim();
  const body = elements.postBody.value.trim();
  const bodyZh = elements.postBodyZh.value.trim();
  const eventDate = elements.postDate.value;

  if (!title || !body) {
    window.alert(t("post_required_alert"));
    return;
  }

  const id = uid();
  let media = state.pendingFiles.map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    size: item.size,
    dataUrl: item.dataUrl || "",
    url: item.url || "",
    path: item.path || "",
  }));

  const willPublishCloud = canUseCloud() && state.cloudSettings.autoPublish;

  try {
    if (willPublishCloud) {
      media = await uploadPendingMediaToCloud(id);
    }
  } catch (error) {
    console.error(error);
    setCloudStatus(`${t("cloud_publish_failed")} ${error.message || ""}`.trim(), "error");
  }

  const post = {
    id,
    title,
    titleZh,
    body,
    bodyZh,
    eventDate,
    createdAt: new Date().toISOString(),
    media,
    source: willPublishCloud ? "cloud" : "local",
  };

  state.posts.unshift(post);
  try {
    savePosts();
  } catch (error) {
    console.error(error);
    state.posts = state.posts.filter((p) => p.id !== post.id);
    if (isQuotaExceededError(error)) {
      window.alert(t("storage_quota_alert"));
    } else {
      window.alert(error.message || "Failed to save post.");
    }
    return;
  }
  renderAll();
  resetComposer();

  if (willPublishCloud) {
    try {
      await upsertPostToCloud(post);
      setCloudStatus(t("cloud_publish_done"), "ok");
    } catch (error) {
      console.error(error);
      setCloudStatus(`${t("cloud_publish_failed")} ${error.message || ""}`.trim(), "error");
    }
  }

  document.getElementById("updates").scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleDonationSettingsSubmit(event) {
  event.preventDefault();
  state.donationSettings = {
    paypalUrl: elements.paypalUrl.value.trim(),
    stripeUrl: elements.stripeUrl.value.trim(),
    zelleUrl: elements.zelleUrl.value.trim(),
    email: elements.donationEmail.value.trim(),
    phone: elements.donationPhone.value.trim(),
    message: elements.donationMessage.value.trim(),
  };
  saveDonationSettings();
  renderDonationPanel();
  setStatusLine(elements.donationSettingsStatus, t("donation_saved"), "ok");
  if (canUseCloud()) {
    upsertSiteSettingsToCloud()
      .then(() => setCloudStatus(t("cloud_saved"), "ok"))
      .catch((error) => {
        console.error(error);
        setCloudStatus(`${t("cloud_settings_sync_failed")} ${error.message || ""}`.trim(), "error");
      });
  }
}

function handleAboutSettingsSubmit(event) {
  event.preventDefault();
  state.siteProfile = {
    missionEn: elements.aboutMissionInput.value.trim(),
    missionZh: elements.aboutMissionZhInput.value.trim(),
    contactTextEn: elements.aboutContactInput.value.trim(),
    contactTextZh: elements.aboutContactZhInput.value.trim(),
    address: elements.aboutAddressInput.value.trim(),
    schedule: elements.aboutScheduleInput.value.trim(),
    email: elements.aboutEmailInput.value.trim(),
    phone: elements.aboutPhoneInput.value.trim(),
  };
  saveSiteProfile();
  renderAboutSection();
  setStatusLine(elements.aboutSettingsStatus, t("about_saved"), "ok");
  if (canUseCloud()) {
    upsertSiteSettingsToCloud()
      .then(() => setCloudStatus(t("cloud_saved"), "ok"))
      .catch((error) => {
        console.error(error);
        setCloudStatus(`${t("cloud_settings_sync_failed")} ${error.message || ""}`.trim(), "error");
      });
  }
}

function handleCloudSettingsSubmit(event) {
  event.preventDefault();
  state.cloudSettings = {
    url: elements.supabaseUrl.value.trim(),
    anonKey: elements.supabaseAnonKey.value.trim(),
    postsTable: elements.supabasePostsTable.value.trim() || DEFAULT_CLOUD_SETTINGS.postsTable,
    siteSettingsTable: DEFAULT_CLOUD_SETTINGS.siteSettingsTable,
    bucket: elements.supabaseBucket.value.trim() || DEFAULT_CLOUD_SETTINGS.bucket,
    autoPublish: elements.cloudAutoPublish.checked,
  };
  resetSupabaseClient();
  saveCloudSettings();
  setCloudStatus(t("cloud_saved"));
}

function buildBackupPayload() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    posts: state.posts,
    donationSettings: state.donationSettings,
    siteProfile: state.siteProfile,
    cloudSettings: state.cloudSettings,
  };
}

function handleExportBackup() {
  const json = JSON.stringify(buildBackupPayload(), null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `tiantai-lotus-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  setStatusLine(elements.backupStatus, t("backup_export_done"), "ok");
}

async function handleImportBackupFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    if (Array.isArray(parsed.posts)) {
      state.posts = parsed.posts.map(normalizePost).filter(Boolean);
      savePosts();
    }
    if (parsed.donationSettings && typeof parsed.donationSettings === "object") {
      state.donationSettings = { ...DEFAULT_DONATION_SETTINGS, ...parsed.donationSettings };
      saveDonationSettings();
    }
    if (parsed.siteProfile && typeof parsed.siteProfile === "object") {
      state.siteProfile = { ...DEFAULT_SITE_PROFILE, ...parsed.siteProfile };
      saveSiteProfile();
    }
    if (parsed.cloudSettings && typeof parsed.cloudSettings === "object") {
      state.cloudSettings = { ...DEFAULT_CLOUD_SETTINGS, ...parsed.cloudSettings };
      saveCloudSettings();
      resetSupabaseClient();
    }
    fillSettingsForms();
    renderDonationPanel();
    renderAboutSection();
    renderAll();
    setStatusLine(elements.backupStatus, t("backup_import_done"), "ok");
  } catch (error) {
    console.error(error);
    setStatusLine(elements.backupStatus, t("backup_import_failed"), "error");
  } finally {
    event.target.value = "";
  }
}

async function handleCloudConnect() {
  try {
    await testCloudConnection();
  } catch (error) {
    console.error(error);
    setCloudStatus(`${t("cloud_connect_failed")} ${error.message || ""}`.trim(), "error");
  }
}

function bindEvents() {
  elements.postMedia.addEventListener("change", handleMediaSelection);
  elements.postForm.addEventListener("submit", handleSubmit);
  elements.resetFormBtn.addEventListener("click", () => {
    state.pendingFiles = [];
    renderPreview();
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value || "";
    renderPosts();
  });

  elements.clearAllBtn.addEventListener("click", handleClearAll);
  elements.syncNowBtn.addEventListener("click", syncFromCloud);
  elements.donationSettingsForm.addEventListener("submit", handleDonationSettingsSubmit);
  elements.aboutSettingsForm.addEventListener("submit", handleAboutSettingsSubmit);
  elements.cloudSettingsForm.addEventListener("submit", handleCloudSettingsSubmit);
  elements.cloudConnectBtn.addEventListener("click", handleCloudConnect);
  elements.exportBackupBtn.addEventListener("click", handleExportBackup);
  elements.importBackupBtn.addEventListener("click", () => elements.importBackupFile.click());
  elements.importBackupFile.addEventListener("change", handleImportBackupFile);

  for (const btn of elements.langButtons) {
    btn.addEventListener("click", () => setLanguage(btn.dataset.langBtn));
  }
}

function init() {
  const params = new URLSearchParams(window.location.search);
  state.isAdminView = params.get("admin") === "1";

  loadState();
  fillSettingsForms();
  bindEvents();
  renderDonationPanel();
  renderAboutSection();
  applyTranslations();

  if (elements.syncNowBtn) {
    elements.syncNowBtn.hidden = !state.isAdminView;
  }

  if (!canUseCloud() && !canUseCloudRead()) {
    setCloudStatus(t("cloud_not_configured"));
  }
  if (canUseCloudRead()) {
    void syncFromCloud({ silent: true });
  }
}

init();
