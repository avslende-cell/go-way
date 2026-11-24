const translations = {
  he: {
    skip: "דילוג לתוכן", navHome: "ראשי", navPlanner: "תכנון נסיעה", navNearby: "תחנות קרובות", navLines: "קווי אוטובוס", navFavorites: "שמורים",
    eyebrow: "נעים להגיע לאן שרוצים", headline: "הדרך שלך,<br><span>בפשטות.</span>", heroDescription: "מתכננים את הנסיעה הבאה, מגלים תחנות ושומרים מקומות חשובים. כל הדרך, במקום אחד.", dataNote: "זמני נסיעה וקווים יוצגו כשמקור תחבורה מאומת יהיה זמין.", journeyLabel: "הנסיעה שלך", planJourney: "לאן נוסעים?", originLabel: "מאיפה יוצאים?", destinationLabel: "לאן מגיעים?", originPlaceholder: "כתובת, עיר או מקום", destinationPlaceholder: "כתובת, עיר או מקום", searchJourneys: "חיפוש נסיעות", saveJourney: "שמירת מסלול", findNearby: "חיפוש תחנות בסביבה", savedPlaces: "היעדים ששמרתי", smallSteps: "צעד קטן בדרך", howTitle: "כל מה שצריך, כדי להגיע.", stepOneTitle: "בוחרים יעד", stepOneBody: "מזינים כתובת, עיר או מקום.", stepTwoTitle: "מוצאים את הדרך", stepTwoBody: "תכנון תחבורה מדויק יופיע עם חיבור למקור נתונים.", stepThreeTitle: "שומרים להמשך", stepThreeBody: "היעדים שלך נשמרים גם בפעם הבאה.",
    plannerKicker: "הדרך שלך מתחילה כאן", plannerPageTitle: "תכנון נסיעה", plannerPageDescription: "מזינים מוצא ויעד כדי לבדוק מסלולי תחבורה ציבורית.", resultReadyTitle: "הנסיעה שלך מחכה כאן", resultReadyBody: "הזינו מוצא ויעד כדי להתחיל. אפשר לשמור יעדים גם בלי חיבור למידע על קווים.", journeyUnavailable: "לא ניתן להציג מסלולי תחבורה כרגע: אין מקור נתוני תחבורה מאומת שמוגדר בשרת. היעדים נשמרו במכשיר.", retry: "ניסיון חוזר", originRequired: "נא להזין נקודת מוצא.", destinationRequired: "נא להזין יעד.", locationsSame: "המוצא והיעד זהים. כדאי לבחור יעד אחר.",
    nearbyKicker: "מכאן, קרוב יותר", nearbyTitle: "תחנות בסביבה", nearbyDescription: "אפשר לחפש לפי כתובת או לשתף מיקום. אין צורך לאפשר מיקום כדי להשתמש באפליקציה.", searchAddress: "חיפוש כתובת או תחנה", nearbyPlaceholder: "עיר, כתובת או שם תחנה", search: "חיפוש", useMyLocation: "המיקום שלי", nearbyInitial: "חיפוש תחנות יוצג לאחר חיבור למקור נתוני תחבורה מאומת.", mapCaption: "מפה כללית · תחנות יוצגו עם חיבור למידע תחבורה", mapUnavailable: "המפה לא נטענה. אפשר להמשיך להשתמש בחיפוש ללא מפה.", nearbyStopsHeading: "תחנות קרובות", noLiveData: "אין נתוני תחנות", stopsEmptyTitle: "התחנות יופיעו כאן", stopsEmptyBody: "חיבור למקור נתוני תחבורה יציג תחנות, קווים וזמני יציאה. החיפוש עדיין לא משתמש במיקום שלך.", locationDenied: "לא התקבלה הרשאה למיקום. אפשר לחפש תחנה לפי כתובת.", locationUnsupported: "הדפדפן הזה לא תומך בשיתוף מיקום. אפשר לחפש לפי כתובת.", locationFound: "המיקום שלך סומן במפה. מידע על תחנות יופיע עם חיבור למקור נתונים.", locationFailed: "לא הצלחנו לזהות את המיקום. אפשר לנסות שוב או לחפש לפי כתובת.", nearbyUnavailable: "חיפוש תחנות אינו זמין: לא הוגדר מקור נתוני תחבורה מאומת.",
    linesKicker: "מכירים את הדרך", linesTitle: "קווי אוטובוס", linesDescription: "מחפשים לפי מספר קו, מפעיל או יעד.", lineSearchLabel: "מספר קו, מפעיל או יעד", linePlaceholder: "למשל: מספר קו או יעד", searchLines: "חיפוש קווים", linesInitial: "פרטי קווים יופיעו לאחר חיבור למקור נתוני תחבורה מאומת.", linesEmptyTitle: "מגלים קו חדש", linesEmptyBody: "חיפוש קווים ותחנות לפי כיוון יופעל לאחר הגדרת ספק נתוני תחבורה.", linesUnavailable: "חיפוש קווים אינו זמין: לא הוגדר מקור נתוני תחבורה מאומת.", queryRequired: "נא להזין מה לחפש.",
    favoritesKicker: "המקומות שלך, קרוב", favoritesTitle: "דברים ששמרתי", favoritesDescription: "היעדים והשיחות האחרונות שלך נשמרים במכשיר הזה.", savedTab: "יעדים שמורים", recentTab: "חיפושים אחרונים", clearHistory: "מחיקת החיפושים", noFavoritesTitle: "עוד לא שמרת יעדים", noFavoritesBody: "אחרי שמירת מסלול, הוא יופיע כאן. החיפושים נשמרים רק במכשיר הזה.", noRecentTitle: "עדיין אין חיפושים", noRecentBody: "מסלולים שחיפשת יופיעו כאן, בלי לשמור פרטים אישיים בשרת.", useSaved: "שימוש", removeSaved: "הסרת יעד שמור", removeConfirm: "להסיר את היעד השמור?", historyConfirm: "למחוק את כל החיפושים האחרונים?", historyCleared: "החיפושים האחרונים נמחקו.", savedToast: "היעד נשמר במכשיר.", removedToast: "היעד הוסר.",
    footerSlogan: "הדרך שלך, בפשטות.", footerData: "מידע על תחבורה יוצג רק ממקורות מאומתים.", contact: "יצירת קשר", privacy: "פרטיות", saveDialogKicker: "שומרים מקום לדרך", saveDialogTitle: "איך נקרא ליעד?", nameLabel: "שם לשמירה", cancel: "ביטול", save: "שמירה", savedFrom: "מוצא", savedTo: "יעד", closeMenu: "סגירת תפריט", openMenu: "פתיחת תפריט", lightTheme: "מעבר למצב בהיר", darkTheme: "מעבר למצב כהה", favoriteNameRequired: "נא לבחור שם ליעד.", serverError: "השירות אינו זמין כרגע. אפשר לנסות שוב מאוחר יותר.",
    phoneLayoutKicker: "התאמת התצוגה", phoneLayoutTitle: "איך Go Way תיראה בטלפון?", phoneLayoutDescription: "בחרו פריסה למסכים קטנים. השינוי נשמר במכשיר הזה.", phoneLayoutClassic: "קלאסי", phoneLayoutClassicDescription: "הפריסה הרגילה של Go Way", phoneLayoutCompact: "קומפקטי", phoneLayoutCompactDescription: "יותר תוכן בפחות גלילה", phoneLayoutSpacious: "מרווח", phoneLayoutSpaciousDescription: "כפתורים ואזורים גדולים יותר", phoneLayoutSaved: "עיצוב הטלפון עודכן.",
    homeIntroKicker: "תחבורה ציבורית, בדרך פשוטה", homeMapTitle: "תחנות קרובות אליך", homeMapNote: "המפה כללית. המיקום שלך לא ייאסף בלי אישור מפורש.", openNearbyMap: "לכל התחנות", linesOverviewTitle: "תצוגת קווים", openLines: "לכל הקווים", lineSearchByNumber: "חיפוש לפי מספר קו", lineSearchByNumberHint: "מאתרים קו ורואים את התחנות שלו", lineSearchByArea: "חיפוש לפי אזור או עיר", lineSearchByAreaHint: "מגלים אילו קווים עוברים באזור", lineSearchByDestination: "חיפוש לפי יעד וכיוון", lineSearchByDestinationHint: "רואים את התחנות לפי סדר המסלול", lineDataNotice: "פרטי קווים, תחנות וזמני הגעה יוצגו רק לאחר חיבור למקור נתוני תחבורה מאומת.",
    stopListKicker: "מידע מהסביבה", arrivalColumnLine: "קו", arrivalColumnDestination: "כיוון", arrivalColumnTime: "הגעה", arrivalsDataNote: "לא מוצגים זמני הגעה משוערים ללא מקור נתונים מאומת.", lineDirectoryKicker: "מאתרים קו", lineDirectoryTitle: "תוצאות חיפוש", lineDetailsKicker: "מסלול ותחנות", lineDetailsTitle: "תצוגת פרטי קו", lineDetailsDescription: "כשבוחרים קו, כאן יוצגו הכיוון, התחנות לפי הסדר ומידע הנסיעה.", routeStructureLabel: "מבנה התצוגה", originStop: "תחנת מוצא", originStopHint: "התחנה הראשונה במסלול", intermediateStops: "תחנות ביניים", intermediateStopsHint: "התחנות לאורך הקו", destinationStop: "תחנת יעד", destinationStopHint: "התחנה האחרונה במסלול", routePreviewDisclaimer: "זו המחשה של מבנה המסך בלבד, לא נתוני קו אמיתיים.", stopDataPending: "נתוני התחנות יופיעו לאחר חיבור למקור תחבורה."
  },
  en: {
    skip: "Skip to content", navHome: "Home", navPlanner: "Plan a journey", navNearby: "Nearby stops", navLines: "Bus lines", navFavorites: "Saved",
    eyebrow: "Good journeys start here", headline: "Your journey,<br><span>made simple.</span>", heroDescription: "Plan a journey, discover nearby stops, and save the places that matter. Your next trip starts here.", dataNote: "Transit routes and times appear when a verified data source is available.", journeyLabel: "YOUR JOURNEY", planJourney: "Where are you going?", originLabel: "Starting point", destinationLabel: "Destination", originPlaceholder: "Address, city, or place", destinationPlaceholder: "Address, city, or place", searchJourneys: "Search journeys", saveJourney: "Save places", findNearby: "Find nearby stops", savedPlaces: "Saved places", smallSteps: "A simpler way to get there", howTitle: "Everything you need to get there.", stepOneTitle: "Choose a destination", stepOneBody: "Enter an address, city, or place.", stepTwoTitle: "Find your way", stepTwoBody: "Accurate transit planning is coming with a verified data connection.", stepThreeTitle: "Save it for later", stepThreeBody: "Your places stay saved on this device.",
    plannerKicker: "YOUR JOURNEY STARTS HERE", plannerPageTitle: "Plan a journey", plannerPageDescription: "Enter a start and destination to check public transit routes.", resultReadyTitle: "Your journey starts here", resultReadyBody: "Enter a start and destination to get going. You can save places without live transit data.", journeyUnavailable: "Transit routes are unavailable: no verified transit data source is configured on this server. Your places were saved on this device.", retry: "Try again", originRequired: "Enter a starting point.", destinationRequired: "Enter a destination.", locationsSame: "Start and destination are the same. Choose a different destination.",
    nearbyKicker: "A little closer to where you are", nearbyTitle: "Nearby stops", nearbyDescription: "Search by address or choose to share your location. Location access is never required.", searchAddress: "Search for an address or stop", nearbyPlaceholder: "City, address, or stop name", search: "Search", useMyLocation: "Use my location", nearbyInitial: "Stop search will be available when a verified transit data source is connected.", mapCaption: "Map · Transit stops appear when data is connected", mapUnavailable: "The map could not load. You can still search without it.", nearbyStopsHeading: "Nearby stops", noLiveData: "No stop data", stopsEmptyTitle: "Stops will appear here", stopsEmptyBody: "Connect a transit data source to show stops, lines, and departure times. Your location is not being used yet.", locationDenied: "Location permission was not granted. You can search for a stop by address.", locationUnsupported: "This browser does not support location sharing. You can search by address.", locationFound: "Your location is marked on the map. Stop information needs a connected data source.", locationFailed: "We could not determine your location. Try again or search by address.", nearbyUnavailable: "Stop search is unavailable: no verified transit data source is configured.",
    linesKicker: "Know your way around", linesTitle: "Bus lines", linesDescription: "Search by line number, operator, or destination.", lineSearchLabel: "Line number, operator, or destination", linePlaceholder: "For example, line number or destination", searchLines: "Search lines", linesInitial: "Line information will appear when a verified transit data source is connected.", linesEmptyTitle: "Find your next line", linesEmptyBody: "Line and stop search by direction will be available when a transit provider is configured.", linesUnavailable: "Line search is unavailable: no verified transit data source is configured.", queryRequired: "Enter a search term.",
    favoritesKicker: "Your places, close at hand", favoritesTitle: "Your saved places", favoritesDescription: "Saved places and recent searches are stored on this device.", savedTab: "Saved places", recentTab: "Recent searches", clearHistory: "Clear searches", noFavoritesTitle: "No saved places yet", noFavoritesBody: "Save a journey to find it here. Your searches stay on this device.", noRecentTitle: "No recent searches", noRecentBody: "Journeys you search for will appear here. Personal details are not stored on a server.", useSaved: "Use", removeSaved: "Remove saved place", removeConfirm: "Remove this saved place?", historyConfirm: "Clear all recent searches?", historyCleared: "Recent searches cleared.", savedToast: "Place saved on this device.", removedToast: "Place removed.",
    footerSlogan: "Your journey, made simple.", footerData: "Transit information is shown only from verified sources.", contact: "Contact", privacy: "Privacy", saveDialogKicker: "Save it for the way", saveDialogTitle: "Name this place", nameLabel: "Saved as", cancel: "Cancel", save: "Save", savedFrom: "From", savedTo: "To", closeMenu: "Close menu", openMenu: "Open menu", lightTheme: "Switch to light mode", darkTheme: "Switch to dark mode", favoriteNameRequired: "Enter a name for this place.", serverError: "The service is unavailable right now. Please try again later.",
    phoneLayoutKicker: "PERSONALIZE YOUR DISPLAY", phoneLayoutTitle: "Choose your phone layout", phoneLayoutDescription: "Choose a layout for smaller screens. Your choice is saved on this device.", phoneLayoutClassic: "Classic", phoneLayoutClassicDescription: "The standard GoWay layout", phoneLayoutCompact: "Compact", phoneLayoutCompactDescription: "More content with less scrolling", phoneLayoutSpacious: "Spacious", phoneLayoutSpaciousDescription: "Larger buttons and more breathing room", phoneLayoutSaved: "Phone layout updated.",
    homeIntroKicker: "Public transport, made simple", homeMapTitle: "Nearby stops", homeMapNote: "This is a general map. Your location is not collected without your permission.", openNearbyMap: "All nearby stops", linesOverviewTitle: "Explore bus lines", openLines: "All lines", lineSearchByNumber: "Search by line number", lineSearchByNumberHint: "Find a line and view its stops", lineSearchByArea: "Search by area or city", lineSearchByAreaHint: "Discover lines serving an area", lineSearchByDestination: "Search by destination and direction", lineSearchByDestinationHint: "View stops in route order", lineDataNotice: "Line details, stops, and arrivals will appear only after a verified transit data source is connected.",
    stopListKicker: "Nearby information", arrivalColumnLine: "Line", arrivalColumnDestination: "Direction", arrivalColumnTime: "Arrival", arrivalsDataNote: "Estimated arrival times are not shown without a verified data source.", lineDirectoryKicker: "Find a line", lineDirectoryTitle: "Search results", lineDetailsKicker: "Route and stops", lineDetailsTitle: "Line details", lineDetailsDescription: "When a line is selected, its direction, ordered stops, and trip information will appear here.", routeStructureLabel: "Layout preview", originStop: "Starting stop", originStopHint: "The first stop on the route", intermediateStops: "Intermediate stops", intermediateStopsHint: "Stops along the line", destinationStop: "Destination stop", destinationStopHint: "The final stop on the route", routePreviewDisclaimer: "This is a layout preview only, not real line data.", stopDataPending: "Stop data will appear after a transit data source is connected."
  }
};

const STORAGE = { language: "goway-language", theme: "goway-theme", phoneLayout: "goway-phone-layout", favorites: "goway-favorites", recent: "goway-recent" };
const state = { language: localStorage.getItem(STORAGE.language) === "en" ? "en" : "he", favorites: readStorage(STORAGE.favorites, []), recent: readStorage(STORAGE.recent, []), favoritesView: "favorites", toastTimer: 0, map: null, homeMap: null, userMarker: null, stopLayer: null, routeLayer: null, routeMap: null, selectedRoute: null, lineSearchTimer: 0 };
const t = (key) => translations[state.language][key] || translations.he[key] || key;

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    showToast(t("serverError"));
    return false;
  }
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "he" ? "rtl" : "ltr";
  document.title = state.language === "he" ? "GoWay | הדרך שלך, בפשטות" : "GoWay | Your journey, made simple";
  document.querySelector('meta[name="description"]').content = state.language === "he"
    ? "תכנון נסיעות, חיפוש תחנות ושמירת יעדים עם GoWay. מידע על קווים וזמני נסיעה יוצג רק לאחר חיבור למקור נתונים מאומת."
    : "Plan journeys, find nearby stops, and save your places with GoWay. Transit routes and times appear only when a verified data source is connected.";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n);
    if (element.dataset.i18n === "headline") element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-clear]").forEach((button) => {
    button.setAttribute("aria-label", state.language === "he" ? "ניקוי שדה" : "Clear field");
  });
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    const active = link.dataset.pageLink === currentPage();
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const languageButton = document.querySelector("#language-toggle");
  languageButton.textContent = state.language === "he" ? "EN" : "עב";
  languageButton.title = state.language === "he" ? "English" : "עברית";
  languageButton.setAttribute("aria-label", state.language === "he" ? "Switch to English" : "Switch to Hebrew");
  const menuButton = document.querySelector("#menu-toggle");
  menuButton.setAttribute("aria-label", document.querySelector("#mobile-nav").hidden ? t("openMenu") : t("closeMenu"));
  updateThemeButton();
  const phoneLayoutButton = document.querySelector("#phone-layout-toggle");
  phoneLayoutButton.title = t("phoneLayoutTitle");
  phoneLayoutButton.setAttribute("aria-label", t("phoneLayoutTitle"));
  document.querySelector("#close-phone-layout-dialog").setAttribute("aria-label", state.language === "he" ? "סגירה" : "Close");
  document.querySelector(".phone-layout-options").setAttribute("aria-label", state.language === "he" ? "בחירת פריסת טלפון" : "Choose a phone layout");
  renderFavorites();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  saveStorage(STORAGE.theme, theme);
  updateThemeButton();
}

function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  const button = document.querySelector("#theme-toggle");
  if (!button) return;
  button.setAttribute("aria-label", t(dark ? "lightTheme" : "darkTheme"));
  button.title = t(dark ? "lightTheme" : "darkTheme");
  button.innerHTML = dark ? '<span aria-hidden="true">☼</span>' : '<span aria-hidden="true">◐</span>';
}

function applyPhoneLayout(layout) {
  const allowedLayouts = ["classic", "compact", "spacious"];
  const selectedLayout = allowedLayouts.includes(layout) ? layout : "classic";
  document.documentElement.dataset.phoneLayout = selectedLayout;
  try {
    localStorage.setItem(STORAGE.phoneLayout, selectedLayout);
  } catch {
    // The layout still applies for this session if storage is unavailable.
  }
  document.querySelectorAll("[data-phone-layout-option]").forEach((button) => {
    const selected = button.dataset.phoneLayoutOption === selectedLayout;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function currentPage() {
  const page = window.location.hash.slice(1);
  return document.querySelector(`[data-page="${CSS.escape(page)}"]`) ? page : "home";
}

function showPage() {
  const page = currentPage();
  document.querySelectorAll(".page-view").forEach((view) => {
    const visible = view.dataset.page === page;
    view.hidden = !visible;
    view.classList.toggle("is-visible", visible);
  });
  document.querySelectorAll("[data-page-link]").forEach((link) => {
    const active = link.dataset.pageLink === page;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  closeMobileMenu();
  if (page === "nearby") window.setTimeout(initializeMap, 0);
  if (page === "home") window.setTimeout(initializeHomeMap, 0);
  if (page === "favorites") renderFavorites();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2600);
}

function getLocations() {
  return { origin: document.querySelector("#origin").value.trim(), destination: document.querySelector("#destination").value.trim() };
}

function setLocations(origin, destination) {
  document.querySelector("#origin").value = origin;
  document.querySelector("#destination").value = destination;
  document.querySelector("#origin-secondary").value = origin;
  document.querySelector("#destination-secondary").value = destination;
  updateJourneyControls();
}

function updateJourneyControls() {
  const { origin, destination } = getLocations();
  document.querySelector("#save-journey").disabled = !origin || !destination;
  document.querySelectorAll("[data-clear]").forEach((button) => {
    button.hidden = !document.querySelector(`#${button.dataset.clear}`).value;
  });
}

function validateJourney(origin, destination, errorElement) {
  let message = "";
  if (!origin) message = t("originRequired");
  else if (!destination) message = t("destinationRequired");
  else if (origin.localeCompare(destination, undefined, { sensitivity: "base" }) === 0) message = t("locationsSame");
  errorElement.textContent = message;
  errorElement.hidden = !message;
  return !message;
}

function addRecent(origin, destination) {
  const item = { origin, destination, at: Date.now() };
  state.recent = [item, ...state.recent.filter((entry) => entry.origin !== origin || entry.destination !== destination)].slice(0, 8);
  saveStorage(STORAGE.recent, state.recent);
}

async function requestData(path, params = {}, signal = undefined) {
  const url = new URL(path, window.location.origin);
  Object.entries(params).forEach(([key, value]) => { if (value) url.searchParams.set(key, value); });
  const response = await fetch(url, { headers: { Accept: "application/json" }, signal: signal || AbortSignal.timeout(10000) });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const resource = path.split("/").at(-1);
    const unavailableKey = {
      journeys: "journeyUnavailable",
      stops: "nearbyUnavailable",
      lines: "linesUnavailable",
      suggestions: "nearbyUnavailable"
    }[resource];
    const message = payload.error === "transit_data_unavailable" && unavailableKey
      ? t(unavailableKey)
      : payload.message || t("serverError");
    throw new Error(message);
  }
  return payload;
}

async function searchJourney(origin, destination, feedbackElement, resultElement, errorElement) {
  if (!validateJourney(origin, destination, errorElement)) return;
  setLocations(origin, destination);
  addRecent(origin, destination);
  if (feedbackElement) {
    feedbackElement.hidden = false;
    feedbackElement.dataset.kind = "loading";
    feedbackElement.textContent = state.language === "he" ? "בודקים אפשרויות נסיעה..." : "Checking journey options...";
  }
  if (resultElement) {
    resultElement.removeAttribute("data-kind");
    resultElement.querySelector("h2").textContent = state.language === "he" ? "מחפשים מסלולים..." : "Searching for routes...";
    resultElement.querySelector("p").textContent = state.language === "he" ? "בודקים מול מקור נתוני התחבורה." : "Checking the transit data source.";
  }
  try {
    const response = await requestData("/api/journeys", { from: origin, to: destination });
    const journeys = Array.isArray(response.journeys) ? response.journeys : [];
    if (!journeys.length) throw new Error(t("journeyUnavailable"));
    renderJourneys(journeys, feedbackElement, resultElement);
  } catch (error) {
    const message = error.message === "Failed to fetch" || error.name === "TimeoutError" ? t("serverError") : error.message;
    if (feedbackElement) {
      feedbackElement.dataset.kind = "error";
      feedbackElement.replaceChildren(document.createTextNode(message + " "));
      const retry = document.createElement("button");
      retry.className = "feedback-retry";
      retry.type = "button";
      retry.textContent = t("retry");
      retry.addEventListener("click", () => searchJourney(origin, destination, feedbackElement, resultElement, errorElement));
      feedbackElement.append(retry);
    }
    if (resultElement) {
      resultElement.dataset.kind = "error";
      resultElement.querySelector("h2").textContent = state.language === "he" ? "אין כרגע מידע על מסלולים" : "Route information is unavailable";
      resultElement.querySelector("p").textContent = message;
      let retry = resultElement.querySelector(".result-retry");
      if (!retry) {
        retry = document.createElement("button");
        retry.className = "button button-outline result-retry";
        retry.type = "button";
        retry.textContent = t("retry");
        resultElement.append(retry);
      }
      retry.onclick = () => searchJourney(origin, destination, feedbackElement, resultElement, errorElement);
    }
  }
}

function renderJourneys(journeys, feedback, result) {
  if (feedback) {
    feedback.dataset.kind = "success";
    feedback.textContent = state.language === "he" ? `נמצאו ${journeys.length} מסלולים.` : `${journeys.length} journeys found.`;
  }
  if (result) {
    result.dataset.kind = "success";
    result.querySelector("h2").textContent = state.language === "he" ? `נמצאו ${journeys.length} מסלולים` : `${journeys.length} journeys found`;
    result.querySelector("p").textContent = state.language === "he" ? "המסלולים התקבלו ממקור נתונים מחובר." : "Journeys were returned by the connected data source.";
  }
}

function openSaveDialog() {
  const { origin, destination } = getLocations();
  if (!origin || !destination) return;
  document.querySelector("#dialog-route").textContent = `${origin}  ←  ${destination}`;
  document.querySelector("#favorite-name").value = destination;
  document.querySelector("#save-dialog").showModal();
  document.querySelector("#favorite-name").focus();
}

function saveFavorite(name) {
  const { origin, destination } = getLocations();
  const favorite = { id: crypto.randomUUID(), name, origin, destination, created: Date.now() };
  state.favorites = [favorite, ...state.favorites];
  if (!saveStorage(STORAGE.favorites, state.favorites)) return;
  renderFavorites();
  showToast(t("savedToast"));
}

function renderFavorites() {
  const list = document.querySelector("#saved-list");
  if (!list) return;
  const isRecent = state.favoritesView === "recent";
  document.querySelector("#favorites-tab").classList.toggle("is-selected", !isRecent);
  document.querySelector("#favorites-tab").setAttribute("aria-selected", String(!isRecent));
  document.querySelector("#recent-tab").classList.toggle("is-selected", isRecent);
  document.querySelector("#recent-tab").setAttribute("aria-selected", String(isRecent));
  document.querySelector("#clear-recent").hidden = !isRecent || !state.recent.length;
  const entries = isRecent ? state.recent : state.favorites;
  if (!entries.length) {
    const title = document.createElement("strong");
    title.textContent = t(isRecent ? "noRecentTitle" : "noFavoritesTitle");
    const text = document.createElement("p");
    text.textContent = t(isRecent ? "noRecentBody" : "noFavoritesBody");
    const icon = document.createElement("span");
    icon.className = "empty-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = isRecent ? "◷" : "☆";
    const empty = document.createElement("div");
    empty.className = "empty-saved";
    empty.append(icon, title, text);
    list.replaceChildren(empty);
    return;
  }
  const cards = entries.map((entry) => {
    const card = document.createElement("article");
    card.className = "saved-card";
    const icon = document.createElement("span");
    icon.className = "saved-card-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = isRecent ? "◷" : "↗";
    const copy = document.createElement("div");
    copy.className = "saved-card-copy";
    const name = document.createElement("strong");
    name.textContent = isRecent ? `${entry.origin}  ←  ${entry.destination}` : entry.name;
    const route = document.createElement("span");
    route.textContent = `${t("savedFrom")}: ${entry.origin} · ${t("savedTo")}: ${entry.destination}`;
    copy.append(name, route);
    const use = document.createElement("button");
    use.className = "saved-card-use";
    use.type = "button";
    use.textContent = t("useSaved");
    use.addEventListener("click", () => {
      setLocations(entry.origin, entry.destination);
      window.location.hash = "planner";
    });
    card.append(icon, copy, use);
    if (!isRecent) {
      const remove = document.createElement("button");
      remove.className = "saved-card-delete";
      remove.type = "button";
      remove.textContent = "×";
      remove.setAttribute("aria-label", t("removeSaved"));
      remove.addEventListener("click", () => {
        if (!window.confirm(t("removeConfirm"))) return;
        state.favorites = state.favorites.filter((favorite) => favorite.id !== entry.id);
        saveStorage(STORAGE.favorites, state.favorites);
        renderFavorites();
        showToast(t("removedToast"));
      });
      card.append(remove);
    }
    return card;
  });
  list.replaceChildren(...cards);
}


function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function renderPlaceSuggestions(inputId, datalistId, suggestions) {
  const list = document.querySelector("#" + datalistId);
  if (!list) return;
  list.replaceChildren(...suggestions.map((item) => {
    const option = document.createElement("option");
    option.value = item.label;
    return option;
  }));
}
function attachPlaceAutocomplete(inputId, datalistId) {
  const input = document.querySelector("#" + inputId);
  let timer = 0;
  let controller = null;
  input.addEventListener("input", () => {
    window.clearTimeout(timer);
    const query = input.value.trim();
    if (query.length < 2) { renderPlaceSuggestions(inputId, datalistId, []); return; }
    timer = window.setTimeout(async () => {
      if (controller) controller.abort();
      controller = new AbortController();
      try {
        const response = await requestData("/api/suggestions", { q: query, lang: state.language }, controller.signal);
        renderPlaceSuggestions(inputId, datalistId, response.suggestions || []);
      } catch (error) {
        if (error.name !== "AbortError") console.warn("Place suggestions unavailable", error.message);
      }
    }, 280);
  });
}
function renderLineResults(routes) {
  const container = document.querySelector("#lines-results");
  document.querySelector("#line-count").textContent = String(routes.length);
  if (!routes.length) {
    const empty = makeElement("div", "lines-empty-state");
    empty.append(makeElement("span", "empty-icon", "↔"),
      makeElement("h3", "", state.language === "he" ? "לא נמצאו קווים" : "No lines found"),
      makeElement("p", "", state.language === "he" ? "נסו מספר קו, עיר או יעד אחר." : "Try a line number, city or destination."));
    container.replaceChildren(empty);
    return;
  }
  const cards = routes.map((route) => {
    const button = makeElement("button", "route-result-card");
    button.type = "button";
    button.setAttribute("aria-pressed", String(state.selectedRoute === route.id));
    const number = makeElement("span", "route-result-number", route.number);
    const copy = makeElement("span", "route-result-copy");
    copy.append(makeElement("strong", "", route.name || (state.language === "he" ? "מסלול אוטובוס" : "Bus route")),
      makeElement("small", "", [route.operator, route.direction].filter(Boolean).join(" · ") || (state.language === "he" ? "פרטי מפעיל לא זמינים" : "Operator details unavailable")));
    button.append(number, copy, makeElement("span", "route-result-arrow", state.language === "he" ? "←" : "→"));
    button.addEventListener("click", () => {
      state.selectedRoute = route.id;
      container.querySelectorAll(".route-result-card").forEach((card) => card.setAttribute("aria-pressed", String(card === button)));
      loadRouteDetails(route.id);
    });
    return button;
  });
  container.replaceChildren(...cards);
}

async function loadRouteDetails(routeId) {
  const panel = document.querySelector(".line-details-panel");
  const description = panel.querySelector(".line-details-description");
  const preview = panel.querySelector(".route-structure-preview");
  if (state.routeMap) {
    state.routeMap.remove();
    state.routeMap = null;
  }
  description.textContent = state.language === "he" ? "טוענים את פרטי הקו והתחנות..." : "Loading route and stops...";
  preview.hidden = true;
  try {
    const details = await requestData("/api/routes/" + encodeURIComponent(routeId));
    const route = details.route || {};
    const stops = Array.isArray(details.stops) ? details.stops : [];
    const vehicles = Array.isArray(details.liveVehicles) ? details.liveVehicles : [];
    description.textContent = [details.direction, route.operator].filter(Boolean).join(" · ") || (state.language === "he" ? "מסלול הקו" : "Line route");

    const summary = makeElement("div", "route-detail-summary");
    summary.append(
      makeElement("span", "route-detail-line-badge", route.number || "—"),
      makeElement("span", "route-detail-summary-copy", route.name || (state.language === "he" ? "קו אוטובוס" : "Bus line"))
    );

    const mapWrap = makeElement("div", "route-map-frame");
    const mapElement = makeElement("div", "route-detail-map");
    mapElement.id = "route-detail-map";
    mapWrap.append(mapElement);

    const legend = makeElement("div", "route-map-legend");
    legend.append(
      makeElement("span", "route-legend-item route-legend-path", state.language === "he" ? "מסלול הקו" : "Route"),
      makeElement("span", "route-legend-item route-legend-stop", state.language === "he" ? "תחנות" : "Stops"),
      makeElement("span", "route-legend-item route-legend-bus", state.language === "he" ? "מיקום GPS אחרון" : "Last GPS position")
    );

    const list = makeElement("ol", "route-station-list route-station-list-live");
    stops.forEach((stop, index) => {
      const item = makeElement("li");
      const dot = makeElement("span", "route-station-dot" + (index === stops.length - 1 ? " destination" : ""));
      const copy = makeElement("div");
      copy.append(makeElement("strong", "", stop.name));
      const timing = stop.departure || stop.arrival;
      if (timing) copy.append(makeElement("small", "", (state.language === "he" ? "שעה מתוכננת: " : "Scheduled: ") + String(timing)));
      item.append(dot, copy);
      list.append(item);
    });
    if (!stops.length) list.append(makeElement("li", "route-no-stops", state.language === "he" ? "נמצאו פרטי קו, אך לא התקבלה רשימת תחנות זמינה למסלול זה." : "Route details were found, but no stop sequence is available."));

    const gpsStatus = makeElement("div", "route-gps-status");
    if (vehicles.length) {
      const newest = vehicles.map((vehicle) => Date.parse(vehicle.recordedAt || "")).filter(Number.isFinite).sort((a,b) => b-a)[0];
      const timeText = newest ? new Date(newest).toLocaleString(state.language === "he" ? "he-IL" : "en-GB", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" }) : "";
      const ageMinutes = newest ? Math.max(0, Math.round((Date.now() - newest) / 60000)) : null;
      gpsStatus.dataset.state = "available";
      gpsStatus.textContent = state.language === "he"
        ? `התקבלו ${vehicles.length} מיקומי GPS. עדכון אחרון: ${timeText}${ageMinutes !== null ? ` · לפני כ-${ageMinutes} דקות` : ""}`
        : `${vehicles.length} GPS positions received. Last update: ${timeText}${ageMinutes !== null ? ` · about ${ageMinutes} min ago` : ""}`;
    } else {
      gpsStatus.dataset.state = "unavailable";
      gpsStatus.textContent = state.language === "he"
        ? "אין כרגע מיקום GPS זמין לקו הזה. מוצגים מסלול ולוח זמנים מתוכנן בלבד."
        : "No GPS position is currently available for this line. Only the planned route and timetable are shown.";
    }

    const notice = makeElement("p", "preview-disclaimer", state.language === "he"
      ? "התחנות והשעות מבוססות על לוח הזמנים המתוכנן. סמן האוטובוס, אם מופיע, מבוסס על דיווח GPS אחרון שהתקבל ואינו מבטיח מיקום חי."
      : "Stops and times use the planned timetable. A bus marker, when shown, is based on the latest received GPS report and is not guaranteed live.");
    preview.replaceChildren(summary, mapWrap, legend, gpsStatus, list, notice);
    preview.hidden = false;

    const validStops = stops.filter((stop) => Number.isFinite(stop.lat) && Number.isFinite(stop.lon));
    const validVehicles = vehicles.filter((vehicle) => Number.isFinite(vehicle.lat) && Number.isFinite(vehicle.lon));
    if (window.L && (validStops.length || validVehicles.length)) {
      const firstPoint = validStops[0] || validVehicles[0];
      const map = L.map(mapElement, { scrollWheelZoom: false }).setView([firstPoint.lat, firstPoint.lon], 12);
      state.routeMap = map;
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
      }).addTo(map);

      validStops.forEach((stop, index) => {
        L.circleMarker([stop.lat, stop.lon], {
          radius: index === 0 || index === validStops.length - 1 ? 8 : 5,
          color: index === validStops.length - 1 ? "#0f3b83" : "#ffffff",
          weight: 2,
          fillColor: "#2563eb",
          fillOpacity: 1
        }).bindPopup((index + 1) + ". " + stop.name).addTo(map);
      });
      if (validStops.length > 1) {
        const line = L.polyline(validStops.map((stop) => [stop.lat, stop.lon]), {
          color: "#2563eb", weight: 6, opacity: .88, lineCap: "round", lineJoin: "round"
        }).addTo(map);
        map.fitBounds(line.getBounds(), { padding: [28, 28] });
      }

      validVehicles.forEach((vehicle, index) => {
        const busIcon = L.divIcon({
          className: "goway-bus-div-icon",
          html: '<span aria-hidden="true">🚌</span>',
          iconSize: [38, 38],
          iconAnchor: [19, 19]
        });
        const recorded = vehicle.recordedAt ? new Date(vehicle.recordedAt).toLocaleString(state.language === "he" ? "he-IL" : "en-GB") : "";
        L.marker([vehicle.lat, vehicle.lon], { icon: busIcon })
          .bindPopup((state.language === "he" ? "מיקום GPS אחרון" : "Last GPS position") + (recorded ? ": " + recorded : "") + (vehicle.velocity !== null ? " · " + Math.round(vehicle.velocity) + " km/h" : ""))
          .addTo(map);
      });
      if (validStops.length < 2 && validVehicles.length) {
        map.fitBounds(L.latLngBounds(validVehicles.map((vehicle) => [vehicle.lat, vehicle.lon])).pad(.2));
      }
      window.setTimeout(() => map.invalidateSize(), 80);
    } else {
      mapWrap.append(makeElement("p", "route-map-note", state.language === "he" ? "אין קואורדינטות זמינות להצגת המסלול על המפה." : "Coordinates are not available for this route map."));
    }
  } catch (error) {
    description.textContent = error.message || t("linesUnavailable");
    preview.hidden = false;
  }
}

async function searchNearby(query) {
  const status = document.querySelector("#nearby-status");
  const results = document.querySelector(".stop-results");
  const empty = document.querySelector("#stops-empty-state");
  status.textContent = state.language === "he" ? "מחפשים תחנות..." : "Searching for stops...";
  try {
    const position = state.userMarker?.getLatLng();
    const response = await requestData("/api/stops", { q: query, lat: position?.lat, lon: position?.lng, lang: state.language });
    const stops = Array.isArray(response.stops) ? response.stops : [];
    empty.hidden = stops.length > 0;
    document.querySelector("#arrival-column-labels").hidden = stops.length === 0;
    document.querySelector("#arrivals-data-note").hidden = stops.length === 0;
    results.querySelector(".nearby-stop-results")?.remove();
    const resultBox = makeElement("div", "nearby-stop-results");
    if (state.stopLayer) state.stopLayer.clearLayers();
    else if (state.map && window.L) state.stopLayer = L.layerGroup().addTo(state.map);
    const validPoints = [];
    stops.forEach((stop) => {
      const card = makeElement("button", "nearby-stop-card");
      card.type = "button";
      const copy = makeElement("span", "nearby-stop-copy");
      copy.append(makeElement("strong", "", stop.name));
      const detail = [stop.city, stop.distanceMeters !== null ? (stop.distanceMeters < 1000 ? stop.distanceMeters + (state.language === "he" ? " מ׳" : " m") : (stop.distanceMeters / 1000).toFixed(1) + (state.language === "he" ? " ק״מ" : " km")) : ""].filter(Boolean).join(" · ");
      copy.append(makeElement("small", "", detail));
      card.append(makeElement("span", "nearby-stop-icon", "●"), copy, makeElement("span", "nearby-stop-arrow", "›"));
      card.addEventListener("click", () => {
        if (state.map && Number.isFinite(stop.lat) && Number.isFinite(stop.lon)) state.map.flyTo([stop.lat, stop.lon], 17);
        loadStopArrivals(stop.id, card);
      });
      resultBox.append(card);
      if (state.stopLayer && Number.isFinite(stop.lat) && Number.isFinite(stop.lon)) {
        const marker = L.circleMarker([stop.lat, stop.lon], { radius: 7, color: "#fff", weight: 2, fillColor: "#2563eb", fillOpacity: .95 }).bindPopup(stop.name);
        marker.addTo(state.stopLayer);
        validPoints.push([stop.lat, stop.lon]);
      }
    });
    results.insertBefore(resultBox, document.querySelector("#arrival-column-labels"));
    if (state.map && validPoints.length) state.map.fitBounds(L.latLngBounds(validPoints).pad(.18), { maxZoom: 15 });
    status.textContent = stops.length ? `${stops.length} ${state.language === "he" ? "תחנות נמצאו" : "stops found"} · ${response.city || query}` : (response.message || (state.language === "he" ? "לא נמצאו תחנות בעיר הזו." : "No stops found for this city."));
  } catch (error) { status.textContent = error.message || t("nearbyUnavailable"); }
}
async function loadStopArrivals(stopId, card) {
  let box = card.querySelector(".stop-arrivals");
  if (!box) { box = makeElement("span", "stop-arrivals"); card.append(box); }
  box.textContent = state.language === "he" ? "טוענים לוח זמנים..." : "Loading timetable...";
  try {
    const response = await requestData("/api/stops/" + encodeURIComponent(stopId) + "/arrivals");
    const arrivals = Array.isArray(response.arrivals) ? response.arrivals : [];
    box.textContent = arrivals.length ? arrivals.slice(0, 4).map((item) => [item.line, item.destination, item.arrival || item.departure].filter(Boolean).join(" · ")).join(" | ") : (state.language === "he" ? "אין כרגע שעות מתוכננות זמינות לתחנה." : "No scheduled times are currently available for this stop.");
  } catch (error) { box.textContent = error.message || t("nearbyUnavailable"); }
}
async function searchLines(query) {
  const status = document.querySelector("#lines-status");
  status.textContent = state.language === "he" ? "מחפשים קווים..." : "Searching for lines...";
  try {
    const response = await requestData("/api/lines", { q: query });
    const routes = Array.isArray(response.routes) ? response.routes : [];
    renderLineResults(routes);
    document.querySelector("#line-suggestions").replaceChildren(...routes.map((route) => {
      const option = document.createElement("option");
      option.value = route.number;
      return option;
    }));
    status.textContent = routes.length ? `${routes.length} ${state.language === "he" ? "קווים נמצאו" : "lines found"}` : (state.language === "he" ? "לא נמצאו קווים מתאימים. נסו מספר קו." : "No matching lines. Try a line number.");
  } catch (error) {
    status.textContent = error.message || t("linesUnavailable");
    renderLineResults([]);
  }
}

function initializeMap() {
  const mapElement = document.querySelector("#nearby-map");
  if (state.map) {
    state.map.invalidateSize();
    return;
  }
  if (!window.L || !mapElement) {
    document.querySelector("#map-fallback").hidden = false;
    return;
  }
  try {
    state.map = L.map(mapElement, { scrollWheelZoom: true, zoomControl: false }).setView([32.0853, 34.7818], 12);
    L.control.zoom({ position: "bottomright" }).addTo(state.map);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(state.map).on("tileerror", () => { document.querySelector("#map-fallback").hidden = false; });
    state.stopLayer = L.layerGroup().addTo(state.map);
  } catch {
    document.querySelector("#map-fallback").hidden = false;
  }
}

function initializeHomeMap() {
  const mapElement = document.querySelector("#home-map");
  if (state.homeMap) {
    state.homeMap.invalidateSize();
    return;
  }
  if (!window.L || !mapElement) {
    document.querySelector("#home-map-fallback").hidden = false;
    return;
  }
  try {
    state.homeMap = L.map(mapElement, { scrollWheelZoom: false, dragging: true, zoomControl: false }).setView([32.0853, 34.7818], 11);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }).addTo(state.homeMap).on("tileerror", () => {
      document.querySelector("#home-map-fallback").hidden = false;
    });
  } catch {
    document.querySelector("#home-map-fallback").hidden = false;
  }
}

function locateUser() {
  if (!navigator.geolocation) {
    document.querySelector("#nearby-status").textContent = t("locationUnsupported");
    return;
  }
  const status = document.querySelector("#nearby-status");
  status.textContent = state.language === "he" ? "ממתינים לאישור המיקום שלך..." : "Waiting for your location permission...";
  navigator.geolocation.getCurrentPosition((position) => {
    initializeMap();
    const { latitude, longitude } = position.coords;
    if (state.map) {
      state.map.setView([latitude, longitude], 15);
      if (state.userMarker) state.userMarker.setLatLng([latitude, longitude]);
      else state.userMarker = L.circleMarker([latitude, longitude], { radius: 8, color: "#1d4ed8", fillColor: "#2563eb", fillOpacity: .85, weight: 3 }).addTo(state.map);
    }
    status.textContent = t("locationFound");
    searchNearby("");
  }, (error) => {
    status.textContent = error.code === error.PERMISSION_DENIED ? t("locationDenied") : t("locationFailed");
  }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 });
}

function closeMobileMenu() {
  const nav = document.querySelector("#mobile-nav");
  nav.hidden = true;
  document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector("#menu-toggle").setAttribute("aria-label", t("openMenu"));
}

function bindEvents() {
  document.querySelectorAll("[data-page-link], [data-go-page]").forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.hash = element.dataset.pageLink || element.dataset.goPage;
    });
  });
  window.addEventListener("hashchange", showPage);
  document.querySelector("#language-toggle").addEventListener("click", () => {
    state.language = state.language === "he" ? "en" : "he";
    saveStorage(STORAGE.language, state.language);
    applyLanguage();
  });
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });
  const phoneLayoutDialog = document.querySelector("#phone-layout-dialog");
  document.querySelector("#phone-layout-toggle").addEventListener("click", () => phoneLayoutDialog.showModal());
  document.querySelector("#close-phone-layout-dialog").addEventListener("click", () => phoneLayoutDialog.close());
  document.querySelectorAll("[data-phone-layout-option]").forEach((button) => {
    button.addEventListener("click", () => {
      applyPhoneLayout(button.dataset.phoneLayoutOption);
      phoneLayoutDialog.close();
      showToast(t("phoneLayoutSaved"));
    });
  });
  phoneLayoutDialog.addEventListener("click", (event) => {
    if (event.target === phoneLayoutDialog) phoneLayoutDialog.close();
  });
  document.querySelector("#menu-toggle").addEventListener("click", (event) => {
    const nav = document.querySelector("#mobile-nav");
    nav.hidden = !nav.hidden;
    event.currentTarget.setAttribute("aria-expanded", String(!nav.hidden));
    event.currentTarget.setAttribute("aria-label", t(nav.hidden ? "openMenu" : "closeMenu"));
  });
  document.querySelectorAll(".field-content input").forEach((input) => input.addEventListener("input", updateJourneyControls));
  document.querySelectorAll("[data-clear]").forEach((button) => button.addEventListener("click", () => {
    const input = document.querySelector(`#${button.dataset.clear}`);
    input.value = "";
    input.focus();
    updateJourneyControls();
  }));
  document.querySelector("#swap-locations").addEventListener("click", () => {
    const { origin, destination } = getLocations();
    setLocations(destination, origin);
    document.querySelector("#origin").focus();
  });
  document.querySelector("#journey-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const { origin, destination } = getLocations();
    searchJourney(origin, destination, document.querySelector("#journey-feedback"), null, document.querySelector("#journey-error"));
  });
  document.querySelector("#journey-form-secondary").addEventListener("submit", (event) => {
    event.preventDefault();
    searchJourney(document.querySelector("#origin-secondary").value.trim(), document.querySelector("#destination-secondary").value.trim(), null, document.querySelector("#planner-result"), document.querySelector("#secondary-error"));
  });
  document.querySelector("#save-journey").addEventListener("click", openSaveDialog);
  document.querySelector("#save-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#favorite-name").value.trim();
    if (!name) {
      document.querySelector("#favorite-name").setCustomValidity(t("favoriteNameRequired"));
      document.querySelector("#favorite-name").reportValidity();
      return;
    }
    document.querySelector("#favorite-name").setCustomValidity("");
    saveFavorite(name);
    document.querySelector("#save-dialog").close();
  });
  document.querySelector("#favorite-name").addEventListener("input", (event) => event.currentTarget.setCustomValidity(""));
  document.querySelector("#cancel-dialog").addEventListener("click", () => document.querySelector("#save-dialog").close());
  document.querySelector("#close-dialog").addEventListener("click", () => document.querySelector("#save-dialog").close());
  document.querySelector("#favorites-tab").addEventListener("click", () => { state.favoritesView = "favorites"; renderFavorites(); });
  document.querySelector("#recent-tab").addEventListener("click", () => { state.favoritesView = "recent"; renderFavorites(); });
  document.querySelector("#clear-recent").addEventListener("click", () => {
    if (!window.confirm(t("historyConfirm"))) return;
    state.recent = [];
    saveStorage(STORAGE.recent, state.recent);
    renderFavorites();
    showToast(t("historyCleared"));
  });
  attachPlaceAutocomplete("origin", "place-suggestions-origin");
  attachPlaceAutocomplete("destination", "place-suggestions-destination");
  attachPlaceAutocomplete("nearby-query", "place-suggestions-nearby");
  let lineSearchTimer = 0;
  document.querySelector("#line-query").addEventListener("input", (event) => {
    window.clearTimeout(lineSearchTimer);
    const query = event.currentTarget.value.trim();
    if (query.length >= 1) lineSearchTimer = window.setTimeout(() => searchLines(query), 320);
  });
  document.querySelector("#nearby-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.querySelector("#nearby-query").value.trim();
    if (!query) {
      document.querySelector("#nearby-query").focus();
      return;
    }
    searchNearby(query);
  });
  document.querySelector("#locate-me").addEventListener("click", locateUser);
  document.querySelector("#lines-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.querySelector("#line-query").value.trim();
    if (!query) {
      document.querySelector("#lines-status").textContent = t("queryRequired");
      document.querySelector("#line-query").focus();
      return;
    }
    searchLines(query);
  });
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  document.querySelector("#save-dialog").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
}

const savedTheme = localStorage.getItem(STORAGE.theme);
const savedPhoneLayout = localStorage.getItem(STORAGE.phoneLayout);
document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
applyPhoneLayout(savedPhoneLayout);
applyLanguage();
bindEvents();
showPage();